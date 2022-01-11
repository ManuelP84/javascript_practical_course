 
//Utilities

//Sort an array.
//function sortArray(list1){  

	// for(let i = 0; i<list1.length; i++){                     //This function is replaced with .sort()
	//     for(let j = i + 1; j < list1.length; j++){
	//         if(list1[j] < list1[i]){
	//             let temp = list1[i];
	//             list1[i] = list1[j];
	//             list1[j] = temp;
	//         }
	//     }
	// }
	// return list1;
//}

//Evaluates whether a number is even or odd.
function isEven(number){

	if(number % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}

//Copares two numbers. 
function compareArray(elem1, elem2){

	return elem1 - elem2;
}

//Convert a string of numbers into an array of numbers. Example "1,2,3,4" => [1,2,3,4]
function stringToArrayNumbers(StringOfNumbers){
	const arrayStringNumbers = StringOfNumbers.split(',');
	const arrayNumbers = arrayStringNumbers.map((element) => (Number(element)));
	return arrayNumbers;
}


//Statistics functions

//Calculates the Average from a list of numbers.
function arithmeticMean(list){

	// let sumList = 0;

	// for(let index = 0; index <list.length; index++){
	//     sumList = sumList + list[index];
	// }
	const sumList = list.reduce(
		function (accumulatedValue = 0, newElement){
			return accumulatedValue + newElement
		}            
	);
	const average = sumList/list.length;
	return average;
}

//Calculates the Median from a list of numbers.
function median(list){
	
	const newList = list.sort(compareArray);
	listSize = newList.length;
	const mediumItem = listSize/2;
	let median;

	if(listSize == 0){
		alert("Please enter a non-empty list!");
	}
	else if(isEven(listSize)){
		console.log("La lista es par");        
		median = arithmeticMean([newList[mediumItem], newList[mediumItem - 1]]);
	}
	else{
		console.log("La lista es impar");
		const medianIndex = Math.floor(mediumItem);      //Can be used Math.floor(mediumItem)
		median = newList[medianIndex];
	}
	return median;
}

//Calculates the Mode from a list of numbers.
function mode(list){

	const newList = list.sort(compareArray);
	const modeObject = {};
	let newArray = [];
	newList.map(function (element){
		if(modeObject[element]){
			modeObject[element] += 1;
		}
		else{
			modeObject[element] = 1;
		}
	});
	newArray = Object.entries(modeObject);      //Create a new 2 dimensional array from the object
	newArray.sort(function (elem1, elem2){      //Sort the new array
	   return elem1[1] - elem2[1];
	});
	return newArray[newArray.length - 1];
} 

notes = [
	{
		course : "javascript",
		note : 4.8,
		credits : 6
	},
	{
		course : "java",
		note : 4.8,
		credits : 4
	},
	{
		course : "python",
		note : 4.8,
		credits : 6
	},
	{
		course : "sql",
		note : 4.8,
		credits : 3
	}
]

//Calculates the pondered average from a notes object.
function ponderedAverage(notes){

	const notesWithCredits = notes.map(function (noteObject){
		return noteObject.credits * noteObject.note;
	});
	
	
	const sumNotesAndCredits = notesWithCredits.reduce(function (acumulated = 0, element){
		return acumulated + element;
	});
	const creditsList = notes.map(function (noteObject){
		return noteObject.credits;
	});
	
	const sumCredits = creditsList.reduce(function (acumulated = 0, element){
		return acumulated + element;
	});
	const ponderedAverageResult = sumNotesAndCredits / sumCredits;

	return ponderedAverageResult;   
}


//Interacting with html and javascript

function calculateArithmeticMean(){
	const input = document.getElementById("inputNumbers1");
	const stringNumbers = input.value;
	const arrayNumbers = stringToArrayNumbers(stringNumbers);
	const arithmeticMeanResult = arithmeticMean(arrayNumbers);
	const text = document.getElementById("averagedResult");
	text.innerText = "The arithmetic mean is: " + arithmeticMeanResult;
}

function calculateMedian(){
	const input = document.getElementById("inputNumbers2");
	const stringNumbers = input.value;
	const arrayNumbers = stringToArrayNumbers(stringNumbers);
	const medianResult = median(arrayNumbers);
	const text = document.getElementById("medianResult");
	text.innerText = "The median is: " + medianResult;
}

function calculateMode(){
	const input = document.getElementById("inputNumbers3");
	const stringNumbers = input.value;
	const arrayNumbers = stringToArrayNumbers(stringNumbers);
	const modeResult = mode(arrayNumbers);
	const text = document.getElementById("modenResult");
	text.innerText = "The mode is: " + modeResult;
}

function calculatePonderedAveraged(){

	const notes = [];

	//Course 1
	const inputCourse1 = document.getElementById("inputCourse1");
	const value1 = inputCourse1.value;

	const inputNote1 = document.getElementById("inputNote1");
	const value2 = inputNote1.value;

	const inputCredits1 = document.getElementById("inputCredits1");
	const value3 = inputCredits1.value;

	//Course 2
	const inputCourse2 = document.getElementById("inputCourse2");
	const value4 = inputCourse2.value;

	const inputNote2 = document.getElementById("inputNote2");
	const value5 = inputNote2.value;

	const inputCredits2 = document.getElementById("inputCredits2");
	const value6 = inputCredits2.value;

	//Course 3
	const inputCourse3 = document.getElementById("inputCourse3");
	const value7 = inputCourse3.value;

	const inputNote3 = document.getElementById("inputNote3");
	const value8 = inputNote3.value;

	const inputCredits3 = document.getElementById("inputCredits3");
	const value9 = inputCredits3.value;

	//Course 4
	const inputCourse4 = document.getElementById("inputCourse4");
	const value10 = inputCourse4.value;

	const inputNote4 = document.getElementById("inputNote4");
	const value11 = inputNote4.value;

	const inputCredits4 = document.getElementById("inputCredits4");
	const value12 = inputCredits4.value;

	//Course 5
	const inputCourse5 = document.getElementById("inputCourse5");
	const value13 = inputCourse5.value;

	const inputNote5 = document.getElementById("inputNote5");
	const value14 = inputNote5.value;

	const inputCredits5 = document.getElementById("inputCredits5");
	const value15 = inputCredits5.value;

	notes.push({
		course : value1,
		note : Number(value2),
		credits : Number(value3)
	});	
	notes.push({
		course : value4,
		note : Number(value5),
		credits : Number(value6)
	});
	notes.push({
		course : value7,
		note : Number(value8),
		credits : Number(value9)
	});
	notes.push({
		course : value10,
		note : Number(value11),
		credits : Number(value12)
	});
	notes.push({
		course : value13,
		note : Number(value14),
		credits : Number(value15)
	});
	
	const ponderedAverageResult = ponderedAverage(notes);
	const text = document.getElementById("ponderedAveragedResult");
	text.innerText = "The pondered averaged is: " + ponderedAverageResult;
}