var rows = document.getElementsByName("formRow");
var pos = rows.length-1;

function init() {
  rows = document.getElementsByName("formRow");
  pos = rows.length-1;

}

function calculateMean() {
  var paragraph = document.getElementById("results");
  var denominators = document.getElementsByName("den");
  var percentages = document.getElementsByName("percent")
  var numerators = document.getElementsByName("num");
  var len = denominators.length;
  for(i = 0; i < len; i++)
  {
    if(denominators[i].value == 0  )
    {
      alert("GRADE CANNOT BE OUT OF 0 !");
      return;
    }
    if(Number(numerators[i].value) != numerators[i].value || Number(denominators[i].value) != denominators[i].value)
    {
      alert("ONLY FLOATING POINT VALUES ALLOWED!");
      return;
    }
  }
  var percentages_values = [];
  var totalGrade = 0;
  for(i = 0; i < len; i++)
  {
    percentages_values[i] = numerators[i].value/denominators[i].value;
    totalGrade += percentages_values[i];
    percentages[i].innerHTML = ((Math.round(percentages_values[i]*100*100)) / 100).toFixed(2) + "%";
  }

  var mean = totalGrade/len;
  var percentMean = (Math.round(mean*10000)/100).toFixed(2);
  paragraph.innerHTML = "The Mean of your grades is : " + percentMean + "/100" + "<br> or " + percentMean + "%";


}

function calculateWeighted() {
  var weights = document.getElementsByName("weight");
  var paragraph = document.getElementById("results");
  var denominators = document.getElementsByName("den");
  var percentages = document.getElementsByName("percent")
  var numerators = document.getElementsByName("num");
  var len = denominators.length;
  for(i = 0; i < len; i++)
  {
    if(denominators[i].value == 0  )
    {
      alert("GRADE CANNOT BE OUT OF 0 !");
      return;
    }
    if(Number(numerators[i].value) != numerators[i].value || Number(denominators[i].value) != denominators[i].value || Number(weights[i].value) != weights[i].value)
    {
      alert("ONLY FLOATING POINT VALUES ALLOWED!");
      return;
    }
  }
  var percentages_values = [];
  var totalGrade = 0;
  var totalWeight = 0;
  for(i = 0; i < len; i++)
  {
    percentages_values[i] = numerators[i].value/denominators[i].value;
    totalGrade += percentages_values[i]*weights[i].value;
    totalWeight += Number(weights[i].value);
    if(weights[i] <= 0)
    {
      alert("WEIGHTS MUST BE > 0 !");
      return;
    }
    percentages[i].innerHTML = ((Math.round(percentages_values[i]*100*100)) / 100).toFixed(2) + "%";
  }

  var weighted = totalGrade/totalWeight;
  var percentWeighted = (Math.round(weighted*10000)/100).toFixed(2);
  paragraph.innerHTML = "The Weighted result of your grades is : " + percentWeighted + "/100" + "<br> or " + percentWeighted + "%";

}

function addRow() {
    // Find a <table> element with id="myTable":
   table = document.getElementById("table1");


   row = table.insertRow(pos+2);
   pos++;

   var name = row.insertCell(0);
  var shortName = row.insertCell(1);
   var weight = row.insertCell(2);
   var grade = row.insertCell(3);
   var percent = row.insertCell(4);
   percent.innerHTML = " <p name = \"percent\"></p>"
  name.innerHTML = "Activity " + (pos+1);
  shortName.innerHTML = "A" + (pos + 1);
  row.setAttribute("name", "formRow");
  weight.innerHTML = "    <input type=\"text\" name=\"weight\" value=\"0\">"
  grade.innerHTML = "    <input type=\"text\" name=\"num\" value=\"0\">/ <br>  <input type=\"text\" name=\"den\" value=\"0\">"
  rows = document.getElementsByName("formRow");

}

function rmRow() {
  if(pos < 0)
  {
    return;
  }
  rows[pos].innerHTML = "";
  pos--;
}

window.onload = init;

/*
<tr name = "formRow">
  <td>
    Activity 1
  </td>
  <td>
    A1
  </td>
  <td>
    <input type="text" name="weight" value="0">
  </td>
  <td>
    <input type="text" name="num" value="0">/ <br>
    <input type="text" name="den" value="0">
  </td>
  <td>
    <br>
  </td>
</tr>
*/
