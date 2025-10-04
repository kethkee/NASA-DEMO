const stateDataInfo = {
    "Kerala": { lat: 10.8505, lon: 76.2711, hotspots: ["Alappuzha","Kollam"] },
    "Tamil Nadu": { lat: 11.1271, lon: 78.6569, hotspots: ["Chennai","Coimbatore"] },
    "Maharashtra": { lat: 19.7515, lon: 75.7139, hotspots: ["Mumbai","Pune"] },
    "Delhi": { lat: 28.6139, lon: 77.2090, hotspots: ["New Delhi"] },
    "Karnataka": { lat: 15.3173, lon: 75.7139, hotspots: ["Bengaluru","Mysuru"] }
};

const riskColors = { "High": "#c0392b", "Medium": "#f39c12", "Low": "#16a085" };

const width = 900, height = 600;
const svg = d3.select("#indiaMap").append("svg").attr("width", width).attr("height", height);
const projection = d3.geoMercator().scale(1000).translate([width / 2, height / 1.5]);
const path = d3.geoPath().projection(projection);

const tooltip = d3.select("body").append("div").attr("class","tooltip").style("opacity",0);

d3.json("data/indiaStates.geojson").then(data => {
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#ecf0f1")
        .attr("stroke", "#34495e")
        .attr("class","state")
        .on("mouseover", function(event,d) {
            tooltip.transition().duration(200).style("opacity",.9);
            tooltip.html(d.properties.st_nm)
                   .style("left",(event.pageX+10)+"px")
                   .style("top",(event.pageY-28)+"px");
        })
        .on("mouseout", function(){ tooltip.transition().duration(500).style("opacity",0); })
        .on("click", function(event,d){ showStateData(d.properties.st_nm); });
});

async function showStateData(state) {
    if(!stateDataInfo[state]) return;
    const info = stateDataInfo[state];
    const div = document.getElementById("stateData");
    div.innerHTML = `<h3>${state}</h3>
                     <p><strong>Hotspots:</strong> ${info.hotspots.join(", ")}</p>
                     <p>Fetching NASA POWER data...</p>`;
    const start = "20250101"; // example
    const end = "20250107"; // example
    const url = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,RH2M,ALLSKY_SFC_SW_DWN&community=RE&longitude=${info.lon}&latitude=${info.lat}&start=${start}&end=${end}&format=JSON`;
    const res = await fetch(url);
    const data = await res.json();
    const temps = Object.values(data.properties.parameter.T2M);
    const humidity = Object.values(data.properties.parameter.RH2M);
    const radiation = Object.values(data.properties.parameter.ALLSKY_SFC_SW_DWN);
    div.innerHTML += `<p><strong>Avg Temp:</strong> ${Math.round(avg(temps))}°C</p>
                      <p><strong>Avg Humidity:</strong> ${Math.round(avg(humidity))}%</p>
                      <p><strong>Avg Solar Radiation:</strong> ${Math.round(avg(radiation))} W/m²</p>`;
}

function avg(arr){ return arr.reduce((a,b)=>a+b,0)/arr.length; }
