
//Utilities

//Validate whether a number is even or not
function isEven(number){

    return number % 2 == 0;  
}

//Calculates the Average from a list of numbers.
function average(list){

    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement
        }            
    );
    const average = sumList/list.length;
    return average;
}

//Sort the salaries
function sortArray(colSalariesArray){
    const sortedColSalaries = colSalariesArray.sort((salaryA, salaryB) => {
        return salaryA - salaryB;
    
    });
    return sortedColSalaries;
}

//Create an array with the salaries from the colombian objects.
//The arrow function implemented here is the same like: function(salaryObject) {}
function objectToArray(colombiaSalaries){
    const colSalariesArray = colombiaSalaries.map((salaryObject) => {      
        return salaryObject.salary;
    });
    return colSalariesArray;
}

// Salary functions

//Calculate the median from an object array.
function medianSalary(colSalariesArray){

    let median = 0;
    const sortedColSalaries = sortArray(colSalariesArray);
    const sizeColSalaries = sortedColSalaries.length;
    const half = parseInt(sizeColSalaries / 2);

    if(isEven(sizeColSalaries)){
        
        const medianArray = [sortedColSalaries[half - 1], sortedColSalaries[half]];
        median = average(medianArray);
    }
    else {
        
        median = sortedColSalaries[half];
    }

    return median;
}

//Calculate the median from the top 10% of an object array.
function medianTop(colSalariesArray){

    let median = 0;       
    const sortedColSalaries = sortArray(colSalariesArray);
    const sizeColSalaries = sortedColSalaries.length;
    const startElement = parseInt((sizeColSalaries*90)/100);
    const countElement = sizeColSalaries - startElement;
    const salaryTopArray = sortedColSalaries.splice(startElement, countElement);    
    median = medianSalary(salaryTopArray);

    return median;
}


//Interacting with html and javascript

function calculateMedian() {
    const salaries = [];

	//Salary 1
	const inputName1 = document.getElementById("inputName1");
	const value1 = inputName1.value;

	const inputSalary1 = document.getElementById("inputSalary1");
	const value2 = inputSalary1.value;

	const inputCurrency1 = document.getElementById("inputCurrency1");
	const value3 = inputCurrency1.value;

	//Salary 2
	const inputName2 = document.getElementById("inputName2");
	const value4 = inputName2.value;

	const inputSalary2 = document.getElementById("inputSalary2");
	const value5 = inputSalary2.value;

	const inputCurrency2 = document.getElementById("inputCurrency2");
	const value6 = inputCurrency2.value;

	//Salary 3
	const inputName3 = document.getElementById("inputName3");
	const value7 = inputName3.value;

	const inputSalary3 = document.getElementById("inputSalary3");
	const value8 = inputSalary3.value;

	const inputCurrency3 = document.getElementById("inputCurrency3");
	const value9 = inputCurrency3.value;

	//Salary 4
	const inputName4 = document.getElementById("inputName4");
	const value10 = inputName4.value;

	const inputSalary4 = document.getElementById("inputSalary4");
	const value11 = inputSalary4.value;

	const inputCurrency4 = document.getElementById("inputCurrency4");
	const value12 = inputCurrency4.value;

	//Salary 5
	const inputName5 = document.getElementById("inputName5");
	const value13 = inputName5.value;

	const inputSalary5 = document.getElementById("inputSalary5");
	const value14 = inputSalary5.value;

	const inputCurrency5 = document.getElementById("inputCurrency5");
	const value15 = inputCurrency5.value;

	salaries.push({
		name : value1,
		salary : Number(value2),
		currency : value3
	});	
	salaries.push({
		name : value4,
		salary : Number(value5),
		currency : value6
	});
	salaries.push({
		name : value7,
		salary : Number(value8),
		currency : value9
	});
	salaries.push({
		name : value10,
		salary : Number(value11),
		currency : value12
	});
	salaries.push({
		name : value13,
		salary : Number(value14),
		currency : value15
	});

	const colSalariesArray = objectToArray(salaries);
	const medianResult = medianSalary(colSalariesArray);

	const text = document.getElementById("ponderedAveragedResult");
	text.innerText = "The median is: " + medianResult;
}

function calculateMedianTop(){
    const salaries = [];

	//Salary 1
	const inputName1 = document.getElementById("inputName1");
	const value1 = inputName1.value;

	const inputSalary1 = document.getElementById("inputSalary1");
	const value2 = inputSalary1.value;

	const inputCurrency1 = document.getElementById("inputCurrency1");
	const value3 = inputCurrency1.value;

	//Salary 2
	const inputName2 = document.getElementById("inputName2");
	const value4 = inputName2.value;

	const inputSalary2 = document.getElementById("inputSalary2");
	const value5 = inputSalary2.value;

	const inputCurrency2 = document.getElementById("inputCurrency2");
	const value6 = inputCurrency2.value;

	//Salary 3
	const inputName3 = document.getElementById("inputName3");
	const value7 = inputName3.value;

	const inputSalary3 = document.getElementById("inputSalary3");
	const value8 = inputSalary3.value;

	const inputCurrency3 = document.getElementById("inputCurrency3");
	const value9 = inputCurrency3.value;

	//Salary 4
	const inputName4 = document.getElementById("inputName4");
	const value10 = inputName4.value;

	const inputSalary4 = document.getElementById("inputSalary4");
	const value11 = inputSalary4.value;

	const inputCurrency4 = document.getElementById("inputCurrency4");
	const value12 = inputCurrency4.value;

	//Salary 5
	const inputName5 = document.getElementById("inputName5");
	const value13 = inputName5.value;

	const inputSalary5 = document.getElementById("inputSalary5");
	const value14 = inputSalary5.value;

	const inputCurrency5 = document.getElementById("inputCurrency5");
	const value15 = inputCurrency5.value;

	salaries.push({
		name : value1,
		salary : Number(value2),
		currency : value3
	});	
	salaries.push({
		name : value4,
		salary : Number(value5),
		currency : value6
	});
	salaries.push({
		name : value7,
		salary : Number(value8),
		currency : value9
	});
	salaries.push({
		name : value10,
		salary : Number(value11),
		currency : value12
	});
	salaries.push({
		name : value13,
		salary : Number(value14),
		currency : value15
	});

	const colSalariesArray = objectToArray(salaries);
	const medianTopResult = medianTop(colSalariesArray);

	const text = document.getElementById("ponderedAveragedTopResult");
	text.innerText = "The median from the top 10 is: " + medianTopResult;
}