// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==

//Zoek+ (c) WvW 
// I discovered jQuery when the programming was half done, so I mixed it up a bit...
// Actually, it's quite a mess because it grew....

var timer;
var text1var = '';
var text2var = '';
var olddescr = '';



function changeTarget () {
	if($("#checktarget").attr('checked')) {
		$("#zoekform").attr('target', "zoekplusresultaten");
//		$("#zoekformtop").attr('target', "zoekplusresultaten");
		$.cookie('target', '1', { expires: 365});	
	} else {
		$("#zoekform").attr('target', "");
//		$("#zoekformtop").attr('target', "");
		$.cookie('target', null);
	}
}

function showDescr(elem) {
		if (elem.name) {
			var descr = getDescr(elem.name);
		} else {
			var descr = elem;
		}
		olddescr= $("#statusbar").html();
		$("#statusbar").html('<img src="img/lichtje.gif" alt="Lichtje" title="lichtje" />' + descr);
}

function getDescr(elname) {
  if (a[elname][0] === '') {
		return (a[elname][4]);		
	} else {
		return (a[elname][13]);		
	}
}

function subm(elem) {
	$.cookie('text1var', $("#text1").val() );
	$.cookie('text2var', $("#text2").val() );
	//google analytics
	var hash = location.hash;
	hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
	//check if pageTracker exists, fails with adblock
	if (pageTracker) { pageTracker._trackPageview("/submit/" + hash ) }

	if ($("#zoekform").attr("action").search("{searchTerms}") == -1) {
		return true;
	} else {
		createUrlAlgemeen();
		return false;
	}
}

function createUrlAlgemeen () {
//Based on Open search: http://example.com/?q={searchTerms}&amp;pw={startPage?}&amp;format=rss
		var url = $("#zoekform").attr("action").replace(/{searchTerms}/g, escape($("#text1").val()) ).replace(/{secondValue}/g, escape($("#text2").val()) );
		$.cookie('text1var', $("#text1").val() );
		$.cookie('text2var', $("#text2").val() );
		//google analytics
		var hash = location.hash;
		hash = (hash.substring(0, 1) == '#') ? hash.substring(1) : hash;
		if(pageTracker){pageTracker._trackPageview("/submit/" + hash )}
		if($("#checktarget").attr('checked')) {
			window.open(url, "zoekplusresultaten");
		} else {
			window.document.location = url;
		}
}

function changeArr(elem) {

 if ((!elem) || (!elem.name)) {
	return false;
} 
//google analytics
if(pageTracker){pageTracker._trackPageview("/pages/" + elem.name )}

 var arr = a[elem.name];

  var text1 = $("#text1").val();
  var text2 = $("#text2").val();


	changeForm(elem.firstChild.nodeValue, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9], arr[10], arr[11], arr[12], arr[13], arr[14]);
		$("#text2").select();
	$("#text1").focus().select();

  return true;
}

function changeForm(sitename, action, textbox1name, textbox2name, hidden1name, hidden1value, hidden2name, hidden2value, submitname, method, siteurl, siteimage, textbox1descr, textbox2descr, descr, extrahtml) {
var formdiv = document.getElementById("formdiv");
var htmldiv = document.getElementById("htmldiv");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");

var input2div = document.getElementById("input2div");
var form = document.getElementById("zoekform");



if(textbox1descr == '') { textbox1descr = 'Type hier een zoekterm'; }
if(textbox2descr == '') { textbox2descr = 'Type hier een zoekterm'; }


text1.name = textbox1name;

if(textbox2name) { $("#text2").attr("name", textbox2name); } else { $("#text2").removeAttr("name"); }


$("#spantext1").html(textbox1descr + ':');
$("#spantext2").html(textbox2descr + ':');




$("#searchurl").attr("href", siteurl);
showDescr(descr);

//to fix weird ie8 bug  in  #postcode
$("#searchtitle").html(form.action);
$("#searchtitle").html(makeLower(sitename));

//order is important to fix weird ie8 bug in  #postcode
 form.method = method;
 form.action = action;

$("#hidden1").val(hidden1value);
$("#hidden2").val(hidden2value);

$("#divextrahtml").html(extrahtml);

if (textbox2name === '') {
	input2div.style.display= 'none';
} else {
	input2div.style.display= 'inline';
}

if (!extrahtml) {
	$("#input3div").hide();
} else {
	$("#input3div").show();
}


if(submitname) { $("#submit").attr("name", submitname); } else { $("#submit").removeAttr("name"); }
if(hidden1name) { $("#hidden1").attr("name", hidden1name); } else { $("#hidden1").removeAttr("name"); }
if(hidden2name) { $("#hidden2").attr("name", hidden2name); } else { $("#hidden2").removeAttr("name"); }
	
changeimg(siteimage, makeLower(sitename));


}


function createArray() {

a = new Array();

a['google'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Zoek met Google. Vul eventueel een periode in voor pagina\'s die zijn gemaakt in de afgelopen dag, week, maand of jaar.', 'Periode:<br/><select name="tbs"><option value="qdr:all">Alles</option><option value="qdr:d">Afgelopen 24 uur</option><option value="qdr:w">Afgelopen week</option><option value="qdr:m">Afgelopen maand</option><option value="qdr:y">Afgelopen jaar</option></select>');

a['nws'] = new Array('http://news.google.nl/news/search', 'q', '', 'hl', 'nl', 'as_drrb', 'q', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Vul een woord in dat je wilt opzoeken in het Nederlandse nieuws van de afgelopen tijd, via Google News. Selecteer eventueel een periode.', 'Periode:<br/><select name="tbs"><option value="qdr:all">Alles</option><option value="qdr:d">Afgelopen 24 uur</option><option value="qdr:w">Afgelopen week</option><option value="qdr:m">Afgelopen maand</option><option value="qdr:y">Afgelopen jaar</option></select>');

a['intnws'] = new Array('http://news.google.nl/news/search', 'q', '', 'hl', 'en', 'ned', 'us', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Vul een woord in dat je wilt opzoeken in het Internationale nieuws van de afgelopen tijd, via Google News. Selecteer eventueel een periode.', 'Periode:<br/><select name="tbs"><option value="qdr:all">Alles</option><option value="qdr:d">Afgelopen 24 uur</option><option value="qdr:w">Afgelopen week</option><option value="qdr:m">Afgelopen maand</option><option value="qdr:y">Afgelopen jaar</option></select>');

//http://www.detelefoongids.nl/tg/utrecht/w-jansen/1/
//http://www.detelefoongids.nl/tg/plaats-{secondValue}/w-{searchTerms}/1/?encodedRefinement=city..%3D..^{secondValue}%24..%26..{secondValue}&display=list&listingType=white&dominantCategoryIsLocal=false&nationalSearch=false&regionSearch=false
////http://www.detelefoongids.nl/tg/plaats-{secondValue}/w-{searchTerms}/1/
a['telefoongids'] = new Array('http://www.detelefoongids.nl/tg/plaats-{secondValue}/w-{searchTerms}/1/?encodedRefinement=city..%3D..^{secondValue}%24..%26..{secondValue}&display=list&listingType=white&dominantCategoryIsLocal=false&nationalSearch=false&regionSearch=false', 'what', 'where', 'subsearchtype', 'WHITEPAGES', '', '', '', 'GET', 'http://www.detelefoongids.nl', 'telefoongids.gif', 'Naam (b.v: Jansen, J)', 'Plaats', 'Zoek telefoonnummers en adressen in de telefoongids.nl');

a['exact'] = new Array('http://www.google.nl/search?q=%22{searchTerms}%22', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Zoek op exacte combinatie en volgorde van woorden. Bijvoorbeeld: koninklijk huis. U vindt dan alle pagina\'s met "koninklijk huis", maar niet pagina\'s waarin alleen koninklijk, of alleen huis voorkomen.');

a['eenvan'] = new Array('http://www.google.nl/search', 'as_oq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Vul de \'of\'-zoekwoorden in', '', 'Zoek met \'of\'. Normaal gesproken krijg je alleen resultaten waarin <i>alle</i> ingevoerde woorden voorkomen. Met deze optie krijg je alle pagina\'s met <i>een of meer</i> van de zoekwoorden.');


a['hyves'] = new Array('http://www.hyves.nl/search/?advanced=1&where=&keyword=&search_age=all&searchterms={searchTerms}', 'q', '', '__state__', '1', '', '', '', 'GET', 'http://www.hyves.nl/', 'hyves.gif', 'Naam', 'Plaats', 'Zoek iemand op Hyves.nl. Voer de naam in of naam en woonplaats, b.v. Wouter Utrecht.');

a['opadres'] = new Array('http://www.nummerboek.com/index.php', 'streetname', 'townname', 'search', '1', 'maxrows', '20', '', 'GET', 'http://www.nummerboek.com/index.php', 'nummerboek.png', 'Straat', 'Plaats', 'Zoek op wie er op een bepaald adres woont, of wie er in een straat wonen. Vul adres en plaats in en eventueel een huisnummer. Deze gegevens kunnen verouderd zijn.', '');

a['tomtom'] = new Array('http://routes.tomtom.nl/route/{searchTerms}/{secondValue}/?leave=now&traffic=true&zoom=7&map=basic', 'saddr', 'daddr', '', '', '', '', '', 'GET', 'http://routes.tomtom.nl', 'tomtom.gif', 'Van (adres, plaats)', 'Naar (adres, plaats)', 'Plan een route met de online planner van TomTom.');

a['detailsdomain'] = new Array('http://centralops.net/co/DomainDossier.aspx', 'addr', '', '', '', '', '', 'Adres (url) van de site', 'GET', 'http://www.centralops.net', 'centralops.gif', '', '', 'Zoek gedetailleerde gegevens  over een domeinnaam/website (naam domeinhouder, telefoonnummer, ip-adres, etc).', '<input type="hidden" value="true" name="svc_scan" /><input type="hidden" value="false" name="traceroute" /><input type="hidden" value="true" name="dom_whois" /><input type="hidden" value="true" name="net_whois" /><input type="hidden" value="true" name="dom_dns" />');

a['gmail'] = new Array('https://mail.google.com/mail/#search/{searchTerms}', 'q', '', '', '', '', '', '', 'GET', 'https://mail.google.com', 'gmail.png', '', '', 'Zoek in je Gmail account (als je via Google-mail mailt).', '');

a['binnensite'] = new Array('http://www.google.nl/search', 'q', 'as_sitesearch', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.com/', 'google.gif', 'Zoekwoord(en)', 'Adres (url) van site', 'Doorzoek een specifieke site met Google. Bijvoorbeeld: "Utrecht" op "ad.nl". U vindt dan alleen de artikelen op de site van het AD waarin Utrecht vermeld staat.');
a['related'] = new Array('http://www.google.nl/search', 'as_rq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Adres (url) van pagina of site', '', 'Vind pagina\'s die lijken op een pagina of site.');
a['linkto'] = new Array('http://www.google.nl/search', 'as_lq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Adres (url) van pagina of site', '', 'Vind pagina\'s die verwijzen naar een pagina of site.');

a['pdf'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'pdf', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek documenten in het PDF-bestandsformaat met Google. Vaak worden meer offici&euml;le publicaties in PDF-vorm op het web gezet.');
a['doc'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'doc', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek documenten in het Word-bestandsformaat met Google.  Vaak worden documenten in Word-vorm gepubliceerd. Ook kunnen ze verborgen informatie bevatten.');
a['xls'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'xls', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek spreadsheets in het Excel-bestandsformaat met Google. Excel spreadsheets zijn een interessante bron voor een zoektocht naar cijfers en berekeningen.');
a['ppt'] = new Array('http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'ppt', '', 'GET', 'http://www.google.com/', 'google.gif', '', '', 'Doorzoek Powerpoint-presentaties met Google. Presentaties in Powerpoint bevatten vaak samenvattingen en soortgelijke informatie. Soms bevatten ze interessante details.');
//http://places.tomtom.com/search?tid=NewSearch&what=slager&where=utrecht&searchbutton.x=0&searchbutton.y=0
//http://www.detelefoongids.nl/bg/plaats-utrecht/w-slager/1/?encodedRefinement=city..%3D..^Utrecht$..%26..Utrecht&display=list&listingType=yellow&dominantCategoryIsLocal=false&nationalSearch=false&regionSearch=false
a['bedrijf'] = new Array('http://www.detelefoongids.nl/bg/plaats-{secondValue}/w-{searchTerms}/1/?encodedRefinement=city..%3D..^{secondValue}$..%26..{secondValue}&display=list&listingType=yellow&dominantCategoryIsLocal=false&nationalSearch=false&regionSearch=false', 'wat', 'waar', '', '', '', '', '', 'GET', 'http://www.detelefoongids.nl/bg/', 'telefoongids.gif', 'Bedrijfsnaam of type (b.v. Slager)', '(Straat,) Plaats. Of postcode', 'Zoek een bedrijf in de Gouden Gids. Je kunt zoeken op bedrijfsnaam (Philips) of bedrijfstype (b.v. Bakker of Slager).');
//a['bedrijf'] = new Array('http://places.tomtom.com/search?tid=NewSearch&what={searchTerms}&where={secondValue}', 'wat', 'waar', '', '', '', '', '', 'GET', 'http://places.tomtom.com', 'tomtom.gif', 'Bedrijfsnaam of type (b.v. Slager)', '(Straat,) Plaats. Of postcode', 'Zoek een bedrijf via Tomtom Places. Je kunt zoeken op bedrijfsnaam (Philips) of bedrijfstype (b.v. Bakker of Slager).');

//http://kranten.kb.nl/results
a['oudekranten'] = new Array('http://kranten.kb.nl/results', 'q', '', '', '', '', '', '', 'POST', 'http://kranten.kb.nl/', 'kranten.png', '', '', 'Zoek in oude kranten van 1618 tot 1945 via de Koninklijke Bibliotheek.');

//http://statline.cbs.nl/StatWeb/search/?Q={searchTerms}
a['statline'] = new Array('http://statline.cbs.nl/StatWeb/search/?Q={searchTerms}', 'q', '', '', '', '', '', '', 'GET', 'http://statline.cbs.nl', 'statline.png', '', '', 'Zoek betrouwbare statistieken over Nederland via Statline van CBS.');

a['naam'] = new Array('http://www.gevonden.cc/naam.php', 'lastname', 'townname_i', '', '', '', '', '', 'POST', 'http://www.gevonden.cc/', 'gevonden.png', 'Achternaam (of een deel daarvan)', 'Plaats', 'Zoek een telefoonnummer en adres via Gevonden.cc. Vul daarvoor een naam en een woonplaats in.');
a['optelnr'] = new Array('http://www.nummerboek.com/index.php', 'phonenumber', '', 'search', 'Zoeken', 'maxrows', '20', '', 'GET', 'http://www.nummerboek.com', 'nummerboek.png', 'Telefoonnummer', '', 'Zoek een naam en adres bij een telefoonnummer via Nummerboek.com. Als het nummer bekend is, krijg je een naam en eventueel een adres.'); 
a['gratistel'] = new Array('http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'telefoonnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een gratis telefoonnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in en je krijgt een gratis nummer.');
a['antwoordnummer'] = new Array('http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'antwoordnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een antwoordnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in en je krijgt een antwoordnummer.');
a['pipl'] = new Array('http://www.pipl.com/search/', 'FirstName', 'LastName', '', '', '', '', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'Voornaam', 'Achternaam', 'Zoek meerdere gegevens van een persoon in een keer met pipl.com. Hiermee doorzoek je in een keer in meerdere bronnen (Web, Blogs, Documenten) op internet naar een persoon.');
a['email'] = new Array('http://www.pipl.com/search/', 'Email', '', 'CategoryID', '4', 'Interface', '1', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'E-mailadres', '', 'Zoek op e-mailadres via pipl.com. Als je alleen een e-mailadres weet, kun je die hiermee eventueel vinden.');
a['username'] = new Array('http://www.pipl.com/search/', 'Username', '', 'CategoryID', '5', 'Interface', '1', '', 'GET', 'http://www.pipl.com/', 'pipl.gif', 'Gebruikersnaam (bv. wouter1980)', '', 'Zoek op gebruikersnaam met pipl.com. Als je alleen een gebruikersnaam weet (bijvoorbeeld uit een forum), kun je die hiermee eventueel vinden.');

a['0900'] = new Array('http://www.vraagalex.nl/direct-zoeken-resultaat.html', 'alternatief', '', '', '', '', '', '', 'GET', 'http://www.vraagalex.nl/', 'vraagalex.gif', 'Bedrijfsnaam', '', 'Zoek een alternatief voor betaalde telefoonnummers of een gratis telefoonnummer van een bedrijf via Vraagalex.nl.');
a['adresbijpc'] = new Array('http://www.gevonden.cc/postcode.php', 'postalcode', '', '', '', '', '', '', 'POST', 'http://www.gevonden.cc', 'gevonden.png', 'Postcode', '', 'Zoek namen en adressen bij een postcode via Gevonden.cc.'); 

a['expert'] = new Array('http://www.onderzoekinformatie.nl/nl/oi/nod/expert/search', 'query', '', '', '', '', '', '', 'GET', 'http://www.onderzoekinformatie.nl/', 'oi.gif', 'Naam of trefwoord van onderzoeksgebied', '', 'Zoek een onderzoeker of deskundige uit de universitaire wereld. Te doorzoeken op naam of op trefwoord van onderzoeksgebied');
//a['nieuws'] = new Array('http://news.google.nl', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://news.google.nl', 'google.gif', '', '', 'Vul een woord in dat je wilt opzoeken in het Nederlandse nieuws van de afgelopen tijd, via Google News.');

a['blogs'] = new Array('http://www.google.nl/search', 'q', '', 'tbs', 'blg:1', 'source', 'mog', 'Search', 'GET', 'http://www.google.nl/', 'google.gif', '', '', 'Weblogs zijn goed apart te doorzoeken op actuele berichten. Doorzoek ze met Google Blogs.'); 

a['groups'] = new Array('http://groups.google.com/groups/search', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://groups.google.com/', 'google.gif', '', '', 'Nieuwsgroepen en andere forums op internet zijn apart doorzoekbaar op actuele berichten. Vul een woord in dat je wilt opzoeken via Google Groups.');
a['persberichten'] = new Array('http://www.perssupport.nl/publishingweb/pressrelease/quick-search.do', 'searchText', '', '', '', '', '', '', 'GET', 'http://www.perssupport.nl/', 'anppers.jpg', '', '', 'Persbureau ANP verzamelt persberichten uit allerlei bronnen. Zoek hier in de persberichten via ANP Pers Support');
a['gglvideo'] = new Array('http://video.google.com/videosearch', 'q', '', 'hl', 'nl', 'site', 'video', '', 'GET', 'http://video.google.com/videosearch', 'youtube.gif', '', '', 'Zoek filmpjes in Google Video, Youtube en andere videosites.'); 
a['bingvideo'] = new Array('http://www.bing.com/video/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.bing.com/?scope=video', 'bing.gif', '', '', 'Zoek video\'s in MSN, Hulu, Mtv, MySpace, etc.'); 
//a['yahooimages'] = new Array('http://www.yahoo.com/w/search', 'p', '', 'stype', 'stype=nimage,image,imgfacet', 'fr', 'image', '', 'GET', 'http://www.yahoo.com/images', 'yahoo.gif', '', '', 'Zoek afbeeldingen met Yahoo.');
a['flickr'] = new Array('http://www.flickr.com/search', 'q', '', '', '', '', '', '', 'GET', 'http://www.flickr.com', 'flickr.png', '', '', 'Zoek in foto\'s die op Flickr gepubliceerd zijn.'); 
a['picasa'] = new Array('http://picasaweb.google.com/lh/view', 'q', '', 'p	sc', 'g', '', '', '', 'GET', 'http://picasaweb.google.com/', 'picasa.gif', '', '', 'Zoek in foto\'s die met Picasa gepubliceerd zijn.'); 

a['schoolbank'] = new Array('http://www.schoolbank.nl/person_search.html', 'terms', '', '_a', 'results', '', '', '', 'GET', 'http://www.schoolbank.nl/', 'schoolbank.gif', 'Naam', '', 'Zoek iemand via Schoolbank.nl.');

a['mp3'] = new Array('http://www.google.com/search?q=intitle:%22index+of%22+%22parent+directory%22+%22last+modified%22+{searchTerms}+.mp3+-faq+-site:audiozen.us+-site:www.randombase.com+-site:vmp3.eu+-site:www.mp3fusion.net+-site:www.crazy.nl+-site:www.kthankzbye.com', 'q', '', '', '', '', '', '', 'GET', 'http://opendir.berkery.nl/', 'google.gif', 'Vul naam van band of nummer in', '', 'Zoek op MP3-tjes en andere muziekvormen. Zoek op band of nummer.'); 
a['tvgids'] = new Array('http://www.tvgids.nl/zoeken/', 'q', '', '', '', '', '', '', 'GET', 'http://www.tvgids.nl/', 'tvgids.gif', 'Programmanaam', '', 'Zoek in de televisiegids. Vul een programma in dat je wilt opzoeken.');
a['films'] = new Array('http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'movie', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Titel film', '', 'Zoek films en recensies via cinema.nl.');
a['acteurs'] = new Array('http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'person', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Naam acteur', '', 'Zoek informatie over acteurs via cinema.nl.');
a['bingimages'] = new Array('http://www.bing.com/images/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.bing.com/?scope=images', 'bing.gif', '', '', 'Zoek afbeeldingen met Bing.'); 
a['gglimages'] = new Array('http://www.google.com/search', 'q', '', 'hl', 'nl', 'site', 'images', '', 'GET', 'http://www.google.com/images', 'google.gif', '', '', 'Zoek afbeeldingen met Google.');
a['wikinl'] = new Array('http://nl.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://nl.wikipedia.org', 'wikipedia.png', '', '', 'Zoek een woord of definitie in de Nederlandstalige Wikipedia');
a['wikien'] = new Array('http://en.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://en.wikipedia.org', 'wikipedia.png', '', '', 'Zoek een woord of definitie in de Engelstalige Wikipedia');
a['vandale'] = new Array('http://www.vandale.nl/vandale/zoekService.do?selectedDictionary=nn&selectedDictionaryName=Nederlands&searchQuery={searchTerms}', 'searchQuery', '', 'selectedDictionary', 'nn', 'selectedDictionaryName', 'Nederlands', '', 'GET', 'http://www.vandale.nl', 'vandale.png', 'Vul een woord in', '', 'Zoek een woord in het woordenboek via VanDale.nl.');
a['synoniemen'] = new Array('http://www.synoniemen.net/index.php', 'zoekterm', '', '', '', '', '', '', 'GET', 'http://www.synoniemen.net/', 'synoniemen.png', 'Woord', '', 'Vul een woord in waarvan je een synoniem wilt, via Synoniemen.net.');
a['transl'] = new Array('http://translate.google.nl/translate', 'q', '', 'tl', 'nl', 'sl', 'auto', '', 'GET', 'http://translate.google.nl/translate', 'google.gif', 'Woord(en)', '', 'Vertaal een woord of zin met Google Translate naar het Nederlands.');
a['translpage'] = new Array('http://translate.google.nl/translate', 'u', '', 'tl', 'nl', 'hl', 'nl', '', 'GET', 'http://translate.google.nl/', 'google.gif', 'Adres (url) van pagina of site', '', 'Vertaal een hele site met Google Translate naar het Nederlands.');
a['maps'] = new Array('http://maps.google.nl/maps', 'q', '', 'z', '17', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Straat, Plaats', '', 'Zoek een stad, dorp of een straat via Google Maps. Bijvoorbeeld \'Kalverstraat, Amsterdam\'');

a['route'] = new Array('http://maps.google.nl/maps', 'saddr', 'daddr', '', '', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Van (adres, plaats)', 'Naar (adres, plaats)', 'Zoek een route met Google Maps. Vul twee keer de straat en plaats in.');

a['marktplaats'] = new Array('http://www.marktplaats.nl/nieuw_zoek.php3', 'q', '', 'ts', '1', '', '', '', 'GET', 'http://www.marktplaats.nl/', 'marktplaats.gif', '', '', 'Zoek tweedehands producten via marktplaats.nl');
a['ip'] = new Array('http://www.ipchecking.com/', 'ip', '', '', '', '', '', '', 'GET', 'http://www.ipchecking.com/', 'ipchecking.gif', 'IP-adres of domeinnaam', '', 'Zoek gegevens van een ip-adres of een domeinnaam (de uitkomst is 1 domeinnaam, er kunnen meerdere domeinnamen op 1 adres draaien).');
a['internetarchive'] = new Array('http://web.archive.org/archive_request_ng', 'url', '', 'collection', 'web', '', '', '', 'GET', 'http://web.archive.org', 'archive.gif', 'Adres (url) van pagina of site', '', 'Bekijk een oude, gearchiveerde versie van een site via Archive.org. Hiermee is de ontwikkeling van een site goed te zien.');

//http://webcache.googleusercontent.com/search?q=cache:{searchTerms}
a['googlecache'] = new Array('http://webcache.googleusercontent.com/search?q=cache:{searchTerms}', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://www.google.nl/', 'google.gif', 'Adres (url) van pagina of site', '', 'Bekijk een oude versie van een site via Google Cache.');


a['weer'] = new Array('http://www.weer.nl/nl/home/weer/wereldweer/zoekresultaten.html', 'tx_citysearchgeodb_pi1[sword]', '', 'what', 'WeatherLocalUndeclared', 'lswa', 'WeatherLocalUndeclared', '', 'POST', 'http://www.weer.nl', 'weer.png', 'Plaatsnaam', '', 'Bekijk de weersvoorspelling van een plaats via Weer.nl.');
a['overheid'] = new Array('http://zoekdienst.overheid.nl/Zoekdienst/overheid.nl/overheid', 'term', '', '', '', '', '', '', 'POST', 'http://www.overheid.nl', 'overheid.gif', '', '', 'Zoek binnen diverse bronnen van de overheid (wetten, documenten, persberichten) met Overheid.nl.');
a['bing'] = new Array('http://www.bing.com/search/search.aspx', 'Q', '', 'a', 'results', 'MID', '1', '', 'GET', 'http://www.bing.com', 'bing.gif', '', '', 'Doorzoek het internet met Bing (voorheen Live/MSN).');
//a['yahoo'] = new Array('http://www.yahoo.com/search', 'p', '', '', '', '', '', '', 'GET', 'http://www.yahoo.com/search', 'yahoo.gif', '', '', 'Doorzoek het internet met Yahoo.');
a['wolfram'] = new Array('http://www.wolframalpha.com/input/', 'i', '', '', '', '', '', '', 'GET', 'http://www.wolframalpha.com', 'wolfram.gif', '', '', 'Experimentele vraagmachine (werkt alleen in het Engels).');
a['altavista'] = new Array('http://nl.altavista.com/web/results', 'q', '', '', '', '', '', '', 'GET', 'http://www.altavista.nl', 'altavista.gif', '', '', 'Doorzoek het internet met Alta Vista.');


//http://twitter.com/#!/search/wouter%20bos
a['twitter'] = new Array('http://twitter.com/search?q={searchTerms}', 'q', '', '', '', '', '', '', 'GET', 'http://www.twitter.com', 'twitter.png', 'Zoekterm, #hashtag of @gebruikersnaam', '', 'Doorzoek al het gekwetter op Twitter.');

a['imdb'] = new Array('http://www.imdb.com/find', 'q', '', 's', 'all', '', '', '', 'GET', 'http://www.imdb.com', 'imdb.gif', 'Vul naam film of acteur in, in het Engels', '', 'Zoek filmrecensies of acteurs via the Internet Movie Database (imdb).');

a['ixquick'] = new Array('http://www.ixquick.com/do/metasearch.pl', 'query', '', 'cat', 'web', 'language', 'nederlands', '', 'POST', 'http://www.ixquick.nl/', 'ixquick.gif', '', '', 'Zoek tegelijk in Google, Live, Yahoo, Altavista, Ask, Ilse, etc. Ook handig voor \'prive\'-zoeken, slaat uw IP-adres niet op.');

a['mensnieuws'] = new Array('http://emm.newsexplorer.eu/NewsExplorer/search/nl/entities', 'query', '', '', '', '', '', '', 'GET', 'http://emm.newsexplorer.eu', 'newsexplorer.gif', '', '', 'Zoek mensen in het nieuws met Europ Media Monitor NewsExplorer');

a['gezicht'] = new Array('http://www.facesaerch.com/facesearch/', 'q', '', '', '', '', '', '', 'GET', 'http://www.facesaerch.com/', 'facesaerch.gif', '', '', 'Zoek op gezichten via Facesaerch.');

a['wieowie'] = new Array ('http://www.wieowie.nl/search', 'fullname', '', '', '', '', '', '', 'GET', 'http://www.wieowie.nl/', 'wowlogo.gif', 'Naam', '', 'Zoek meerdere gegevens van een persoon in een keer met wieowie.nl. Hiermee doorzoek je in meerdere bronnen (Google, Hyves, Schoolbank, etc) op internet naar een persoon.');


a['domain'] = new Array('http://www.quarkbase.com/search', 'q', '', '', '', '', '', '', 'POST', 'http://www.quarkbase.com', 'quarkbase.png', 'Adres (url) van site', '', 'Zoek algemene informatie  over een domeinnaam/website met Quarkbase.');
a['postcode'] = new Array('http://www.postcode.nl/index.php', 'address', '', 'action', 'search', 'goto', 'postcoderesult', '', 'GET', 'http://www.postcode.nl/', 'postcode.png', 'Plaats, straat', '', 'Vind een postcode die hoort bij een adres via Postcode.nl. Vul bijvoorbeeld in 1012 NX of Amsterdam, Kalverstraat.');



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
/*
$(document).ready(function(){	

	//preload
	image1 = new Image();
	image1.src = "img/blank.gif";
	
	createArray();

	//add clicks to all menu-items (all a's with a name)
 $("a[name]").click( function() { return changeArr(this) } );


	//get cookies
	text1var = $.cookie('text1var');
	text2var = $.cookie('text2var');

	//IE fills in 'Null' as a value if this is null
	if (text1var === null) { text1var = ''; }
	if (text2var === null) { text2var = ''; }


	//set target
	if($.cookie('target')) {
		$("#zoekform").attr('target', "zoekplusresultaten");
//		$("#zoekformtop").attr('target', "_blank");
		$("#checktarget").attr('checked', 'checked');
	}

	fillForm();

$("#text1").select();
//$("#text1h").select();


});
*/
function clickHead (elem) {
	clearTimeout(timer);
	if( $("#nav ul").is(':visible')) {
		$(" #nav ul ").hide(); 
	} else {
		$(elem).next().show(); 
	}
	return false;
}

function hideDescr() {
		$("#statusbar").html(olddescr);
}
function mainmenu(){
	hideMenu();
	$(" #nav li").mouseover(function(){
			clearTimeout(timer);
			$(' #nav ul ').hide();
			$(this).find('ul:first').show();
	}).mouseout(function(){
		clearTimeout(timer); 
		timer = setTimeout(function() {$(' #nav ul ').hide();}, 500);
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

function setHomePage()
{

	if(navigator.appName == "Microsoft Internet Explorer")
	{
	   document.body.style.behavior='url(#default#homepage)';
   	document.body.setHomePage('http://www.zoekplus.nl');
//google
if(pageTracker){pageTracker._trackPageview("/pages/homeie" )}

	} else {
		window.open("sethome.html");
//google
if(pageTracker){pageTracker._trackPageview("/pages/homeother" )}
		return true;	   
	}

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
		$("#zoekform").attr('target', "zoekplusresultaten");
//		$("#zoekformh").attr('target', "_blank");
		$("#checktarget").attr('checked', 'checked');
	}

	$("#statusbar").html('<img src="img/lichtje.gif" alt="Lichtje" title="lichtje" />Met Zoek+ vind je meer! Zoek eenvoudig in verschillende zoekmachines en met handige zoektrucs. Selecteer in het menu hierboven een zoekmethode die het beste past bij uw zoekvraag.');

	$("#text1").keydown( function() { hideMenu(); });
	$("#text2").keydown( function() { hideMenu(); });
	$("body").click( function() { hideMenu(); });


	$("#text1").focus().select();


});

