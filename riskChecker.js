document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const temp = parseFloat(document.getElementById("temperature").value);
    const waterType = document.getElementById("waterType").value;
    const movement = document.getElementById("movement").value;
    const rain = document.getElementById("rain").value;
    let score = 0;

    if (temp >= 35) score += 3;
    else if (temp >= 28) score += 2;

    if (movement === "still") score += 2;
    else if (movement === "flowing") score += 1;

    if (waterType === "pond" || waterType === "lake" || waterType === "hot_spring") score += 1;
    if (rain === "no") score += 1;

    let riskLevel, riskClass, riskMessage;
    if (score >= 5) {
        riskLevel = "High Risk";
        riskClass = "result-high";
        riskMessage = `Conditions are highly favorable for Naegleria fowleri growth. <strong>Swimming is not recommended.</strong>`;
    } else if (score >= 3) {
        riskLevel = "Medium Risk";
        riskClass = "result-medium";
        riskMessage = `Conditions may support the presence of Naegleria fowleri. <strong>Exercise extreme caution.</strong>`;
    } else {
        riskLevel = "Low Risk";
        riskClass = "result-low";
        riskMessage = `The current conditions are less favorable for the amoeba, but always be mindful.`;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.className = `result-box ${riskClass}`;
    resultDiv.innerHTML = `<h3>🧪 Prediction Result</h3>
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
        <p><strong>Calculated Risk Score:</strong> ${score}</p>
        <hr style="margin: 1rem 0;">
        <p><span class="risk-title">${riskLevel}:</span> ${riskMessage}</p>`;
});
