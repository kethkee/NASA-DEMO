const riskColors = {
    "high": "#c0392b", // Red
    "medium": "#f39c12", // Orange
    "low": "#16a085" // Green/Blue
};

// --- DATA DEFINITION ---

// Expanded list of waterbodies (Fixed Base Risk for visual representation)
const waterbodies = [
    // Southern States
    {"name": "Vembanad Lake", "state": "Kerala", "lat": 9.55, "lon": 76.49, "risk": "high"},
    {"name": "Ashtamudi Lake", "state": "Kerala", "lat": 9.00, "lon": 76.54, "risk": "medium"},
    {"name": "Pulicat Lake", "state": "Andhra Pradesh", "lat": 13.72, "lon": 80.20, "risk": "medium"},
    {"name": "Kolleru Lake", "state": "Andhra Pradesh", "lat": 16.71, "lon": 81.16, "risk": "low"},
    {"name": "Hussain Sagar", "state": "Telangana", "lat": 17.42, "lon": 78.47, "risk": "low"},
    {"name": "Godavari River (Bhadra)", "state": "Telangana", "lat": 17.95, "lon": 79.52, "risk": "medium"},
    {"name": "Pichavaram Mangrove", "state": "Tamil Nadu", "lat": 11.40, "lon": 79.79, "risk": "low"},
    {"name": "Kaveri River (Mettur)", "state": "Tamil Nadu", "lat": 11.83, "lon": 77.80, "risk": "low"},
    {"name": "Tungabhadra Dam", "state": "Karnataka", "lat": 15.26, "lon": 76.32, "risk": "medium"},
    {"name": "Nethravathi River", "state": "Karnataka", "lat": 12.87, "lon": 74.83, "risk": "low"},

    // Western States
    {"name": "Sardar Sarovar Reservoir", "state": "Gujarat", "lat": 22.77, "lon": 73.80, "risk": "high"},
    {"name": "Nalsarovar Lake", "state": "Gujarat", "lat": 22.77, "lon": 72.04, "risk": "low"},
    {"name": "Sambhar Lake", "state": "Rajasthan", "lat": 26.95, "lon": 75.11, "risk": "high"},
    {"name": "Pichola Lake", "state": "Rajasthan", "lat": 24.57, "lon": 73.67, "risk": "medium"},
    {"name": "Ashti Lake", "state": "Maharashtra", "lat": 18.8, "lon": 73.8, "risk": "medium"},
    {"name": "Tansa Lake", "state": "Maharashtra", "lat": 19.46, "lon": 73.19, "risk": "low"},
    {"name": "Bicholim Lake", "state": "Goa", "lat": 15.60, "lon": 73.95, "risk": "low"},

    // Central & Northern States
    {"name": "Ganga River (Patna)", "state": "Bihar", "lat": 25.61, "lon": 85.14, "risk": "low"},
    {"name": "Tilaiya Dam", "state": "Jharkhand", "lat": 24.31, "lon": 85.55, "risk": "low"},
    {"name": "Maithon Dam", "state": "Jharkhand", "lat": 23.78, "lon": 86.81, "risk": "medium"},
    {"name": "Bhoj Wetland", "state": "Madhya Pradesh", "lat": 23.27, "lon": 77.41, "risk": "medium"},
    {"name": "Indirasagar Dam", "state": "Madhya Pradesh", "lat": 22.25, "lon": 76.47, "risk": "high"},
    {"name": "Durg Baffle", "state": "Chhattisgarh", "lat": 21.19, "lon": 81.33, "risk": "medium"},
    {"name": "Shivnath River", "state": "Chhattisgarh", "lat": 21.65, "lon": 82.20, "risk": "low"},
    {"name": "Yamuna River (Delhi)", "state": "Delhi", "lat": 28.61, "lon": 77.20, "risk": "medium"},
    {"name": "Sukhna Lake", "state": "Chandigarh", "lat": 30.74, "lon": 76.78, "risk": "low"},
    {"name": "Chittaranjan Park Lake", "state": "Delhi", "lat": 28.53, "lon": 77.25, "risk": "high"},

    // Himalayan States
    {"name": "Dal Lake", "state": "Jammu & Kashmir", "lat": 34.10, "lon": 74.85, "risk": "medium"},
    {"name": "Wular Lake", "state": "Jammu & Kashmir", "lat": 34.2, "lon": 74.55, "risk": "low"},
    {"name": "Pong Dam Reservoir", "state": "Himachal Pradesh", "lat": 32.30, "lon": 76.10, "risk": "high"},
    {"name": "Gobind Sagar", "state": "Himachal Pradesh", "lat": 31.65, "lon": 76.40, "risk": "medium"},
    {"name": "Bhimtal Lake", "state": "Uttarakhand", "lat": 29.38, "lon": 79.57, "risk": "low"},
    {"name": "Ganga River (Rishikesh)", "state": "Uttarakhand", "lat": 30.10, "lon": 78.29, "risk": "low"},

    // Eastern & Northeastern States
    {"name": "Chilika Lake", "state": "Odisha", "lat": 19.72, "lon": 85.35, "risk": "medium"},
    {"name": "Sambalpur Reservoir", "state": "Odisha", "lat": 21.47, "lon": 83.97, "risk": "low"},
    {"name": "Subarnarekha River", "state": "West Bengal", "lat": 22.05, "lon": 87.52, "risk": "low"},
    {"name": "Rabindra Sarobar Lake", "state": "West Bengal", "lat": 22.50, "lon": 88.35, "risk": "medium"},
    {"name": "Loktak Lake", "state": "Manipur", "lat": 24.5, "lon": 93.78, "risk": "high"},
    {"name": "Barak River", "state": "Manipur", "lat": 24.78, "lon": 93.93, "risk": "low"},
    {"name": "Umiam Lake", "state": "Meghalaya", "lat": 25.67, "lon": 91.88, "risk": "medium"},
    {"name": "Kynshi River", "state": "Meghalaya", "lat": 25.26, "lon": 91.68, "risk": "low"},
    {"name": "Sonepat River", "state": "Haryana", "lat": 29.0, "lon": 77.0, "risk": "low"},
    {"name": "Peshawar River", "state": "Haryana", "lat": 29.5, "lon": 77.5, "risk": "low"},
    {"name": "Ganga River (Varanasi)", "state": "Uttar Pradesh", "lat": 25.31, "lon": 82.97, "risk": "medium"},
    {"name": "Yamuna River (Agra)", "state": "Uttar Pradesh", "lat": 27.17, "lon": 78.04, "risk": "low"},
    {"name": "Brahmaputra River", "state": "Assam", "lat": 26.20, "lon": 91.70, "risk": "low"},
    {"name": "Deepor Beel", "state": "Assam", "lat": 26.10, "lon": 91.65, "risk": "medium"},
    {"name": "Rudrasagar Lake", "state": "Tripura", "lat": 23.44, "lon": 91.44, "risk": "low"},
    {"name": "Gomati River", "state": "Tripura", "lat": 23.46, "lon": 91.39, "risk": "low"},
    {"name": "Doyang Reservoir", "state": "Nagaland", "lat": 26.31, "lon": 94.38, "risk": "low"},
    {"name": "Tizu River", "state": "Nagaland", "lat": 26.16, "lon": 94.75, "risk": "low"},
    {"name": "Ghataprabha River", "state": "Goa", "lat": 15.42, "lon": 73.91, "risk": "low"},
    {"name": "Ghataprabha River", "state": "Punjab", "lat": 31.00, "lon": 75.00, "risk": "low"},
    {"name": "Kali Bein River", "state": "Punjab", "lat": 31.33, "lon": 75.76, "risk": "low"},
    {"name": "Pangong Tso", "state": "Arunachal Pradesh", "lat": 27.50, "lon": 92.50, "risk": "low"},
    {"name": "Subansiri River", "state": "Arunachal Pradesh", "lat": 27.50, "lon": 93.50, "risk": "low"},
];


// Data for NASA API access (using centroid coordinates)
const stateCoordinates = {
    "Andhra Pradesh": { lat: 15.9179, lon: 80.1246 },
    "Arunachal Pradesh": { lat: 28.2711, lon: 94.7278 },
    "Assam": { lat: 26.2006, lon: 92.9376 },
    "Bihar": { lat: 25.0961, lon: 85.3131 },
    "Chhattisgarh": { lat: 21.2787, lon: 81.8661 },
    "Goa": { lat: 15.2993, lon: 74.1240 },
    "Gujarat": { lat: 22.2587, lon: 71.1924 },
    "Haryana": { lat: 29.0588, lon: 76.0856 },
    "Himachal Pradesh": { lat: 31.1048, lon: 77.1734 },
    "Jharkhand": { lat: 23.6102, lon: 85.2799 },
    "Karnataka": { lat: 15.3173, lon: 75.7139 },
    "Kerala": { lat: 10.8505, lon: 76.2711 },
    "Madhya Pradesh": { lat: 22.9734, lon: 78.6569 },
    "Maharashtra": { lat: 19.7515, lon: 75.7139 },
    "Manipur": { lat: 24.6637, lon: 93.9063 },
    "Meghalaya": { lat: 25.4670, lon: 91.3662 },
    "Mizoram": { lat: 23.1645, lon: 92.9376 },
    "Nagaland": { lat: 26.1584, lon: 94.5624 },
    "Odisha": { lat: 20.9517, lon: 85.0985 },
    "Punjab": { lat: 31.1471, lon: 75.3412 },
    "Rajasthan": { lat: 27.0238, lon: 74.2179 },
    "Sikkim": { lat: 27.5330, lon: 88.5122 },
    "Tamil Nadu": { lat: 11.1271, lon: 78.6569 },
    "Telangana": { lat: 18.1124, lon: 79.0193 },
    "Tripura": { lat: 23.7466, lon: 91.7483 },
    "Uttar Pradesh": { lat: 26.8467, lon: 80.9462 },
    "Uttarakhand": { lat: 30.0668, lon: 79.0193 },
    "West Bengal": { lat: 22.9868, lon: 87.8549 },
    "Jammu & Kashmir": { lat: 34.1526, lon: 77.5806 },
    "Chandigarh": { lat: 30.7333, lon: 76.7794 }
};


// --- UTILITY FUNCTIONS ---

function avg(arr) {
    const filteredArr = arr.filter(d => d !== -999);
    if (filteredArr.length === 0) return "N/A";
    return (filteredArr.reduce((a, b) => a + b, 0) / filteredArr.length).toFixed(2);
}

function calculateStateRisk(stateName) {
    const stateWaterbodies = waterbodies.filter(wb => wb.state === stateName);

    // Base Risk (from pre-fixed waterbody data)
    let baseRiskLevel = "Low";
    let baseMessage = "No high-risk waterbodies recorded. Low overall average risk.";

    if (stateWaterbodies.length > 0) {
        const highRiskCount = stateWaterbodies.filter(wb => wb.risk.toLowerCase() === 'high').length;
        const mediumRiskCount = stateWaterbodies.filter(wb => wb.risk.toLowerCase() === 'medium').length;

        if (highRiskCount >= 2 || (highRiskCount === 1 && mediumRiskCount >= 2)) {
            baseRiskLevel = "High";
            baseMessage = `CRITICAL: ${highRiskCount} waterbodies are currently flagged as High Risk in this state.`;
        } else if (mediumRiskCount >= 2 || highRiskCount === 1) {
            baseRiskLevel = "Medium";
            baseMessage = `Medium Risk: Several waterbodies (${mediumRiskCount} medium, ${highRiskCount} high) show conditions favorable for amoeba growth.`;
        } else {
             baseMessage = `Low Risk: Waterbodies primarily show low-risk conditions.`;
        }
    }

    return {
        riskLevel: baseRiskLevel,
        color: riskColors[baseRiskLevel.toLowerCase()],
        message: baseMessage,
        waterbodies: stateWaterbodies
    };
}

// --- DISPLAY FUNCTION ---

async function displayStateData(stateName, isLiveMap = false) {
    const coords = stateCoordinates[stateName];
    const riskData = calculateStateRisk(stateName);
    const div = document.getElementById("stateData");

    if (!coords) {
        div.innerHTML = `<h3 style="color: ${riskColors.low}">No Coords Data Available</h3><p>We do not have coordinate data for ${stateName} to fetch NASA metrics.</p>`;
        return;
    }

    div.innerHTML = `
        <h3 style="color: ${riskData.color};">
            ${stateName} | Base Risk: ${riskData.riskLevel}
        </h3>
        <p style="color: ${riskData.color}; font-weight: 600;">Base Risk Summary: ${riskData.message}</p>
        <p id="nasaDataStatus" style="margin-top: 1rem;">Fetching environmental data...</p>
    `;

    // Fetch NASA Data (with exponential backoff for robustness)
    const end = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Current date
    const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10).replace(/-/g, ""); // 7 days ago
    const url = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,RH2M,ALLSKY_SFC_SW_DWN&community=RE&longitude=${coords.lon}&latitude=${coords.lat}&start=${start}&end=${end}&format=JSON`;

    const maxRetries = 3;
    let attempt = 0;
    const dataStatusDiv = document.getElementById('nasaDataStatus');

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return await res.json();
        } catch (error) {
            if (attempt < maxRetries) {
                attempt++;
                const delay = Math.pow(2, attempt) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchData();
            }
            throw error;
        }
    };

    try {
        const data = await fetchData();

        const temps = Object.values(data.properties.parameter.T2M);
        const humidity = Object.values(data.properties.parameter.RH2M);
        const radiation = Object.values(data.properties.parameter.ALLSKY_SFC_SW_DWN);
        const avgTemp = parseFloat(avg(temps));

        // --- REAL-TIME RISK ADJUSTMENT LOGIC ---
        let alertMessage = "";
        let finalRiskColor = riskColors.low;
        let finalRiskLevel = "Low Risk";

        // Naegleria fowleri thrives above 30°C
        const TEMP_THRESHOLD = 30.0;
        let tempRisk = "low";
        if (avgTemp > TEMP_THRESHOLD) {
            tempRisk = "high";
        } else if (avgTemp > 25) {
            tempRisk = "medium";
        }

        const riskOrder = { low: 1, medium: 2, high: 3 };
        const combinedRiskOrder = Math.max(riskOrder[riskData.riskLevel.toLowerCase()], riskOrder[tempRisk]);

        for (const level in riskOrder) {
            if (riskOrder[level] === combinedRiskOrder) {
                finalRiskLevel = level.charAt(0).toUpperCase() + level.slice(1) + " Risk";
                finalRiskColor = riskColors[level];
            }
        }

        // Generate alert message based on the combined risk
        if (combinedRiskOrder === 3) {
            alertMessage = `🚨 **HIGH RISK:** The combination of existing high-risk waterbodies and a high average air temperature (${avgTemp}°C) creates a critical environment for amoeba growth. **EXTREME CAUTION IS ADVISED.**`;
        } else if (combinedRiskOrder === 2) {
            alertMessage = `⚠️ **MEDIUM RISK:** Conditions are moderately favorable. Be cautious when engaging in water activities in this region.`;
        } else {
            alertMessage = `✅ **LOW RISK:** Current environmental and waterbody data indicate a low risk level.`;
        }


        if (isLiveMap) {
            // Live Map Specific Display
            div.className = `result-box ${finalRiskColor.replace("#", "result-")}`;
            div.innerHTML = `
                <h3 style="color: ${finalRiskColor}; margin-bottom: 0;">Current Risk Assessment</h3>
                <h1 style="color: ${finalRiskColor}; font-size: 3rem; margin: 0.5rem 0;">${finalRiskLevel}</h1>
                <p style="color: ${finalRiskColor}; font-weight: 600;">${alertMessage}</p>
                <p style="font-size: 0.9rem; margin-top: 1rem; color: #7f8c8d;">
                    *Risk is based on average daily air temperature and known waterbody conditions.
                </p>
            `;
        } else {
            // Data Maps Specific Display
            let wbList = riskData.waterbodies.map(wb =>
                `<li style="color: ${riskColors[wb.risk.toLowerCase()]};"><strong>${wb.name}</strong> (Risk: ${wb.risk})</li>`
            ).join('');

            const nasaHtml = `
                <div style="background-color: #f7f7f7; border-radius: 8px; padding: 1rem; border: 1px solid ${finalRiskColor}; margin-bottom: 1rem;">
                    <p style="color: ${finalRiskColor}; font-weight: 600; text-align: center;">${alertMessage}</p>
                </div>
                <p><strong>Avg Air Temp (Past 7 Days):</strong> ${avgTemp}°C</p>
                <p><strong>Avg Humidity (Past 7 Days):</strong> ${avg(humidity)}%</p>
                <p><strong>Avg Solar Rad. (Past 7 Days):</strong> ${avg(radiation)} W/m²</p>
            `;

            div.innerHTML = `
                <h3 style="color: ${riskData.color};">${stateName} | Base Waterbody Risk: ${riskData.riskLevel}</h3>
                <p style="color: ${riskData.color}; font-weight: 600;">${riskData.message}</p>
                <h4>Waterbodies in Database (${riskData.waterbodies.length} Entries):</h4>
                <ul style="list-style-type: none; padding-left: 0; text-align: left; max-width: 300px; margin: 0 auto 1.5rem;">
                    ${wbList || '<li>No waterbodies found for this state in the database.</li>'}
                </ul>
                <hr>
                <h4>NASA Environmental Data & Final Risk Alert:</h4>
                ${nasaHtml}
                <p style="font-size: 0.9rem; margin-top: 1rem; color: #7f8c8d;">
                    *Environmental data reflects average daily values for the past 7 days.
                </p>
            `;
        }

    } catch (error) {
        // Handle API failure message
        dataStatusDiv.innerHTML = `<p class="error-message" style="color: ${riskColors.high};">Error fetching NASA data. (${error.message})</p>`;
        console.error("NASA API Error:", error);
    }
}


// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    const stateSelector = document.getElementById('stateSelector');
    if (!stateSelector) { return; }

    const states = Object.keys(stateCoordinates).sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelector.appendChild(option);
    });

    stateSelector.addEventListener('change', (event) => {
        const selectedState = event.target.value;
        const isLiveMap = document.body.classList.contains('theme-livemap');
        displayStateData(selectedState, isLiveMap);
    });
});