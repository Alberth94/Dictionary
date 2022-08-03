const dictionary = Array();

function dictionaryList () {
	var word = document.getElementById("toList").value; //.value gets input values
    dictionary.push(word);
    document.getElementById("toList").value = "";
}

function searchTheWord () {
	let word = document.getElementById("Search").value;
	document.getElementById("Search").value = "";
	if (dictionary.includes(word)) {
		alert("This word exists in the dictionary.");
	} else {
		alert("This word does not exist but you can add it.");
	}
}