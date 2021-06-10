let mainDiv;

window.onload = function() 
{
	mainDiv = document.getElementById("main");
}

function fetchData() 
{
	
	document.getElementById("main").innerHTML = "";
	
	var search = document.getElementById("search").value;
	
	if (search.length > 0) {
	
		fetch('https://restcountries.eu/rest/v2/name/' + search)
		//.catch(error => console.log("There is an issue"))
		.then(response => response.json())
		.then(data => updatePage(data)
		
		);
	
	} else {
		console.log("This does not make any sense");
	}
	
} //fetchData

function fetchLanguage() 
{
	var internationalLangs = {
		"Afar": "AA",
		"Abkhazian": "AB",
		"Avestan": "ae",
		"Afrikaans": "af",
		"Akan": "ak",
		"Amharic": "am",
		"Aragonese": "an",
		"Arabic": "ar",
		"Assamese": "as",
		"Avaric": "av",
		"Aymara": "ay",
		"Azerbaijani": "az",
		"Bashkir": "ba",
		"Belarusian": "be",
		"Bulgarian": "bg",
		"Bihari languages": "bh",
		"Bambara": "bm",
		"Bengali": "bn", 
		"Tibetan": "bo", 	
		"Breton": "br", 	
		"Bosnian": "bs", 	
		"Catalan; Valencian": "ca", 	
		"Chechen": "ce", 	
		"Chamorro": "ch", 
		"Corsican": "co", 	
		"Cree": "cr", 	
		"Czech": "cs", 	
		"Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic": "cu", 	
		"Chuvash": "cv", 	
		"Welsh": "cy", 	
		"Danish": "da", 	
		"German": "de", 	
		"Divehi; Dhivehi; Maldivian": "dv", 	
		"Dzongkha": "dz", 	
		"Ewe": "ee", 	
		"Greek, Modern (1453-)": "el", 	
		"English": "en", 	
		"Esperanto": "eo", 	
		"Spanish; Castilian": "es", 	
		"Estonian": "et", 	
		"Basque": "eu", 	
		"Persian": "fa", 	
		"Fulah": "ff", 
		"Finnish": "fi", 	
		"Fijian": "fj", 
		"Faroese": "fo", 	
		"French": "fr", 	
		"Western Frisian": "fy", 	
		"Irish": "ga", 	
		"Gaelic; Scottish Gaelic": "gd", 	
		"Galician": "gl", 	
		"Guarani": "gn", 	
		"Gujarati": "gu", 
		"Manx": "gv", 	
		"Hausa": "ha", 	
		"Hebrew": "he", 	
		"Hindi": "hi", 	
		"Hiri Motu": "ho", 
		"Croatian": "hr", 	
		
		"Haitian; Haitian Creole": "ht", 	
		"Hungarian": "hu", 
		"Armenian": "hy",	
		"Herero": "hz",	
		"Interlingua (International Auxiliary Language Association)": "ia",	
		"Indonesian": "id",	
		"Interlingue; Occidental": "ie", 	
		"Igbo": "ig", 	
		"Sichuan Yi; Nuosu": "ii",	
		"Inupiaq": "ik",	
		"Ido": "io",	
		"Icelandic": "is",	
		"Italian": "it", 	
		"Inuktitut": "iu",	
		"Japanese": "ja",	
		"Javanese": "jv",	
		"Georgian": "ka",	
		"Kongo": "kg",	
		"Kikuyu; Gikuyu": "ki", 	
		"Kuanyama; Kwanyama": "kj",	
		"Kazakh": "kk",	
		"Kalaallisut; Greenlandic": "kl",	
		"Central Khmer": "km",	
		"Kannada": "kn",	
		"Korean": "ko", 	
		"Kanuri": "kr",
		"Kashmiri": "ks",	
		"Kurdish": "ku",	
		"Komi": "kv",	
		"Cornish": "kw",	
		"Kirghiz; Kyrgyz": "ky", 	
		"Latin": "la", 
		"Luxembourgish; Letzeburgesch": "lb", 	
		"Ganda": "lg", 	
		"Limburgan; Limburger; Limburgish": "li",	
		"Lingala": "ln",	
		"Lao": "lo", 	
		"Lithuanian": "lt",	
		"Luba-Katanga": "lu",	
		"Latvian": "lv",	
		"Malagasy": "mg",	
		"Marshallese": "mh",	
		"Maori": "mi", 	
		"Macedonian": "mk",	
		"Malayalam": "ml",	
		"Mongolian": "mn",
		"Marathi": "mr",	
		"Malay": "ms",	
		"Maltese": "mt",	
		"Burmese": "my",	
		"Nauru": "na",	
		"Bokmål, Norwegian; Norwegian Bokmål": "nb",	
		"Ndebele, North; North Ndebele": "nd",	
		"Nepali": "ne",	
		"Ndonga": "ng", 	
		"Dutch; Flemish": "nl",
		"Norwegian Nynorsk; Nynorsk, Norwegian": "nn",	
		"Norwegian": "no",	
		"Ndebele, South; South Ndebele": "nr",	
		"Navajo; Navaho": "nv",	
		"Chichewa; Chewa; Nyanja": "ny", 
		"Occitan (post 1500)": "oc",	
		"Ojibwa": "oj",
		"Oromo": "om",	
		"Oriya": "or",	
		"Ossetian; Ossetic": "os",
		"Panjabi; Punjabi": "pa", 	
		"Pali": "pi",	
		"Polish": "pl",	
		"Pushto; Pashto": "ps",	
		"Portuguese": "pt",	
		"Quechua": "qu",	
		"Romansh": "rm",	
		"Rundi": "rn",	
		"Romanian; Moldavian; Moldovan": "ro",	
		"Russian": "ru",	
		"Kinyarwanda": "rw",	
		"Sanskrit": "sa",	
		"Sardinian": "sc", 
		"Sindhi": "sd",	
		"Northern Sami": "se",	
		"Sango": "sg",	
		"Sinhala; Sinhalese": "si",
		"Slovak": "sk",
		"Slovenian": "sl", 	
		"Samoan": "sm",
		"Shona": "sn",	
		"Somali": "so",
		"Albanian": "sq",	
		"Serbian": "sr",	
		"Swati": "ss	", 
		"Sotho, Southern": "st",	
		"Sundanese": "su",	
		"Swedish": "sv",	
		"Swahili": "sw",	
		"Tamil": "ta",	
		"Telugu": "te", 	
		"Tajik": "tg",	
		"Thai": "th",	
		"Tigrinya": "ti",	
		"Turkmen": "tk",	
		"Tagalog": "tl",	
		"Tswana": "tn", 	
		"Tonga (Tonga Islands)": "to",	
		"Turkish": "tr",	
		"Tsonga": "ts",
		"Tatar": "tt",	
		"Twi": "tw",	
		"Tahitian": "ty", 	
		"Uighur; Uyghur": "ug",
		"Ukrainian": "uk",	
		"Urdu": "ur",	
		"Uzbek": "uz",	
		"Venda": "ve",	
		"Vietnamese": "vi", 	
		"Volapük": "vo",	
		"Walloon": "wa",	
		"Wolof": "wo",	
		"Xhosa": "xh",	
		"Yiddish": "yi",	
		"Yoruba": "yo", 	
		"Zhuang; Chuang": "za",
		"Chinese": "zh",	
		"Zulu": "zu"	
	
	
	};	
	//var search1 = document.getElementById("search1").value;
	var countryname = document.getElementById("search1").value;
	
	
		
	fetch('https://restcountries.eu/rest/v2/lang/' + internationalLangs[countryname])
	.then(response => response.json())
	.then(data => languageCountries(data));
		
	
	
} //fetchLanguage


function fetchRandomCountry() 
{
	
	fetch('https://restcountries.eu/rest/v2/all')
	.then(response => response.json())
	.then(data => randomCountry(data));
		
} //fetchRandomCountry

function fetchCapital() 
{
	
	document.getElementById("main").innerHTML = "";
	
	var search2 = document.getElementById("search2").value;
	
	fetch('https://restcountries.eu/rest/v2/capital/' + search2)
	.then(response => response.json())
	.then(data => countryCapital(data));
	
} //fetchCapital

function fetchCode () 
{
	document.getElementById("main").innerHTML = "";
	
	var search3 = document.getElementById("searchcountrycodes").value;
	
	fetch('https://restcountries.eu/rest/v2/alpha/' + search3)
	.then(response => response.json())
	.then(data => countryByCode(data));
	
}//fetchCode

function fetchBloc () 
{
	document.getElementById("main").innerHTML = "";
	
	var search4 = document.getElementById("searchbloc").value;
	
	fetch('https://restcountries.eu/rest/v2/regionalbloc/' + search4)
	.then(response => response.json())
	.then(data => countryByBloc(data));
	
}//fetchBloc

function languageCountries(data) 
{
	
	console.log(data);
	
	deleteChildren(mainDiv);
	
	updatePage(data);
	
	let elemCountryLanguages = document.createElement("div");
	let array5 = data;
	let output = "";
	
	elemCountryLanguages.id = "langresults"
	
	mainDiv.appendChild(elemCountryLanguages);
	
	for (let u = 0; u < array5.length; u++) 
		{
			let languageSearchArray = [data[u]];
			
		}
	
} //languageCountries

function getRndInteger(min, max) 
{
	
	return Math.floor(Math.random() * (max - min + 1) ) + min;
	
}//getRndInteger

function randomCountry(data) 
{
	
	deleteChildren(mainDiv);
	
	updatePageForRandomCountries(data);
	

/*	
	let randomNumber1 = getRndInteger(0,249);
	let randomNumber2 = getRndInteger(0,249);
	let randomNumber3 = getRndInteger(0,249);
	
	console.log(randomNumber1);
	console.log(randomNumber2);
	console.log(randomNumber3);
	
	let elemRandomCountry = document.createElement("div");
	let elemRandom1 = document.createElement("div");
	let elemRandom2 = document.createElement("div");
	let elemRandom3 = document.createElement("div");
	
	elemRandom1.innerHTML = data[randomNumber1].name;
	elemRandom2.innerHTML = data[randomNumber2].name;
	elemRandom3.innerHTML = data[randomNumber3].name;
	
	let elemRandom1Flag = document.createElement("img");
	let elemRandom2Flag = document.createElement("img");
	let elemRandom3Flag = document.createElement("img");
	
	elemRandom1Flag.src = data[randomNumber1].flag;
	elemRandom2Flag.src = data[randomNumber2].flag;
	elemRandom3Flag.src = data[randomNumber3].flag;
	
	elemRandom1Flag.id = "randomflag1";
	elemRandom2Flag.id = "randomflag2";
	elemRandom3Flag.id = "randomflag3";
	
	mainDiv.appendChild(elemRandomCountry);
	
	elemRandom1.appendChild(elemRandom1Flag);
	elemRandom2.appendChild(elemRandom2Flag);
	elemRandom3.appendChild(elemRandom3Flag);
	
	elemRandomCountry.id = "randomcountrywrapper";
	
	elemRandom1.id = "random1";
	elemRandom2.id = "random2";
	elemRandom3.id = "random3";
	
	elemRandomCountry.appendChild(elemRandom1);
	elemRandomCountry.appendChild(elemRandom2);
	elemRandomCountry.appendChild(elemRandom3);
	*/
	
	
}//randomCountry

function updatePage(data) 
{

	deleteChildren(mainDiv);
	
	
		console.log(data); // prints json in console
		
		var country; 
		for (country in data) 
		{
			createCountryInfo(data[country]);
		} // for

} // updatePage

function updatePageForAlphaCode(data) 
{

	deleteChildren(mainDiv);

	console.log(data); // prints json in console
	
	createCountryInfo(data);


} // updatePage1

function updatePageForRandomCountries(data) 
{
	
	let randomNumber1 = getRndInteger(0,249);
	let randomNumber2 = getRndInteger(0,249);
	let randomNumber3 = getRndInteger(0,249);

	deleteChildren(mainDiv);

	console.log(data); // prints json in console
	
	
	
	createCountryInfo(data[randomNumber1]);
	createCountryInfo(data[randomNumber2]);
	createCountryInfo(data[randomNumber3]);
	
	

} // updatePage1

function countryCapital(data) 
{
	
	deleteChildren(mainDiv);
	
	console.log(data);
	
	updatePage(data);
}

function countryByCode(data)
{
	
	deleteChildren(mainDiv);
	
	updatePageForAlphaCode(data);
	
}

function countryByBloc(data) 
{
	console.log(data);
	
	updatePage(data);
	
}

function createCountryInfo (countryJSON) 
{
	
	console.log(countryJSON);
	
	/*if (data.status == undefined) 
	{
		
	} else {
		
	}*/
	
	hintMessage();

	// create divs for all the elements needed
	let elemCountry = document.createElement("div");
	let elemFlag = document.createElement("img");
	let elemName = document.createElement("div");
	let elemPopulation = document.createElement("div");
	let elemCapital = document.createElement("div");
	let elemAlphaCode = document.createElement("div");
	let elemLanguages = document.createElement("div");
	let elemCurrency = document.createElement("div");
	let elemRegion = document.createElement("div");
	let elemTimeZones = document.createElement("div");
	let elemTopLevelDomain = document.createElement("div");
	let elemGini = document.createElement("div");
	let elemCallingCode = document.createElement("div");
	
	
	// give all divs a name for CSS
	
	elemCountry.classList = "countrywrapper";
	elemFlag.id = "flag";
	elemName.id = "countryname";
	elemPopulation.id = "population";
	elemCapital.id = "capital";
	elemAlphaCode.id = "alphacode";
	elemLanguages.id = "languages";
	elemCurrency.id = "currencies";
	elemRegion.id = "region";
	elemTimeZones.id = "timezones";
	elemTopLevelDomain.id = "country domains";
	elemGini.id = "gini";
	elemCallingCode.id = "callingcode";
	
	
	// if statements for data
	
	if (countryJSON.flag != undefined && countryJSON.flag != "")
	{
		elemFlag.src = countryJSON.flag;
		elemFlag.alt = "nation flag"
	} else {
		elemFlag.style.display = "none";
	}	
	
	
	if (countryJSON.name != undefined && countryJSON.name != "")
	{
		elemName.innerHTML = "<strong>Country Name</strong>: " + countryJSON.name + "<br />";
		elemName.innerHTML += "<strong>Country Native Name</strong>: " + countryJSON.nativeName;
		
	} else {
		elemName.innerHTML = "Sorry We cannot find the country you are looking for";
	}
	
	
	if (countryJSON.population != undefined && countryJSON.population != "")
	{
		elemPopulation.innerHTML = "<strong>Population</strong>: " + countryJSON.population;
		
	} else {
		elemPopulation.innerHTML = "Sorry We cannot find the country you are looking for";
	}
	
	
	if (countryJSON.capital != undefined && countryJSON.capital != "")
	{
		elemCapital.innerHTML = "<strong>Capital City</strong>: " + countryJSON.capital;
		
	} else {
		elemCapital.innerHTML = "";
	}

	
	if (countryJSON.alpha2Code != undefined && countryJSON.alpha3Code != undefined)
	{
		elemAlphaCode.innerHTML = "<strong>Alpha Codes</strong>: " + countryJSON.alpha2Code + ", " + countryJSON.alpha3Code;
		
	} else {
		elemAlphaCode.innerHTML = "";
	}
	
	
	if (countryJSON.languages != undefined && countryJSON.languages != "")
	{
		let array = countryJSON.languages;
		let output = "<strong>Official Languages</strong>: ";
		
		for (let i = 0; i < array.length; i++) 
		{
			output += array[i].name + ", ";
		}
		
		elemLanguages.innerHTML = output;
		
		
	} else {
		elemLanguages.innerHTML = "";
	}
	
	
	if (countryJSON.currencies != undefined && countryJSON.currencies != "")
	{
		let array1 = countryJSON.currencies;
		let output = "<strong>Official Currencies</strong>: ";
		
		for (let j = 0; j < array1.length; j++) 
		{
			output += array1[j].symbol + " ";
			output += array1[j].name + "<br />";
		}
		
		elemCurrency.innerHTML = output;
		
		
	} else {
		elemCurrency.innerHTML = "";
	}	
	
	
	if (countryJSON.region != undefined && countryJSON.subregion != undefined)
	{
		elemRegion.innerHTML = "<strong>Region</strong>: " + countryJSON.region + ", " + countryJSON.subregion;
		
	} else {
		elemRegion.innerHTML = "";
	}
	
	
	if (countryJSON.timezones != undefined && countryJSON.timezones != "")
	{
		let array2 = countryJSON.timezones;
		let output = "<strong>Timezones</strong>: ";
		
		for (let k = 0; k < array2.length; k++) 
		{
			output += array2[k]
		}
		
		elemTimeZones.innerHTML = output;
		
		
	} else {
		elemTimeZones.innerHTML = "";
	}
	
	
	if (countryJSON.topLevelDomain != undefined && countryJSON.topLevelDomain != "")
	{
		let array3 = countryJSON.topLevelDomain;
		let output = "<strong>Top Level Domain(s)</strong>: ";
		
		for (let l = 0; l < array3.length; l++) 
		{
			output += array3[l];
		}
		
		elemTopLevelDomain.innerHTML = output;
		
		
	} else {
		elemTopLevelDomain.innerHTML = "";
	}
	
	if (countryJSON.gini != undefined && countryJSON.gini != "")
	{
		elemGini.innerHTML = "<strong>Gini index</strong>: " + countryJSON.gini;
		
	} else {
		elemGini.innerHTML = "<strong>Gini index</strong>: ";
	}
	
	if (countryJSON.callingCodes != undefined && countryJSON.callingCodes != "")
	{
		let array4 = countryJSON.callingCodes;
		let output = "<strong>Calling Code(s)</strong>: ";
		
		for (let m = 0; m < array4.length; m++) 
		{
			output += array4[m] + "<br />";
		}
		
		elemCallingCode.innerHTML = output;
		
		
	} else {
		elemCallingCode.innerHTML = "";
	}
	
	// append everything to mainDiv
	
	mainDiv.appendChild(elemCountry);
	
	// append information to each countryDiv
	elemCountry.appendChild(elemFlag);
	elemCountry.appendChild(elemName);
	elemCountry.appendChild(elemPopulation);
	elemCountry.appendChild(elemCapital);
	elemCountry.appendChild(elemAlphaCode);
	elemCountry.appendChild(elemLanguages);
	elemCountry.appendChild(elemCurrency);
	elemCountry.appendChild(elemRegion);
	elemCountry.appendChild(elemTimeZones);
	elemCountry.appendChild(elemTopLevelDomain);
	elemCountry.appendChild(elemGini);
	elemCountry.appendChild(elemCallingCode);

} //createCountryInfo

function hintMessage() 
{
	
	let output = "";
	
	output += "Please scroll down to view the results displayed."
	
	document.getElementById("hintmsg").innerHTML = output;
}

function deleteChildren(e) 
{
	let child = e.lastElementChild;
	while (child) 
	{
		e.removeChild(child);
		child = e.lastElementChild;
	}
} //deleteChildren 


