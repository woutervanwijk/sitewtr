function findNextNode(root, nodeType) {
	var e = root;
	do {
		e = e.nextSibling;
	} while(e && e.nodeType != nodeType);
	return(e);
}

function findA (root) {
	var e = root;
	do {
		e = e.nextSibling;
		alert(e.type);
	} while(e && e.type != 'a');
	return(e);
}

/*wvw*/
function start() {
//changeHtml('<form action="http://www.google.nl/cse" id="cse-search-box"><div><input type="hidden" name="cx" value="partner-pub-5457839548366721:bnyj78-tfez" /><input type="hidden" name="ie" value="ISO-8859-1" /><input type="text" name="q" size="31" id="text1" /><input type="submit" name="sa" value="Zoeken" /></div></form><script type="text/javascript" src="http://www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=nl"></script>', 'Google', 'http://www.google.nl', 'Doorzoek het internet met Google.', 'google.gif' );
changeForm('met Google', 'http://www.google.nl/search', 'q', '', 'hl', 'nl', '', '', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Doorzoek het internet met Google.')
}

function telefoongids() {
changeHtml('<iframe height="140" width="300" src="http://static.detelefoongids.nl/zoekbox/DTG_300x130_YP0WP1WS0.html?edsacid=3PCK-undefined--300x130YP0WP1WS0" frameborder="0" scrolling="no"><a href="http://www.detelefoongids.nl">De Telefoongids, Bedrijvengids, telefoonnummer</a></iframe>', 'Telefoongids', 'http://www.detelefoongids.nl', 'Zoek in de telefoongids', '');
}

function opdatum() {
changeHtml('<form method="GET" action="http://www.google.nl/search"><input value="" name="as_q" size="45" type="text"><br/><br/><select name="as_qdr"><option value="all">op een willekeurig moment</option><option value="d">afgelopen 24 uur</option><option value="w">afgelopen week</option><option value="m">afgelopen maand</option><option value="y">in het afgelopen jaar</option></select><br/><br/><input name="btnG" value="Zoek" type="submit"></form>', 'Google op datum', 'http://www.google.nl', 'Vul zoekwoorden in en selecteer een periode:', 'google.gif');
}

function opadres() {
changeHtml('<form action="http://www.gevonden.cc/adres.php" method="get">Straat: &nbsp;<input type="text" name="streetname_i" size="30" /> Nummer: <input type="text" name="housenumber" size="4" /><br/><br/>Plaats: <input type="text" name="townname_i" size="30" /><br/><br/><input value="Zoek" type="submit"></form>', 'naam en nummer bij adres', 'http://www.gevonden.cc', 'Vul adres en plaats in en eventueel een huisnummer:', 'gevonden.png');
}

function createCookies(namesandvalues, days)
{
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name)
{
  var ca = document.cookie.split(';');
  var nameEQ = name + "=";
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length); //delete spaces
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
  return null;
}

function subm()
{
//not working perfectly, only in FF
	var form = document.getElementById("zoekform")
	var text1 = document.getElementById("text1")
	var text2 = document.getElementById("text2")
	if (form.method == '') {
// <!--  onsubmit="location.href='http://www.hyves.nl/search/?#'+$F('searchhyver')+'/'; return false;" -->
		url = form.action + text1.name + '='+ text1.value + '&' + text2.name + '='+ text2.value
//		form.action=url
//		form.action=''
//		form.method='GET'
//		form.method=''
//		alert(url + ' - ' + window.location)
//		document.location = url
		window.document.location.href = url
//		return true;
	} else {
		return true;
	}
}

function changeimg(url) {
var image = document.getElementById("image")

 if (url != '') {
//  h = image.height;
//  w = image.width;
  image.src = 'img/blank.gif';
//  image.height = h;
//  image.width = w;
  
  
  //preload
  image1 = new Image();
  image1.src = 'img/' + url;
  
  image.src = 'img/' + url 
  } else {
	image.src = 'img/blank.gif';
  }
}

function changeHtml(html, sitename, siteurl, descr, siteimage) {
var formdiv = document.getElementById("formdiv")
var htmldiv = document.getElementById("htmldiv")

var searchurl = document.getElementById("searchurl")
searchurl.href = siteurl

var searchtitle = document.getElementById("searchtitle")
searchtitle.firstChild.nodeValue = sitename

var description = document.getElementById("descr")
description.firstChild.nodeValue = descr

changeimg(siteimage)

formdiv.style.display= 'none'
htmldiv.style.display= 'block'

htmldiv.innerHTML = html;
}

function changeForm(sitename, action, textbox1name, textbox2name, hidden1name, hidden1value, hidden2name, hidden2value, submitname, method, siteurl, siteimage, textbox1descr, textbox2descr, descr) {

//createCookies(sitename, action, textbox1name, textbox2name, hidden1name, hidden1value, hidden2name, hidden2value, submitname, method, siteurl, siteimage, textbox1descr, textbox2descr, descr)


var formdiv = document.getElementById("formdiv")
var htmldiv = document.getElementById("htmldiv")
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var submitbt = document.getElementById("submit")
var form = document.getElementById("zoekform")
text1.name = textbox1name
text2.name = textbox2name
if (textbox2name == '') {
	text2.style.display= 'none'
} else {
	text2.style.display= 'block'
}
//text1.value=""
submitbt.name = submitname
 form.action=action

 form.method=method

var hidden1 = document.getElementById("hidden1")
var hidden2 = document.getElementById("hidden2")
var hidden3 = document.getElementById("hidden3")
var hidden4 = document.getElementById("hidden4")
hidden1.value= hidden1value
hidden2.value= hidden2value
hidden1.name= hidden1name
hidden2.name= hidden2name

var searchurl = document.getElementById("searchurl")
searchurl.href = siteurl
var searchtitle = document.getElementById("searchtitle")
searchtitle.firstChild.nodeValue = 'Zoek ' + sitename


var text1description = document.getElementById("text1descr")
var text2description = document.getElementById("text2descr")
var description = document.getElementById("descr")
description.firstChild.nodeValue = descr

//create child if it doesnt exist. not needed for others.  if ( textbox2descr == '' ) { textbox2descr = '&nbsp; '} 
if (!text2description.firstChild) { text2description.createChild }
text2description.firstChild.nodeValue = textbox2descr
text1description.firstChild.nodeValue = textbox1descr

formdiv.style.display= 'block'
htmldiv.style.display= 'none'

changeimg(siteimage)

text1.focus()
text1.select()

}
/*wvw*/

