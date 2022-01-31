function addRow(tableID) {
    document.styleSheets[0];
    var table = document.getElementById(tableID);
    var numRows = document.getElementById(tableID).rows.length;
    var newRow = table.insertRow(numRows);
  
    for (i = 5; i <= numRows; i++) {
      newRow.id = i;
    }
  
    let newActivity = newRow.insertCell(0);
    let newName = newRow.insertCell(1);
    let newWeight = newRow.insertCell(2);
    let newGrade = newRow.insertCell(3);
    let newPercent = newRow.insertCell(4);
  
  
    let cell1 = document.createTextNode('Activity ' + numRows);
    newActivity.appendChild(cell1);
  
    let cell5 = document.createElement("p");
    newPercent.appendChild(cell5);
    for (i = 5; i <= numRows; i++) {
      cell5.id = 'percent' + i;
    }
  
    let cell2 = document.createTextNode('A' + numRows);
    newName.appendChild(cell2);
  
    let cell3 = document.createElement("input");
    cell3.classList.add("weight");
    cell3.type = "number";
    cell3.name = "weight";
    cell3.min = "0";
    newWeight.appendChild(cell3);
  
    for (i = 5; i <= numRows; i++) {
      cell3.id = 'weight' + i;
    }
  
  
    let cell4S = document.createElement("span");
    cell4S.setAttribute("class", "sr-only");
    cell4S.textContent = " / ";
    cell4S.classList.add("font-size");
  
  
    newGrade.innerHTML = '<input id=' + 'a' + numRows + 'g1' + ' class  = "grade"' + ' type="number" ' + 'min = 0' + ' onkeyup="percent()"></input> ' +
      '<span class="font-size">/ </span>' + ' <input  id=' + 'a' + numRows + 'g2' + ' class  = "grade2"' + ' type="number" ' + 'min = 0' + ' onkeyup="percent()"></input >';
  
  
  }
  
  
  
  function percent() {
    var numRows = document.getElementById('tableID').rows.length;
    var mean = 0;
    var finalResult = 0;
    for (var i = 1; i <= numRows; i++) {
      var grade1 = document.getElementById('a' + i + 'g1').value;
      var grade2 = document.getElementById('a' + i + 'g2').value;
  
  
      if (grade1 != "" && grade2 != "") {
        var percent = (grade1 / grade2) * 100;
  
        document.getElementById("percent" + i).innerHTML = percent.toFixed(2) + "%";
  
      }
      if (grade1 == "1" && grade2 == "0") {
        alert("Activity " + i + ": percent is infinity please change it")
      }
  
  
  
      if (grade1 == "0" && grade2 == "0") {
        alert("Activity " + i + ": percent is not a number please change it")
      }
  
  
  
    }
  }
  
  
  function AddMean() {
    var numRows = document.getElementById('tableID').rows.length;
    var mean = 0;
    var finalResult = 0;
    var counter = 0;
    for (var i = 1; i <= numRows; i++) {
      var grade1 = document.getElementById('a' + i + 'g1').value;
      var grade2 = document.getElementById('a' + i + 'g2').value;
  
      if (grade1 != "" && grade2 != "") {
        counter += 1;
        var percent = (grade1 / grade2) * 100;
        mean = mean + percent;
        finalResult = (mean / (counter));
  
        document.getElementById("results").innerHTML = finalResult.toFixed(2) + "%";
      }
      if ((grade1 != "" && grade2 == "") || (grade1 == "" && grade2 != "")) {
        alert("Activity " + i + ": there is a missing grade please check");
      }
      if (grade1 == "" && grade2 == "") {
        alert("Activity " + i + ": is missing change if needed");
      }
  
  
    }
  }
  
  function AddWeighted() {
    var numRows = document.getElementById('tableID').rows.length;
    var weight = 0;
    var totalWeight = 0;
    var finalResult = 0;
  
    for (var i = 1; i <= numRows; i++) {
      var grade1 = document.getElementById('a' + i + 'g1').value;
      var grade2 = document.getElementById('a' + i + 'g2').value;
      var weight1 = document.getElementById('weight' + i).value;
      totalWeight = parseInt(totalWeight) + (parseInt(weight1));
  
  
  
      if (grade1 != "" && grade2 != "" && weight1 != "") {
        var percent = ((grade1 / grade2) * weight1) * 100;
        weight = weight + percent;
  
        finalResult = (weight / totalWeight);
  
        document.getElementById("results").innerHTML = finalResult.toFixed(2) + "%";
      }
      if (grade1 != "" && grade2 != "" && weight1 == "") {
        alert("Activity " + i + ": there is no weight, weight can't be calculated");
      }
  
  
  
      if ((grade1 != "" && grade2 == "") || (grade1 == "" && grade2 != "")) {
        alert("Activity " + i + ": there is a missing grade please check");
      }
      if (grade1 == "" && grade2 == "" && weight1 == "") {
        alert("Activity " + i + ": is missing change if needed");
      }
  
  
    }
  }
