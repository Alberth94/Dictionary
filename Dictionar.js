const dictionary = Array();

function dictionaryList () {
	let word = document.getElementById("toList").value; //.value gets input values
    dictionary.push(word);
    document.getElementById("toList").value = "";
}

function searchTheWord () {
	let word = document.getElementById("Search").value;
	document.getElementById("Search").value = "";
	if (dictionary.includes(word)) {
		document.getElementById("checkItOut").innerHTML ="This word exists in the dictionary.";
	} else {
		document.getElementById("checkItOut").innerHTML ="This word does not exist but you can add it.";
	}
}
