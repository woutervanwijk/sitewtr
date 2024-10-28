// Zoek+ (c) WvW 2010
// I discovered jQuery when the programming was half done, so I mixed it up a bit...
// Actually, it's quite a mess because it grew....
var timer;
var text1var = '';
var text2var = '';
var olddescr = '';

function clickHead (elem) {
	clearTimeout(timer);
	if( $("#nav ul").is(':visible')) {
		$(" #nav ul ").hide(); 
	} else {
		$(elem).next().show(); 
	}
	return false;
}

function changeTarget () {
	if($("#checktarget").attr('checked')) {
		$("#zoekform").attr('target', "_blank");
		$("#zoekformh").attr('target', "_blank");
		$.cookie('target', '1', { expires: 365});	
	} else {
		$("#zoekform").attr('target', "");
		$("#zoekformh").attr('target', "");
		$.cookie('target', null);
	}
}

function showDescr(elem) {
		var descr = getDescr(elem.name);
		olddescr = $("#statusbar").html();
		$("#statusbar").html('<img src="img/lichtje.gif"  alt="Lichtje" title="lichtje" />' + descr);
}

function hideDescr() {
		$("#statusbar").html(olddescr);
}

function getDescr(elname) {
  if (a[elname][0] === '') {
		return (a[elname][4]);		
	} else {
		return (a[elname][13]);		
	}
}

function mainmenu(){
	hideMenu();
	$(" #nav li").mouseover(function(){
			clearTimeout(timer);
			$(' #nav ul ').hide();
			$(this).find('ul:first').show();
	}).mouseout(function(){
		clearTimeout(timer); 
		timer = setTimeout(function() {$(' #nav ul ').hide();}, 1000);
	});
}

/*wvw*/
function makeLower(title) {
	if ( (title.substring(0,7).toLowerCase() === 'vertaal') || (title.substring(0,4).toLowerCase() === 'zoek')) {
		return (title);
	} else {
		return ('Zoek ' + title.substring(0,1).toLowerCase() + title.substring(1,title.length));
	}
}

function subm(elem) {
	$.cookie('text1var', $("#text1").val() );
	$.cookie('text2var', $("#text2").val() );
	//google analytics
	var hash = location.hash;
	hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
//	pageTracker._trackPageview("/submit/" + hash );
	return true;
}

function submh(elem) {
	$.cookie('text1var', $("#text1h").val() );
	$.cookie('text2var', $("#text2h").val() );
	//google analytics
	var hash = location.hash;
	hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
//	pageTracker._trackPageview("/submit/" + hash );
	return true;
}

function openUrl (url) {
	//google analytics
	var hash = location.hash;
	hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
//	pageTracker._trackPageview("/submit/" + hash );
	if($("#checktarget").attr('checked')) {
		window.open(url);
	} else {
		window.document.location = url;
	}
}


function createUrlHy () {
//for hyves
// <!--  onsubmit="location.href='http://www.hyves.nl/search/?#'+$F('searchhyver')+'/'; return false;" -->
// http://www.hyves.nl/search/?#search=hyvers%3Awouter&__state__=1
//	var url = $("#zoekformh").attr("action") + $("#text1h").attr("name") + '='+ $("#text1h").val();
//	var url = $("#zoekformh").attr("action") + $("#text1h").val() + '&__state__=1';
//http://www.hyves.nl/search/hyver/?searchterms=
	var url = $("#zoekformh").attr("action") + $("#text1h").val();
		url = encodeURI(url);
		$.cookie('text1var', $("#text1h").val());
		$.cookie('text2var', $("#text2h").val());
		openUrl (url);
		return false;
}

function createUrlTg () {
//telefoongids
//http://www.detelefoongids.nl/tg/plaats-${PLAATS}/w-${WAT}/1/
// http://nationaletelefoongids.goudengids.nl/search/place/name.html
	var url = $("#zoekformh").attr("action") + $("#text2h").val() + '/w-' + $("#text1h").val() + '/1/';
		url = encodeURI(url);
		$.cookie('text1var', $("#text1h").val() );
		$.cookie('text2var', $("#text2h").val() );
		openUrl (url);
		return false;
}

function createUrlTT () {
// tomtom
// http://route.tomtom.com/t/#/route/Straat%2C%20PLaats%2C%20/DestStraat%2C%20Destpl%2C/?leave=now_with_traffic&center=52.26048232040834%2C4.928207281285153&zoom=7
		var url = $("#zoekformh").attr("action") + $("#text1h").val() + '/' + $("#text2h").val() +  '/?leave=now_with_traffic';
		url = encodeURI(url);
		$.cookie('text1var', $("#text1h").val() );
		$.cookie('text2var', $("#text2h").val() );
		openUrl (url);
		return false;
}

function createUrlGm () {
// gmail
// https://mail.google.com/mail/#search/VALUE
		var url = $("#zoekformh").attr("action") + $("#text1h").val();
		url = encodeURI(url);
		$.cookie('text1var', $("#text1h").val() );
		openUrl (url);
		return false;
}

function changeimg(url, descr) {
var image = document.getElementById("image");
 image.src = 'img/blank.gif';

 if (url !== '') {
  //preload
  image1 = new Image();
  image1.src = 'img/' + url;
  
  image.src = 'img/' + url ;
  image.alt = descr;
  image.title = descr;
  };
}

function changeHtml(html, sitename, siteurl, descr, siteimage) {
var formdiv = document.getElementById("formdiv");
var htmldiv = document.getElementById("htmldiv");

$("#searchurl").attr("href", siteurl);
$("#searchtitle").html(makeLower(sitename));
$("#description").html(descr);

document.title = 'Zoek+ [' + sitename + ']';


changeimg(siteimage, makeLower(sitename));

formdiv.style.display= 'none';
htmldiv.style.display= 'block';

htmldiv.innerHTML = html;

$("#text1h").keydown( function() { hideMenu(); });
$("#text2h").keydown( function() { hideMenu(); });

$("#text1h").focus().select();

if($("#checktarget").attr('checked')) {
	$("#zoekformh").attr('target', "_blank");
} else {
	$("#zoekformh").attr('target', "");
}


}

function changeArr(elem) {
//google analytics
//pageTracker._trackPageview("/pages/" + elem.name );

	barStatus = 0;

if ((!elem) || (!elem.name)) {
	return false;
} 
 var arr = a[elem.name];
  var htmlIsHidden =  $("#htmldiv").is(':hidden');
  var formIsHidden =  $("#formdiv").is(':hidden');
  var text1 = $("#text1").val();
  var text2 = $("#text2").val();
  var text1h = $("#text1h").val();
  var text2h = $("#text2h").val();


  if (arr[0] === '') {
  	changeHtml(arr[1], elem.firstChild.nodeValue, arr[3], arr[4], arr[5]);
  } else {
	changeForm(elem.firstChild.nodeValue, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11], arr[12], arr[13], arr[14]);
  }

//for htmldiv is shown, but wasn't shown before
 if(htmlIsHidden && $("#htmldiv").is(':visible')) {
	if($("#text1h").length) {
		$("#text1h").val(text1).focus().select();
		text1var = text1;
	}
	if($("#text2h").length) {
		$("#text2h").val(text2);
		text2var = text2;
	}
 }

//for htmldiv is shown, and was shown before
 if(!htmlIsHidden && $("#htmldiv").is(':visible')) {
	if($("#text1h").length) {
		$("#text1h").val(text1h).focus().select();
		text1var = text1h;
	}
	if($("#text2h").length) {
		$("#text2h").val(text2h);
		text2var = text2h;
	}
 }

//for form is shown, but wasn't shown before
 if(formIsHidden && $("#formdiv").is(':visible')) {
	$("#text1").val(text1h).focus().select();
	$("#text2").val(text2h);
		text1var = text1h;
		text2var = text2h;
 }
//hide menu
 $(" #nav ul ").hide(); 
  
  return true;
}

function changeForm(sitename, action, textbox1name, textbox2name, hidden1name, hidden1value, hidden2name, hidden2value, submitname, method, siteurl, siteimage, textbox1descr, textbox2descr, descr) {
var formdiv = document.getElementById("formdiv");
var htmldiv = document.getElementById("htmldiv");
var text1 = document.getElementById("text1");

var spantext2 = document.getElementById("spantext2");
var form = document.getElementById("zoekform");
var text1description = document.getElementById("text1descr");
var text2description = document.getElementById("text2descr");
text1.name = textbox1name;

if(textbox2name) { $("#text2").attr("name", textbox2name); } else { $("#text2").removeAttr("name"); }

if (textbox2name === '') {
	spantext2.style.display= 'none';
} else {
	spantext2.style.display= 'inline';
}
$("#searchurl").attr("href", siteurl);
$("#description").html(descr);

//to fix weird ie8 bug  in  #postcode
$("#searchtitle").html(form.action);
$("#searchtitle").html(makeLower(sitename));

//order is important to fix weird ie8 bug in  #postcode
 form.method = method;
 form.action = action;


$("#hidden1").val(hidden1value);
$("#hidden2").val(hidden2value);

if(submitname) { $("#submit").attr("name", submitname); } else { $("#submit").removeAttr("name"); }
if(hidden1name) { $("#hidden1").attr("name", hidden1name); } else { $("#hidden1").removeAttr("name"); }
if(hidden2name) { $("#hidden2").attr("name", hidden2name); } else { $("#hidden2").removeAttr("name"); }
	
document.title = 'Zoek+ [' + sitename + ']';

//create child if it doesnt exist. not needed for others.  if ( textbox2descr == '' ) { textbox2descr = '&nbsp;'} 
if (!text2description.firstChild) { text2description.createChild(); }
text2description.innerHTML = textbox2descr + ':';
if (textbox1descr !== '') {
	text1description.innerHTML = textbox1descr + ':';
	text1description.style.display= 'block';
} else {
	text1description.innerHTML = '';
	text1description.style.display= 'none';
}

formdiv.style.display= 'block';
htmldiv.style.display= 'none';

changeimg(siteimage, makeLower(sitename));

text1.focus();
text1.select();

}

function setHomePage()
{

	if(navigator.appName == "Microsoft Internet Explorer")
	{
	   document.body.style.behavior='url(#default#homepage)';
   	document.body.setHomePage('http://www.zoekplus.nl');
//google
//pageTracker._trackPageview("/pages/homeie" );

	} else {
		window.open("sethome.html");
//google
//pageTracker._trackPageview("/pages/homeother" );
		return true;	   
	}

}



function createArray() {

a = new Array();
//a['google'] = new Array('', '<form action="http://www.google.nl/cse" id="cse-search-box"><div><input type="hidden" name="cx" value="partner-pub-5457839548366721:bnyj78-tfez" /><input type="hidden" name="ie" value="ISO-8859-1" /><input type="text" name="q" size="31" id="text1" /><input type="submit" name="sa" value="Zoeken" /></div></form><script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=nl"></script>', 'Google', 'http://www.google.nl', 'Doorzoek het internet met Google.', 'google.gif' );

a['google'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek het internet met Google. Tip: gebruik meerdere zoekwoorden om een beter resultaat te krijgen.');
a['exact'] = new Array('http://www.google.nl/search', 'as_epq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', '', '', 'Zoek op exacte combinatie en volgorde van woorden. Bijvoorbeeld: koninklijk huis. U vindt dan alle pagina\'s met "koninklijk huis", maar niet pagina\'s waarin alleen koninklijk, of alleen huis voorkomen.');
a['binnensite'] = new Array('http://www.google.nl/search', 'q', 'as_sitesearch', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', 'Zoekwoord(en)', 'Adres (url) van site', 'Doorzoek een specifieke site met Google. Bijvoorbeeld: "Utrecht" op "ad.nl". U vindt dan alleen de artikelen op de site van het AD waarin Utrecht vermeld staat.');
a['eenvan'] = new Array('http://www.google.nl/search', 'as_oq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Vul de \'of\'-zoekwoorden in', '', 'Zoek met \'of\'. Normaal gesproken krijg je alleen resultaten waarin <i>alle</i> ingevoerde woorden voorkomen. Met deze optie krijg je alle pagina\'s met <i>een of meer</i> van de zoekwoorden.');
a['related'] = new Array('http://www.google.nl/search', 'as_rq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Adres (url) van pagina of site', '', 'Vind pagina\'s die lijken op een pagina of site.');
a['linkto'] = new Array('http://www.google.nl/search', 'as_lq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Adres (url) van pagina of site', '', 'Vind pagina\'s die verwijzen naar een pagina of site.');

a['pdf'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'pdf', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek documenten in het PDF-bestandsformaat met Google. Vaak worden meer offici&euml;le publicaties in PDF-vorm op het web gezet.');
a['doc'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'doc', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek documenten in het Word-bestandsformaat met Google.  Vaak worden documenten in Word-vorm gepubliceerd. Ook kunnen ze verborgen informatie bevatten.');
a['xls'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'xls', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek spreadsheets in het Excel-bestandsformaat met Google. Excel spreadsheets zijn een interessante bron voor een zoektocht naar cijfers en berekeningen.');
a['ppt'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'ppt', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek Powerpoint-presentaties met Google. Presentaties in Powerpoint bevatten vaak samenvattingen en soortgelijke informatie. Soms bevatten ze interessante details.');
a['bedrijf'] = new Array('http://www.ilocal.nl/WebSearchServlet', 'iqk1', 'iqk3', 'tid', 'NewSearch', 'iqk2', 'not member', '', 'GET', 'http://www.ilocal.nl', 'ilocal.gif', 'Bedrijfsnaam of type (b.v. Slager)', '(Straat,) Plaats. Of postcode', 'Zoek een bedrijf via ilocal.nl. Je kunt zoeken op bedrijfsnaam (Philips) of bedrijfstype (b.v. Bakker of Slager).');
a['naam'] = new Array('http://www.gevonden.cc/naam.php', 'lastname', 'townname_i', '', '', '', '', '', 'POST', 'http://www.gevonden.cc/', 'gevonden.png', 'Achternaam (of een deel daarvan)', 'Plaats', 'Zoek een telefoonnummer en adres via Gevonden.cc. Vul daarvoor een naam en een woonplaats in.');
a['optelnr'] = new Array('http://www.gevonden.cc/telefoonnummer.php', 'phonenumber', '', '', '', '', '', '', 'POST', 'http://www.gevonden.cc', 'gevonden.png', 'Telefoonnummer', '', 'Zoek een naam en adres bij een telefoonnummer via Gevonden.cc. Als het nummer bekend is, krijg je een naam en eventueel een adres.'); 
a['gratistel'] = new Array('http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'telefoonnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een gratis telefoonnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in en je krijgt een gratis nummer.');
a['antwoordnummer'] = new Array('http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'antwoordnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een antwoordnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in en je krijgt een antwoordnummer.');
a['pipl'] = new Array('http://www.pipl.com/search/', 'FirstName', 'LastName', '', '', '', '', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'Voornaam', 'Achternaam', 'Zoek meerdere gegevens van een persoon in een keer met pipl.com. Hiermee doorzoek je in een keer in meerdere bronnen (Web, Blogs, Documenten) op internet naar een persoon.');
a['email'] = new Array('http://www.pipl.com/search/', 'Email', '', 'CategoryID', '4', 'Interface', '1', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'E-mailadres', '', 'Zoek op e-mailadres via pipl.com. Als je alleen een e-mailadres weet, kun je die hiermee eventueel vinden.');
a['username'] = new Array('http://www.pipl.com/search/', 'Username', '', 'CategoryID', '5', 'Interface', '1', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'Gebruikersnaam (bv. wouter1980)', '', 'Zoek op gebruikersnaam met pipl.com. Als je alleen een gebruikersnaam weet (bijvoorbeeld uit een forum), kun je die hiermee eventueel vinden.');

a['0900'] = new Array('http://www.vraagalex.nl/direct-zoeken-resultaat.html', 'alternatief', '', '', '', '', '', '', 'GET', 'http://www.vraagalex.nl/', 'vraagalex.gif', 'Bedrijfsnaam', '', 'Zoek een alternatief voor betaalde telefoonnummers of een gratis telefoonnummer van een bedrijf via Vraagalex.nl.');
a['adresbijpc'] = new Array('http://www.gevonden.cc/postcode.php', 'postalcode', '', '', '', '', '', '', 'POST', 'http://www.gevonden.cc', 'gevonden.png', 'Postcode', '', 'Zoek namen en adressen bij een postcode via Gevonden.cc.'); 
a['adresviaggl'] = new Array('http://www.google.nl/search', 'as_epq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Gegevens', '', 'Zoek algemeen op internet op een naam of adres. Type daarvoor de volledige naam of de straatnaam met huisnummer.');
a['expert'] = new Array('http://www.onderzoekinformatie.nl/nl/oi/nod/expert/search', 'query', '', '', '', '', '', '', 'GET', 'http://www.onderzoekinformatie.nl/', 'oi.gif', 'Naam of trefwoord van onderzoeksgebied', '', 'Zoek een onderzoeker of deskundige uit de universitaire wereld. Te doorzoeken op naam of op trefwoord van onderzoeksgebied');
//a['nieuws'] = new Array('http://news.google.nl', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://news.google.nl', 'google.gif', '', '', 'Vul een woord in dat je wilt opzoeken in het Nederlandse nieuws van de afgelopen tijd, via Google News.');

a['nws'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return submh();" action="http://news.google.nl/news/search"><input value="" id="text1h" name="q" size="45" type="text"  onFocus="this.select()"> <input value="Zoek" type="submit"><input type="hidden" id="text2h" /><br/><br/>Periode:<br/><select name="as_qdr"><option value="all">Alles</option><option value="d">Afgelopen 24 uur</option><option value="w">Afgelopen week</option><option value="m">Afgelopen maand</option><option value="y">Afgelopen jaar</option></select><input type="hidden" name="as_drrb" value="q" /></form>', '', 'http://www.google.nl', 'Vul een woord in dat je wilt opzoeken in het Nederlandse nieuws van de afgelopen tijd, via Google News. Selecteer eventueel een periode.', 'google.gif');

a['intnws'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return submh();" action="http://news.google.com/news/search"><input value="" id="text1h" name="q" size="45" type="text"  onFocus="this.select()"> <input value="Zoek" type="submit"><input type="hidden" id="text2h" /><br/><br/>Periode:<br/><select name="as_qdr"><option value="all">Alles</option><option value="d">Afgelopen 24 uur</option><option value="w">Afgelopen week</option><option value="m">Afgelopen maand</option><option value="y">Afgelopen jaar</option></select><input type="hidden" name="ned" value="us" /><input type="hidden" name="as_drrb" value="q" /></form>', '', 'http://news.google.com/news?cf=all&ned=us&edchanged=1&ict=lbe_nl_nl', 'Vul een woord in dat je wilt opzoeken in het Internationale nieuws van de afgelopen tijd, via Google News. Selecteer eventueel een periode.', 'google.gif');

a['blogs'] = new Array('http://technorati.com/search', 'q', '', 'return', 'posts', '', '', 'Search', 'GET', 'http://www.technorati.com', 'technorati.gif', '', '', 'Weblogs zijn goed apart te doorzoeken op actuele berichten. Doorzoek ze met Technorati.'); 


//a['intnieuws'] = new Array('http://www.topix.com/search/article', 'q', '', '', '', '', '', '', 'GET', 'http://www.topix.com', 'topix.gif', 'Vul zoekwoord(en) in, in het Engels', '', 'Doorzoek het Engelstalige nieuws via Topix.');
a['groups'] = new Array('http://groups.google.com/groups/search', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://groups.google.com/', 'google.gif', '', '', 'Nieuwsgroepen en andere forums op internet zijn apart doorzoekbaar op actuele berichten. Vul een woord in dat je wilt opzoeken via Google Groups.');
a['persberichten'] = new Array('http://www.perssupport.nl/publishingweb/pressrelease/quick-search.do', 'searchText', '', '', '', '', '', '', 'GET', 'http://www.perssupport.nl/', 'anppers.jpg', '', '', 'Persbureau ANP verzamelt persberichten uit allerlei bronnen. Zoek hier in de persberichten via ANP Pers Support');
a['gglvideo'] = new Array('http://video.google.com/videosearch', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://video.google.com/', 'youtube.gif', '', '', 'Zoek filmpjes in Google Video, Youtube en andere videosites.'); 
a['bingvideo'] = new Array('http://www.bing.nl/video/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.bing.nl/?scope=video', 'bing.gif', '', '', 'Zoek video\'s in MSN, Hulu, Mtv, MySpace, etc.'); 
a['yahooimages'] = new Array('http://nl.images.search.yahoo.com/search/images', 'p', '', '', '', '', '', '', 'GET', 'http://nl.images.search.yahoo.com/', 'yahoo.gif', '', '', 'Zoek afbeeldingen met Yahoo.');
a['flickr'] = new Array('http://www.flickr.com/search', 'q', '', '', '', '', '', '', 'GET', 'http://www.flickr.com', 'flickr.png', '', '', 'Zoek in foto\'s die op Flickr gepubliceerd zijn.'); 
a['picasa'] = new Array('http://picasaweb.google.com/lh/view', 'q', '', 'psc', 'g', '', '', '', 'GET', 'http://picasaweb.google.com/', 'picasa.gif', '', '', 'Zoek in foto\'s die met Picasa gepubliceerd zijn.'); 

a['schoolbank'] = new Array('http://www.schoolbank.nl/person_search.html', 'terms', '', '_a', 'results', '', '', '', 'GET', 'http://www.schoolbank.nl/', 'schoolbank.gif', 'Naam', '', 'Zoek iemand via Schoolbank.nl.');

// a['uitzendinggemist'] = new Array('http://www.uitzendinggemist.nl/index.php/search?asd', 'sq', '', 'searchfilter', 'titel', '', '', '', 'GET', 'http://www.uitzendinggemist.nl/', 'uitzendinggemist.gif', 'Programmanaam:', '', 'Vul een programma in dat je wilt opzoeken in Uitzendinggemist');

a['mp3'] = new Array('http://www.skreemr.com/results.jsp', 'q', '', '', '', '', '', '', 'GET', 'http://www.skreemr.com', 'skreemr.gif', 'Vul naam van band of nummer in', '', 'Zoek op MP3-tjes en andere muziekvormen met Skreemr. Zoek op band of nummer.'); 
a['tvgids'] = new Array('http://www.tvgids.nl/zoeken/', 'q', '', '', '', '', '', '', 'GET', 'http://www.tvgids.nl/', 'tvgids.gif', 'Programmanaam', '', 'Zoek in de televisiegids. Vul een programma in dat je wilt opzoeken.');
a['films'] = new Array('http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'movie', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Titel film', '', 'Zoek films en recensies via cinema.nl.');
a['acteurs'] = new Array('http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'person', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Naam acteur', '', 'Zoek informatie over acteurs via cinema.nl.');
a['bingimages'] = new Array('http://www.bing.nl/images/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.bing.nl/?scope=images', 'bing.gif', '', '', 'Zoek afbeeldingen met Bing.'); 
a['gglimages'] = new Array('http://images.google.nl/images', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Zoek afbeeldingen met Google.');
a['wikinl'] = new Array('http://nl.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://nl.wikipedia.org', 'wikipedia.png', '', '', 'Zoek een woord of definitie in de Nederlandstalige Wikipedia');
a['wikien'] = new Array('http://en.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://en.wikipedia.org', 'wikipedia.png', '', '', 'Zoek een woord of definitie in de Engelstalige Wikipedia');
a['vandale'] = new Array('http://www.vandale.nl/vandale/zoekService.do', 'searchQuery', '', 'selectedDictionary', 'nn', 'selectedDictionaryName', 'Nederlands', '', 'GET', 'http://www.vandale.nl', 'vandale.png', 'Vul een woord in', '', 'Zoek een woord in het woordenboek via VanDale.nl.');
a['synoniemen'] = new Array('http://www.synoniemen.net/index.php', 'zoekterm', '', '', '', '', '', '', 'GET', 'http://www.synoniemen.net/', 'synoniemen.png', 'Woord', '', 'Vul een woord in waarvan je een synoniem wilt, via Synoniemen.net.');
a['transl'] = new Array('http://translate.google.nl/translate_t', 'text', '', 'tl', 'nl', 'sl', 'auto', '', 'POST', 'http://translate.google.nl/', 'google.gif', 'Woord(en)', '', 'Vertaal een woord of zin met Google Translate naar het Nederlands.');
a['translpage'] = new Array('http://translate.google.nl/translate', 'u', '', 'tl', 'nl', 'hl', 'nl', '', 'GET', 'http://translate.google.nl/', 'google.gif', 'Adres (url) van pagina of site', '', 'Vertaal een hele site met Google Translate naar het Nederlands.');
a['maps'] = new Array('http://maps.google.nl/maps', 'q', '', 'z', '17', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Straat, Plaats', '', 'Zoek een stad, dorp of een straat via Google Maps. Bijvoorbeeld \'Kalverstraat, Amsterdam\'');
/* a['birdseye'] = new Array('http://www.bing.nl/maps/default.aspx', 'where1', '', 'style', 'b', 'FORM', 'LMLTCP', '', 'GET', 'http://www.bing.nl/maps/', 'bing.gif', 'Straat, plaats', '', 'Bekijk een stad, dorp of straat in vogelblikperspectief (van schuin bovenaf) met Bing. Bijvoorbeeld \'Domplein, Utrecht\'. Er zijn niet van alle plaatsen in Nederland foto\'s beschikbaar. Soms is het nodig om nog een keer op het groene vergrootglas te drukken.');
*/

a['route'] = new Array('http://maps.google.nl/maps', 'saddr', 'daddr', '', '', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Van (adres, plaats)', 'Naar (adres, plaats)', 'Zoek een route met Google Maps. Vul twee keer de straat en plaats in.');

a['marktplaats'] = new Array('http://www.marktplaats.nl/nieuw_zoek.php3', 'q', '', 'ts', '1', '', '', '', 'GET', 'http://www.marktplaats.nl/', 'marktplaats.gif', '', '', 'Zoek tweedehands producten via marktplaats.nl');
a['ip'] = new Array('http://www.ipchecking.com/', 'ip', '', '', '', '', '', '', 'GET', 'http://www.ipchecking.com/', 'ipchecking.gif', 'IP-adres of domeinnaam', '', 'Zoek gegevens van een ip-adres of een domeinnaam (de uitkomst is 1 domeinnaam, er kunnen meerdere domeinnamen op 1 adres draaien).');
a['internetarchive'] = new Array('http://web.archive.org/archive_request_ng', 'url', '', 'collection', 'web', '', '', '', 'GET', 'http://web.archive.org', 'archive.gif', 'Adres (url) van pagina of site', '', 'Bekijk een oude, gearchiveerde versie van een site via Archive.org. Hiermee is de ontwikkeling van een site goed te zien.');
a['weer'] = new Array('http://www.weer.nl/nl/home/weer/wereldweer/zoekresultaten.html', 'tx_citysearchgeodb_pi1[sword]', '', 'what', 'WeatherLocalUndeclared', 'lswa', 'WeatherLocalUndeclared', '', 'POST', 'http://www.weer.nl', 'weer.png', 'Plaatsnaam', '', 'Bekijk de weersvoorspelling van een plaats via Weer.nl.');
a['overheid'] = new Array('http://zoekdienst.overheid.nl/Zoekdienst/overheid.nl/overheid', 'term', '', '', '', '', '', '', 'POST', 'http://www.overheid.nl', 'overheid.gif', '', '', 'Zoek binnen diverse bronnen van de overheid (wetten, documenten, persberichten) met Overheid.nl.');
a['bing'] = new Array('http://www.bing.nl/search', 'q', '', '', '', '', '', '', 'GET', 'http://www.bing.nl', 'bing.gif', '', '', 'Doorzoek het internet met Bing (voorheen Live/MSN).');
a['yahoo'] = new Array('http://nl.search.yahoo.com/search', 'p', '', '', '', '', '', '', 'GET', 'http://nl.yahoo.com/', 'yahoo.gif', '', '', 'Doorzoek het internet met Yahoo.');
a['wolfram'] = new Array('http://www.wolframalpha.com/input/', 'i', '', '', '', '', '', '', 'GET', 'http://www.wolframalpha.com', 'wolfram.gif', '', '', 'Experimentele vraagmachine (werkt alleen in het Engels).');
a['altavista'] = new Array('http://nl.altavista.com/web/results', 'q', '', '', '', '', '', '', 'GET', 'http://www.altavista.nl', 'altavista.gif', '', '', 'Doorzoek het internet met Alta Vista.');


a['tomtom'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return createUrlTT();" action="http://route.tomtom.com/t/#/route/">Van (adres, plaats):<br/><br/><input value="" id="text1h" name="departure" size="45" type="text" onFocus="this.select()"><br/><br/>Naar (adres, plaats):<br/><br/><input value="" id="text2h" name="destination" size="45" type="text" onFocus="this.select()"> <input value="Zoek" type="submit"></form>', 'TomTom Routeplanner', 'http://route.tomtom.com', 'Plan een route met de online planner van TomTom.', 'tomtom.gif');

a['twitter'] = new Array('http://search.twitter.com/search/', 'q', '', '', '', '', '', '', 'GET', 'http://www.twitter.com', 'twitter.png', '', '', 'Doorzoek al het gekwetter op Twitter.');

a['imdb'] = new Array('http://www.imdb.com/find', 'q', '', 's', 'all', '', '', '', 'GET', 'http://www.imdb.com', 'imdb.gif', 'Vul naam film of acteur in, in het Engels', '', 'Zoek filmrecensies of acteurs via the Internet Movie Database (imdb).');

a['ixquick'] = new Array('http://www.ixquick.nl/do/metasearch.pl', 'query', '', 'cat', 'web', 'language', 'nederlands', '', 'POST', 'http://www.ixquick.nl', 'ixquick.gif', '', '', 'Zoek tegelijk in Google, Live, Yahoo, Altavista, Ask, Ilse, etc. Ook handig voor \'prive\'-zoeken, slaat uw IP-adres niet op.');

a['mensnieuws'] = new Array('http://emm.newsexplorer.eu/NewsExplorer/search/nl/entities', 'query', '', '', '', '', '', '', 'GET', 'http://emm.newsexplorer.eu', 'newsexplorer.gif', '', '', 'Zoek mensen in het nieuws met Europ Media Monitor NewsExplorer');

a['gezicht'] = new Array('http://www.facesaerch.com/facesearch/', 'q', '', '', '', '', '', '', 'GET', 'http://www.facesaerch.com/', 'facesaerch.gif', '', '', 'Zoek op gezichten via Facesaerch.');

//a['telefoongids'] = new Array ('', '<iframe height="140" width="300" src="http://static.detelefoongids.nl/zoekbox/DTG_300x130_YP0WP1WS0.html?edsacid=3PCK-undefined--300x130YP0WP1WS0" frameborder="0" scrolling="no"></iframe>', 'Telefoongids', 'http://www.detelefoongids.nl', 'Zoek telefoonnummers en adressen in de telefoongids.nl', 'telefoongids.gif');

a['telefoongids'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return createUrlTg();" action="http://www.detelefoongids.nl/tg/plaats-">Naam (b.v: Jansen, J):<br/><br/><input value="" id="text1h" name="name" size="45" type="text" onFocus="this.select()"><br/><br/>Straat, Plaats (b.v. Domplein, Utrecht; of een van beiden):<br/><br/><input value="" id="text2h" name="place" size="45" type="text" onFocus="this.select()"> <input value="Zoek" type="submit"></form>', 'Telefoongids', 'http://www.detelefoongids.nl', 'Zoek telefoonnummers en adressen in de telefoongids.nl', 'telefoongids.gif');

a['hyves'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return createUrlHy();" action="http://www.hyves.nl/search/hyver/?searchterms="><input value="" id="text1h" name="hyvers" size="45" type="text" onFocus="this.select()"><input value="Zoek" type="submit"><input type="hidden" id="__state__" value="1" /><input type="hidden" id="text2h" /></form>', 'Zoek persoon op Hyves', 'http://www.hyves.nl', 'Zoek iemand op Hyves.nl. Voer de naam in of naam en woonplaats, b.v. Wouter Utrecht.', 'hyves.gif');

a['google'] = new Array ('', '<form id="zoekformh" method="GET" onsubmit="return submh();" action="http://www.google.nl/search"><input value="" id="text1h" name="as_q" size="45" type="text"  onFocus="this.select()"> <input value="Zoek" type="submit"><input type="hidden" id="text2h" /><br/><br/>Periode:<br/><select name="as_qdr"><option value="all">Alles</option><option value="d">Afgelopen 24 uur</option><option value="w">Afgelopen week</option><option value="m">Afgelopen maand</option><option value="y">Afgelopen jaar</option></select></form>', 'Google op datum', 'http://www.google.nl', 'Zoek met Google. Vul eventueel een periode in voor pagina\'s die zijn gemaakt in de afgelopen dag, week, maand of jaar.', 'google.gif');
a['opadres'] = new Array ('', '<form id="zoekformh" action="http://www.gevonden.cc/adres.php" onsubmit="return submh();" method="get">Straat: &nbsp;<input id="text1h" type="text" name="streetname_i" size="30"  onFocus="this.select()" /> Nummer: <input type="text"  onFocus="this.select()" name="housenumber" size="4" /><br/><br/>Plaats: <input onFocus="this.select()" id="text2h" type="text" name="townname_i" size="30" /><br/><br/><input value="Zoek" type="submit"></form>', 'naam en nummer bij adres', 'http://www.gevonden.cc', 'Zoek op wie er op een bepaald adres woont, of wie er in een straat wonen. Vul adres en plaats in en eventueel een huisnummer.', 'gevonden.png');

a['wieowie'] = new Array ('http://www.wieowie.nl/zoeken.php', 'voornaam', 'achternaam', 'extern', '1', '', '', '', 'GET', 'http://www.wieowie.nl/', 'wowlogo.gif', 'Voornaam', 'Achternaam', 'Zoek meerdere gegevens van een persoon in een keer met wieowie.nl. Hiermee doorzoek je in meerdere bronnen (Google, Hyves, Schoolbank, etc) op internet naar een persoon.');


a['detailsdomain'] = new Array('', '<form onsubmit="return submh();" id="zoekformh" method="post" action="http://centralops.net/co/DomainDossier.aspx" ><input type="hidden" value="true" name="svc_scan" /><input type="hidden" value="false" name="traceroute" /><input type="hidden" value="true" name="dom_whois" /><input type="hidden" value="true" name="net_whois" /><input type="hidden" value="true" name="dom_dns" />Adres (url) van site:<br/><br/><input name="addr" onFocus="this.select()" id="text1h" size="45">&nbsp;<input type="submit" value="Zoek" ><br/></form><input type="hidden" id="text2h" />', 'Gegevens van domeinnaam.', 'http://www.centralops.net', 'Zoek gedetailleerde gegevens  over een domeinnaam/website (naam domeinhouder, telefoonnummer, ip-adres, etc).', 'centralops.gif');

a['domain'] = new Array('http://www.quarkbase.com/search', 'q', '', '', '', '', '', '', 'POST', 'http://www.quarkbase.com', 'quarkbase.png', 'Adres (url) van site', '', 'Zoek algemene informatie  over een domeinnaam/website met Quarkbase.');
a['gmail'] = new Array ('', '<form id="zoekformh" onsubmit="return createUrlGm();" method="GET" action="http://mail.google.com/mail/#search/"><input value="" id="text1h" name="q" size="45" type="text"  onFocus="this.select()"> <input value="Zoek" type="submit"><input type="hidden" id="text2h" /></form>', 'Zoek in Gmail', 'http://www.gmail.com', 'Zoek in je Gmail account (als je via Google-mail mailt).', 'gmail.png');

a['postcode'] = new Array('http://www.postcode.nl/index.php', 'address', '', 'action', 'search', 'goto', 'postcoderesult', '', 'GET', 'http://www.postcode.nl/', 'postcode.png', 'Plaats, straat', '', 'Vind een postcode die hoort bij een adres via Postcode.nl. Vul bijvoorbeeld in 1012 NX of Amsterdam, Kalverstraat.');



}

function hideMenu(){
	$(" #nav ul ").css({display: "none"}); 
}

function fillForm()
{
	var hash = location.hash;
	hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
	//fill form
	if ( hash ) {
		if ( changeArr($("a[name$='" + hash + "']").get(0)) ) {
			showDescr($("a[name$='" + hash + "']").get(0));
			return true;
		}
	}
		changeArr($("a[name$='google']").get(0));
		showDescr($("a[name$='google']").get(0));
} 

$(document).ready(function(){	
	mainmenu();

	//preload
	image1 = new Image();
	image1.src = "img/blank.gif";
	
	createArray();

	//add clicks to all menu-items (all a's with a name)
	// $("a[name]").click( function() { return changeArr(this) }).mouseover( function() { return showDescr(this) } ).mouseout(function() { return hideDescr(this) } );
	$("a[name]").click( function() { $.history.load(this.href.replace(/^.*#/, '')); return false; }).mouseover( function() { return showDescr(this); } ).mouseout(function() { return hideDescr(this); } );
	$("a[name]").each(function(index){ var str = $(this).attr('name'); $( this ).attr('href', '#' + str ); });


	//add title to all headmenu-items
	//$("li > a").not("[name]").attr("title", "Selecteer een zoekmachine die het beste past bij uw zoekvraag.").click( function() { return clickHead(this) } );
	$("li > a").not("[name]").click( function() { return clickHead(this); } );

	//get cookies
	text1var = $.cookie('text1var');
	text2var = $.cookie('text2var');

	//IE fills in 'Null' as a value if this is null
	if (text1var === null) { text1var = ''; }
	if (text2var === null) { text2var = ''; }

	$("#text1").val(text1var);
	$("#text2").val(text2var);
	$("#text1h").val(text1var);
	$("#text2h").val(text2var);

	$.history.init(fillForm);

	//set target
	if($.cookie('target')) {
		$("#zoekform").attr('target', "_blank");
		$("#zoekformh").attr('target', "_blank");
		$("#checktarget").attr('checked', 'checked');
	}

	$("#statusbar").html('<img src="img/lichtje.gif" alt="Lichtje" title="lichtje" />Met Zoek+ vind je meer! Zoek eenvoudig in verschillende zoekmachines en met handige zoektrucs. Selecteer in het menu hierboven een zoekmethode die het beste past bij uw zoekvraag.');

	$("#text1").keydown( function() { hideMenu(); });
	$("#text2").keydown( function() { hideMenu(); });
	$("body").click( function() { hideMenu(); });


	$("#text1").focus().select();
	$("#text1h").focus().select();


});

