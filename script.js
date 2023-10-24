function rec_squ_pool_vol() {
  function resetInputFields() {
    document.getElementById("Length").value = ""; // Reset to empty string
    document.getElementById("Width").value = "";
    document.getElementById("AveDepth").value = "";
  }
  var len = parseFloat(document.getElementById("Length").value);
  var wid = parseFloat(document.getElementById("Width").value);
  var avedep = parseFloat(document.getElementById("AveDepth").value);

  var amountgal = 7.5; // Conversion factor
  var poolvol = len * wid * avedep * amountgal;

  document.getElementById("RAns").innerText =
    "Pool Volume: " + poolvol + " gallons";
  resetInputFields();
}

function circle_pool_vol() {
  function resetInputFields() {
    document.getElementById("Radius").value = ""; // Reset to empty string
    document.getElementById("CircleAveDepth").value = "";
  }
  var radius = parseFloat(document.getElementById("Radius").value);
  var circleAveDepth = parseFloat(
    document.getElementById("CircleAveDepth").value
  );

  if (isNaN(radius) || isNaN(circleAveDepth)) {
    document.getElementById("CPVAns").innerText =
      "Please enter valid numbers for both Radius and Average Depth.";
    return;
  }

  var pi = Math.PI; // Use Math.PI for a more accurate value of pi
  var amountgal = 7.5; // Conversion factor

  // Calculate the volume of the circular pool
  var poolvol = pi * radius * radius * circleAveDepth * amountgal;

  document.getElementById("CPVAns").innerText =
    "Pool Volume: " + poolvol.toFixed(2) + " gallons";
  resetInputFields();
}

function calculateArea() {
  var length = parseFloat(document.getElementById("AreaLength").value);
  var width = parseFloat(document.getElementById("AreaWidth").value);

  var area = length * width;

  document.getElementById("ARAns").innerText = "Surface Area: " + area;

  resetInputFields();
}

function resetInputFields() {
  document.getElementById("AreaLength").value = "";
  document.getElementById("AreaWidth").value = "";
}

function circle_area_pool_vol() {
  function resetInputFields() {
    document.getElementById("AreaRadius1").value = ""; // Reset to empty string
  }
  var radius1 = parseFloat(document.getElementById("AreaRadius1").value);

  var pi = Math.PI; // Use Math.PI for a more accurate value of pi

  // Calculate the area of the elliptical surface
  var area = pi * radius1 * radius1;

  document.getElementById("ACAns").innerText = "Surface Area: " + area;
  resetInputFields();
}
function convertYardsToFeet() {
  function resetInputFields() {
    document.getElementById("yards").value = ""; // Reset to empty string
  }
  var yardsInput = document.getElementById("yards").value;

  if (yardsInput === "") {
    alert("Please enter a value for yards.");
    return;
  }

  var yardsInput = parseFloat(document.getElementById("yards").value);
  var feet = yardsInput * 3; // 1 yard equals 3 feet

  var yardAnsElement = document.getElementById("yardAns");
  yardAnsElement.innerText =
    yardsInput + " yards is equal to " + feet + " feet.";

  resetInputFields();
}
function convertMetersToFeet() {
  function resetInputFields() {
    document.getElementById("meters").value = ""; // Reset to empty string
  }
  var metersInput = parseFloat(document.getElementById("meters").value);
  var feet = metersInput * 3.28; // 1 yard equals 3 feet

  var metersAnsElement = document.getElementById("meterAns");
  metersAnsElement.innerText =
    metersInput + " Meters is equal to " + feet + " feet.";
  resetInputFields();
}
function calculateTurnoverRate() {
  function resetInputFields() {
    document.getElementById("poolvolume").value = ""; // Reset to empty string
    document.getElementById("flowrate").value = "";
  }
  var poolVolume = parseFloat(document.getElementById("poolvolume").value);
  var flowRate = parseFloat(document.getElementById("flowrate").value);

  if (poolVolume && flowRate) {
    var turnoverRate = poolVolume / flowRate / 60; // Divide by 60 to convert flow rate per minute

    var ToRAnsElement = document.getElementById("ToRAns");
    ToRAnsElement.innerText = "Turnover Rate: " + turnoverRate + " Hours";
  } else {
    var ToRAnsElement = document.getElementById("ToRAns");
    ToRAnsElement.innerText =
      "Please enter valid values for pool volume and flow rate.";
  }
  resetInputFields();
}
function calculateFlowRate() {
  function resetInputFields() {
    document.getElementById("Poolvolume").value = ""; // Reset to empty string
    document.getElementById("turnoverrate").value = "";
  }
  var poolVolume = parseFloat(document.getElementById("Poolvolume").value);
  var turnoverRate = parseFloat(document.getElementById("turnoverrate").value);

  if (poolVolume && turnoverRate) {
    var flowRate = poolVolume / turnoverRate / 60; // divid by 60 to convert to per mins

    var FRAnsElement = document.getElementById("FRAns");
    FRAnsElement.innerText = "Flow Rate: " + flowRate + " gallons per mins";
  } else {
    var FRAnsElement = document.getElementById("FRAns");
    FRAnsElement.innerText =
      "Please enter valid values for pool volume and turnover rate.";
  }
  resetInputFields();
}
function calculateGallonsLost() {
  function resetInputFields() {
    document.getElementById("gallonLength").value = ""; // Reset to empty string
    document.getElementById("gallonWidth").value = "";
  }
  var length = parseFloat(document.getElementById("gallonLength").value);
  var width = parseFloat(document.getElementById("gallonWidth").value);

  if (length && width) {
    var conversionFactor = 0.0833;
    var gallonsLost = length * width * conversionFactor * 7.5;

    var galAnsElement = document.getElementById("galAns");
    galAnsElement.innerText = "Gallons Lost (In): " + gallonsLost;
  } else {
    var galAnsElement = document.getElementById("galAns");
    galAnsElement.innerText = "Please enter valid values for length and width.";
  }
  resetInputFields();
}
document.addEventListener("DOMContentLoaded", function () {
  // Define getInputValue outside
  function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
  }

  // Define the getFactor function
  function getFactor(value, factors) {
    for (let i = 0; i < factors.length; i++) {
      if (value <= factors[i].ppm || value <= factors[i].temp) {
        return factors[i].factor;
      }
    }
    return factors[factors.length - 1].factor;
  }
  function resetInputFields() {
    document.getElementById("PoolpH").value = ""; // Reset to empty string
    document.getElementById("TotalAlkalinity").value = "";
    document.getElementById("CalciumHardness").value = "";
    document.getElementById("Temperature").value = "";
    document.getElementById("TDS").value = "";
  }
  // Define and get the TDS value
  const TDS = getInputValue("TDS");
  let TDSFactors;
  if (TDS <= 1000) {
    TDSFactors = 12.1;
  } else {
    TDSFactors = 12.2;
  }

  // Lookup tables
  const pH = getInputValue("PoolpH");
  const pHFactors = pH;
  // Define and get the alkalinity value

  const alkalinityFactors = [
    { ppm: 5, factor: 0.7 },
    { ppm: 25, factor: 1.4 },
    { ppm: 50, factor: 1.7 },
    { ppm: 75, factor: 1.9 },
    { ppm: 100, factor: 2.0 },
    { ppm: 125, factor: 2.1 },
    { ppm: 150, factor: 2.2 },
    { ppm: 200, factor: 2.3 },
    { ppm: 250, factor: 2.4 },
    { ppm: 300, factor: 2.5 },
    { ppm: 400, factor: 2.6 },
    { ppm: 800, factor: 2.9 },
    { ppm: 1000, factor: 3.0 },
  ];

  const hardnessFactors = [
    { ppm: 5, factor: 0.3 },
    { ppm: 25, factor: 1.0 },
    { ppm: 50, factor: 1.3 },
    { ppm: 75, factor: 1.5 },
    { ppm: 100, factor: 1.6 },
    { ppm: 125, factor: 1.7 },
    { ppm: 150, factor: 1.8 },
    { ppm: 200, factor: 1.9 },
    { ppm: 250, factor: 2.0 },
    { ppm: 300, factor: 2.1 },
    { ppm: 400, factor: 2.2 },
    { ppm: 800, factor: 2.5 },
    { ppm: 1000, factor: 2.6 },
  ];

  const temperatureFactors = [
    { temp: 32, factor: 0.1 },
    { temp: 37, factor: 0.1 },
    { temp: 46, factor: 0.2 },
    { temp: 53, factor: 0.3 },
    { temp: 60, factor: 0.4 },
    { temp: 66, factor: 0.5 },
    { temp: 76, factor: 0.6 },
    { temp: 84, factor: 0.7 },
    { temp: 94, factor: 0.8 },
    { temp: 105, factor: 0.9 },
    { temp: 128, factor: 1 },
  ];
  // Calculate SI
  function calculateSI() {
    // Get input values
    const pH = getInputValue("PoolpH");
    const alkalinity = getInputValue("TotalAlkalinity");
    const hardness = getInputValue("CalciumHardness");
    const temperature = getInputValue("Temperature");

    // Get factors
    let pHFactor = pH;
    let alkalinityFactor = getFactor(alkalinity, alkalinityFactors);
    let hardnessFactor = getFactor(hardness, hardnessFactors);
    let temperatureFactor = getFactor(temperature, temperatureFactors);

    // Calculate SI
    let SI =
      pHFactor +
      alkalinityFactor +
      hardnessFactor +
      temperatureFactor -
      TDSFactors;

    displaySI(SI);

    // Reset input fields after displaying SI
    resetInputFields();
  }

  // Helper function to display the SI
  function displaySI(SI) {
    document.getElementById("SIAns").innerText = SI.toString();
  }

  // Attach click handler to the button
  document
    .getElementById("calculateButton")
    .addEventListener("click", calculateSI);
});

