// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI

  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  // Calculate


  const VF = parseFloat(UIamount);
  const interes = parseFloat(UIinterest/100); 
  const VP = VF*(Math.pow((1+interes),-UIyears));
  const pagaderos = VP.toFixed(2);
  

  //Show results

  document.getElementById("pagaderos").innerHTML = "$" + pagaderos;


  e.preventDefault();
}