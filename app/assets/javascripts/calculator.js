
function calculateMean() {
  paragraph = document.getElementById("results");
  paragraph.innerHTML = "HELLO WORLD";
}

function calculateWeighted() {
  paragraph = document.getElementById("results");
  denominators = document.getElementsByName("den");
  numerators = document.getElementsByName("num");
  weights = document.getElementsByName("weight");

  for(i = 0; i < len; i++)
  {
    if(denominators[i] == 0)
    {
      document.alert("GRADE CANNOT BE OUT OF 0!");
    }
  }
  
  grade1 = num1/den1;
  paragraph.innerHTML = "HELLO WORLD";
}
