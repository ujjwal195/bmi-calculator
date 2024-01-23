// Initialize the gauge
var gauge = new Gauge(document.getElementById('gauge')).setOptions({
    angle: 0,
    lineWidth: 0.2,
    radiusScale: 0.8,
    pointer: {
        length: 0.6,
        strokeWidth: 0.035,
        color: '#000000'
    },
    staticLabels: {
        font: "10px sans-serif",
        labels: [0, 18.5, 25, 30, 40],
        color: "#000000",
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#30B32D", min: 0, max: 18.5}, // Low BMI (Underweight)
        {strokeStyle: "#FFDD00", min: 18.5, max: 25}, // Normal BMI
        {strokeStyle: "#FF7D00", min: 25, max: 30},   // Overweight
        {strokeStyle: "#FF3232", min: 30, max: 40}    // Obesity
    ],
    limitMax: false,
    limitMin: false
});

// Set initial value for the gauge
gauge.set(0);

function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    // Update the gauge value
    gauge.set(bmi);
}
