document.addEventListener('DOMContentLoaded', () => {
    function getPowerData() {
        // Assuming you have an API or sensor providing the data
        // This is a mock of what it might look like.

        const data = {
            powerRate: 15, // kW
            motorRPM: 1500, // RPM
            inclinationAngle: 25, // degrees
            avgInclinationRate: 1.5, // degrees per second
            extraPower: 5 // kW, for example
        };

        // Set values into the HTML
        document.getElementById('powerRate').innerText = data.powerRate + ' kW';
        document.getElementById('motorRPM').innerText = data.motorRPM + ' RPM';
        document.getElementById('inclinationAngle').innerText = data.inclinationAngle + ' °';
        document.getElementById('avgInclinationRate').innerText = data.avgInclinationRate + ' °/s';
        document.getElementById('extraPower').innerText = data.extraPower + ' kW';
    }

    getPowerData();
});
