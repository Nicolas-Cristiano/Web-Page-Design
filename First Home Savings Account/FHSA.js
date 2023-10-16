/* Calculates the sum total of the contributions and the earnings each makes over 5 years. Generates a graph comparing the contributions, the earnings they
   make and the total after each year*/
function contributionEarnings() {
    
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
  //Displays different text depending on the state of the Simple Interest function tab
  var simpleText = document.getElementById("myBtn");
  if(simpleText.value=="Calculate Results"){
      simpleText.value="Hide Results";}
  else if(simpleText.value=="Hide Results"){
      simpleText.value="Calculate Results";}
	  
  //Passes through the values input through the web page
  const r = Number(document.getElementById("rate-value").value)/100;
  const C1 = Number(document.getElementById("C1-value").value);
  const C2 = Number(document.getElementById("C2-value").value);
  const C3 = Number(document.getElementById("C3-value").value);
  const C4 = Number(document.getElementById("C4-value").value);
  const C5 = Number(document.getElementById("C5-value").value);
  const cTotal = C1 + C2 + C3 + C4 + C5;
  
  //Calculates the respective earnings each contribution makes within the 5 years
  const E1 = C1*(1 + r)**5 - C1;
  const E2 = C2*(1 + r)**4 - C2;
  const E3 = C3*(1 + r)**3 - C3;
  const E4 = C4*(1 + r)**2 - C4;
  const E5 = C5*(1 + r)**1 - C5;
  const eTotal = E1 + E2 + E3 + E4 + E5;
  
  //Calculates the respective totals for each contribution and the sum total of these amounts
  const T1 = C1*(1 + r)**5;
  const T2 = C2*(1 + r)**4;
  const T3 = C3*(1 + r)**3;
  const T4 = C4*(1 + r)**2;
  const T5 = C5*(1 + r);
  const Total = T1 + T2 + T3 + T4 + T5;

  /* The below outlines the final amounts for the contributions made in the respective years, then indicates the sum of these amounts*/
	
	/*let p1 = "<p>We can use Compound Interest to determine the total value of each contribution at the end of the 5 years:</p>"
	let p2 = "<p>We can start with the first contribution, $"+String(C1)+", which makes earnings within a 5-year period. This contribution would make a total of\
	$"+String(T1.toFixed(2))+" and $"+String(E1.toFixed(2))+" in earnings at the end of the 5 years.</p>"
	let p3 = "<p>Next, we can focus on the second contribution, $"+String(C2)+", which makes earnings within a 4-year period. This contribution would make a total of\
	$"+String(T2.toFixed(2))+" and $"+String(E2.toFixed(2))+"  at the end of the 4 years.</p>"
	let p4 = "<p>Then, our third contribution, $"+String(C3)+", will make earnings within a 3-year period. This contribution would make a total of \
	$"+String(T3.toFixed(2))+" and $"+String(E3.toFixed(2))+"  at the end of the 3 years.</p>"
	let p5 = "<p>Later, our fourth contribution, $"+String(C4)+", will make earnings within a 2-year period. This contribution would make a total of \
	$"+String(T4.toFixed(2))+" and $"+String(E4.toFixed(2))+"  at the end of the 2 years.</p>"
	let p6 = "<p>Lastly, our fifth contribution, $"+String(C5)+", will make earnings within a 1-year period. This contribution would make a total of\
	$"+String(T5.toFixed(2))+" and $"+String(E5.toFixed(2))+" at the end of the last year.</p>"
	let p7 = "When we add up the final contribution amounts, we find that we made a total of $"+String(Total.toFixed(2))+" and $"+String(eTotal.toFixed(2))+" \
	within the 5-year period.<hr>"

    document.getElementById("earningsAnswer").innerHTML = p1 + p2 + p3 + p4 + p5 + p6 + p7;*/
	
	let p1 = "<p>Here is a chart representing the contributions entered, the earnings they made, and the total values they made within the 5-year period:</p>"
	
	document.getElementById("earningsAnswer").innerHTML = p1;
	
	const data = [{Year:'1', Cont: C1, Earn: E1.toFixed(2), Total: T1.toFixed(2)}, {Year:'2', Cont: C2, Earn: E2.toFixed(2), Total: T2.toFixed(2)}, {Year:'3', Cont: C3, Earn: E3.toFixed(2), Total: T3.toFixed(2)}, {Year:'4', Cont: C4, Earn: E4.toFixed(2), Total: T4.toFixed(2)}, {Year:'5', Cont: C5, Earn: E5.toFixed(2), Total: T5.toFixed(2)},
	{Year:'Total', Cont: cTotal, Earn: eTotal.toFixed(2), Total: Total.toFixed(2)}];

	const tableData = data.map(value => {
	  return (
		`<tr>
		   <td>${value.Year}</td>
		   <td>${value.Cont}</td>
		   <td>${value.Earn}</td>
		   <td>${value.Total}</td>
		</tr>`
	  );
	}).join('');

	const tableBody = document.querySelector("#tableBody");
	tableBody.innerHTML = tableData;
	
	const C12 = C1 + C2;
	const C123 = C12 + C3;
	const C1234 = C123 + C4;
	const C12345 = C1234 + C5;
	
	const xValues = [0, 1, 2, 3, 4, 5];
	const yValues = [0, C1, C12, C123, C1234, C12345];
	const yValues2 = [];
	const yValues3 = [];
	
	var amount1 = 0; 
	var amount2 = 0; 
	var amount3 = 0; 
	var amount4 = 0; 
	var amount5 = 0; 
	var earningsAmount = 0;
	var finalAmount = 0;
	
	for (y = 0; y <= 5; y++){
		
		if(y >= 1){
			i = y;
			amount1 = C1*(1 + r)**i - C1;
			
			if(y >= 2){
				i -= 1;
				amount2 = C2*(1 + r)**i - C2;
				amount1 += amount2;
				
				if(y >= 3){
					i -= 1;
					amount3 = C3*(1 + r)**i - C3;
					amount1 += amount3;
					
					if(y >= 4){
						i -= 1;
						amount4 = C4*(1 + r)**i - C4;
						amount1 += amount4;
						
						if(y >= 5){
							i -= 1;
							amount5 = C5*(1 + r)**i - C5;
							amount1 += amount5;
						}
					}
				}
			}
		}
		yValues2.push(amount1); 
	}
	
	for (y = 0; y <= 5; y++){
		
		if(y >= 1){
			i = y;
			amount1 = C1*(1 + r)**i - C1;
			finalAmount = amount1 + C1;
			
			if(y >= 2){
				i -= 1;
				amount2 = C2*(1 + r)**i - C2;
				amount1 += amount2;
				finalAmount = amount1 + C12;
				
				if(y >= 3){
					i -= 1;
					amount3 = C3*(1 + r)**i - C3;
					amount1 += amount3;
					finalAmount = amount1 + C123;
					
					if(y >= 4){
						i -= 1;
						amount4 = C4*(1 + r)**i - C4;
						amount1 += amount4;
						finalAmount = amount1 + C1234;
						
						if(y >= 5){
							i -= 1;
							amount5 = C5*(1 + r)**i - C5;
							amount1 += amount5;
							finalAmount = amount1 + C12345;
						}
					}
				}
			}
		}
		yValues3.push(finalAmount); 
	}
	
	let p2 = "<p>Here is a graph representing the relationship between the years passed and the accumulated contributions, earnings, and total values made throughout each:</p>"
	
	document.getElementById("earningsAnswer2").innerHTML = p2;

	new Chart("contributionChart", {
	  type: "line",
	  data: {
		labels: xValues,
		datasets: [
		{
	      //yAxisID: 'A',
		  fill: false,
		  label: "Contributions",
		  lineTension: 0,
		  borderColor: "red",
		  backgroundColor: "red",
		  data: yValues
		},
		{
		  //yAxisID: 'A',
		  fill: false, 
		  label: "Earnings", 
		  lineTension: 0,
		  borderColor: "blue",
		  backgroundColor: "blue",
		  data: yValues2
		},
		{
		  //yAxisID: 'B',
		  fill: false,
		  label: "Total Value",
		  lineTension: 0,
		  borderColor: "green",
		  backgroundColor: "green",
		  data: yValues3
		}]
	  },
	  options: {
		legend: {display: true},
		title: {
		  display: true,
		  text: "Total Earnings Made from Contributions",
		  fontSize: 16
		}
	  }
	});
	  
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  return;
};


// Autofills values into the input boxes of the equation.
function autofillCalc() {
  const rateValues = [1, 2, 2.5, 5, 10];
  const cont1Values = [1000, 2000, 3000, 4000, 8000];
  const cont2Values = [2000, 3000, 4000, 8000, 1000];
  const cont3Values = [3000, 4000, 8000, 1000, 2000];
  const cont4Values = [4000, 8000, 1000, 2000, 3000];
  const cont5Values = [8000, 1000, 2000, 3000, 4000];
  const valuesLength = rateValues.length;

  const value = Math.floor(Math.random()*valuesLength);

  document.getElementById("rate-value").value = String(rateValues[value]);
  document.getElementById("C1-value").value = String(cont1Values[value]);
  document.getElementById("C2-value").value = String(cont2Values[value]);
  document.getElementById("C3-value").value = String(cont3Values[value]);
  document.getElementById("C4-value").value = String(cont4Values[value]);
  document.getElementById("C5-value").value = String(cont5Values[value]);
};
