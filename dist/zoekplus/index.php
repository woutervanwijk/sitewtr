<?php 
/*   function csv2array($file, $titles=true)
{
    if(!file_exists($file) || !is_readable($file))
    {
        return false;
    }
    $file = file_get_contents($file);
    $file = preg_replace("/(\r\n|\r|\n\n)/ms", "\n", $file);
    $lines = explode("\n", $file);
    if($titles)
    {
        $titles = array_map('trim', explode(';',$lines[0]));
        unset($lines[0]);
    }
    else 
    {
        $titles = range(0, count(explode(';', $lines[0]), 1));
    }
    $return = array();
    foreach($lines as $key => $line)
    {
        $peices = array_map('trim', explode(';', $line));
        for($i=0;$i<count($peices);$i++)
        {
            $k = $i;
            while(substr_count($peices[$k], '"') % 2 === 1)
            {
                $peices[$k] = $peices[$k] . ';' . $peices[$i + 1];
                $i++;
                unset($peices[$i]);
            }
        }
        reset($peices);
        foreach($peices as $column => $peice)
        {
            $return[$titles[$column]][$key] = $peice;
        }
    }
    return $return;
} */

//function CSV2Array($content, $delim = ';', $encl = '"', $optional = 1) {
function CSV2Array($file, $delimiter = ';', $enclosure = '"') // met headers
{
   $result = Array();
   $size = filesize($file) +1;
   $file = fopen($file, 'r');
   $keys = fgetcsv($file, $size, $delimiter, $enclosure);
   while ($row = fgetcsv($file, $size, $delimiter))
   {
       for($i = 0; $i < count($row); $i++)
       {
           if(array_key_exists($i, $keys))
           {
               $row[$keys[$i]] = $row[$i];
           }
       }
       $result[] = $row;
   }
   fclose($file);
return $result;

}
?>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html>
<head> 
  <meta http-equiv="imagetoolbar" content="no" />
  <meta content="true" name="MSSmartTagsPreventParsing" />

  <link href="src.ico" rel="shortcut icon" />
  <link href="src.ico" rel="icon" />

<script type="text/javascript" src="simpletreemenu.js">
//********
//Simple Tree Menu- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
//Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
//*********/

</script>

<script type="text/javascript">
searcharray = new Array();

<?php 
# create PHP array:
$php_array = array();
#read csv
$php_array = CSV2Array ('index.csv', '"');
# "pass" php array to JS array:


foreach ($php_array as $key => $value) {
	foreach($php_array[$key] as $key2 => $value2)
	{
		$value2 = trim ($value2);
		if ($value2 != "" ) {
			echo "searcharray[$key2] = $value2;\n";
		}
	}
}
?>

</script>

<link rel="stylesheet" type="text/css" href="simpletree.css" />

<title>Zoekindex</title>

</head>
<body>
<?php
var_dump ($php_array);

?>
<div id="tree">
<!-- <a href="javascript:ddtreemenu.flatten('treemenu1', 'expand')">+</a> | <a href="javascript:ddtreemenu.flatten('treemenu1', 'contact')">-</a>
-->
<ul id="treemenu1" class="treeview">
<li>Algemeen
	<ul rel="open">
		<li><a href="#" onclick="start(); return true;">met Google</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'q', 'as_sitesearch', 'hl', 'nl', '', '', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoekwoord', 'Webadres van site', 'Doorzoek een specifieke site met Google.'); return true;">in een specifieke site</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'as_epq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Exacte woordcombinatie:', '', 'Zoek op exacte combinatie en volgorde van woorden. Bijvoorbeeld: koninklijk huis'); return true;">exacte woordcombinatie en -volgorde</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'as_oq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Een van de woorden:', '', 'Zoek op een van de woorden met Google. Normaal gesproken geeft Google alleen resultaten waarin alle woorden voorkomen, hierbij waarin een van de woorden voorkomt. Bijvoorbeeld: dit dat'); return true;">een van de woorden</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.technorati.com/query.php', 'q', '', 'type', 'search', '', '', 'Search', 'POST', 'http://www.technorati.com', 'technorati.gif', 'Zoeken', '', 'Doorzoek blogs met Technorati.'); return true;">in blogs</a></li> 
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://groups.google.com/groups/search', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://groups.google.com/', 'google.gif', 'Zoekwoord:', '', 'Vul een woord in dat je wilt opzoeken in nieuwsbroepen via Google Groups.'); return true;">in nieuwsfora</a></li>

		<li>Meer...
		<ul rel="closed">
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://search.live.com/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.live.nl', 'live.gif', 'Zoeken', '', 'Doorzoek het internet met Live.'); return true;">met Live</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://nl.search.yahoo.com/search', 'p', '', '', '', '', '', '', 'GET', 'http://nl.yahoo.com/', 'yahoo.gif', 'Zoeken', '', 'Doorzoek het internet met Yahoo.'); return true;">met Yahoo</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'pdf', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Doorzoek PDF documenten met Google.'); return true;">PDF documenten</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'doc', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Doorzoek Word documenten met Google.'); return true;">Word documenten</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'xls', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Doorzoek Excel documenten met Google.'); return true;">Excel documenten</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'q', '', 'hl', 'nl', 'as_filetype', 'ppt', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Doorzoek Powerpoint documenten met Google.'); return true;">Powerpoint documenten</a></li>
		</ul>
		</li>
	</ul>
</li>
	
<li>Contactgegevens
	<ul rel="open">
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.gevonden.cc/naam.php', 'lastname', 'townname_i', '', '', '', '', '', 'POST', 'http://www.gevonden.cc/', 'gevonden.png', 'Naam', 'Stad', 'Zoek een nummer via Gevonden.cc.'); return true;">nummer en adres bij naam</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.gevonden.cc/telefoonnummer.php', 'phonenumber', '', '', '', '', '', '', 'POST', 'http://www.gevonden.cc', 'gevonden.png', 'Nummer', '', 'Zoek een naam en adres bij een nummer via Gevonden.cc.'); return true;">naam en adres bij nummer</a></li> 
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.gevonden.cc/adres.php', 'streetname_i', 'townname_i', '', '', '', '', '', 'POST', 'http://www.gevonden.cc/', 'gevonden.png', 'Straatnaam (zonder nummer)', 'Stad', 'Zoek een persoon op een adres via Gevonden.cc.'); return true;">naam en nummer bij adres</a></li>

		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.hyves.nl/search/?#', 'searchhyver', '', '', '', '', '', '', '', 'http://www.hyves.nl', 'hyves.png', 'Naam', '', 'Zoek iemand op Hyves.nl. Voer de naam in of naam en woonplaats, b.v. Wouter Amsterdam. Werkt nu nog alleen in Firefox'); return true;">naam op Hyves</a></li> 
		
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.gevonden.cc/postcode.php', 'postalcode', '', '', '', '', '', '', 'POST', 'http://www.gevonden.cc', 'gevonden.png', 'Nummer', '', 'Zoek namen en adressen bij een postcode via Gevonden.cc.'); return true;">naam en adressen bij postcode</a></li> 
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.domaintools.com/go/', 'q', '', 'service', 'whois', '', '', '', 'GET', 'http://www.domaintools.com/', 'domaintools.png', 'Domeinnaam:', '', 'Vul een (deel van) domeinnaam in je wilt opzoeken via domaintools.'); return true;">gegevens bij domeinnaam</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.google.nl/search', 'as_epq', '', '', '', '', '', '', 'GET', 'http://www.google.nl', 'google.gif', 'Gegevens:', '', 'Type de volledige de volledige naam of de straatnaam met huisnummer.'); return true;">algemeen op naam of adres</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.wieowie.nl/zoeken.php', 'voornaam', 'achternaam', 'extern', '1', '', '', '', 'GET', 'http://www.wieowie.nl/', 'wowlogo.gif', 'Voornaam', 'Achternaam', 'Meerdere gegevens via Wieowie.nl.'); return true;">in meerdere sites tegelijk</a></li>
	</ul>
</li>

<li>Bedrijven
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.ilocal.nl/WebSearchServlet', 'iqk1', 'iqk3', 'tid', 'NewSearch', 'iqk2', 'not member', '', 'GET', 'http://www.ilocal.nl', 'ilocal.png', 'Bedrijfsnaam of type (b.v. Slager)', 'Plaatsnaam of postcode', 'Zoek een bedrijf via ilocal.nl. Vul de bedrijfsnaam of bedrijfstype in.'); return true;">bedrijf</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'telefoonnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een gratis telefoonnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in.'); return true;">gratis telefoonnummer</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.0900alternatieven.nl/index.php?ga=Zoek%20Alternatief', 'zoekwoord', '', '', '', '', '', '', 'POST', 'http://www.0900alternatieven.nl/', '0900.png', 'Bedrijfsnaam:', '', 'Zoek een alternatief voor betaalde telefoonnummers via 0900alternatieven.nl. Vul een bedrijfsnaam in.'); return true;">alternatief voor 0900 nummer</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.antwoordnummer.nl/zoeken.php', 'zoek', '', 'zoeken', 'antwoordnummer', '', '', '', 'GET', 'http://www.antwoordnummer.nl', 'antwoordnummer.gif', 'Bedrijfsnaam', '', 'Zoek een antwoordnummer van een bedrijf via Antwoordnummer.nl. Vul de bedrijfsnaam in.'); return true;">antwoordnummer</a></li>
		</ul>
</li>

<li>Taal
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.vandale.nl/opzoeken/woordenboek/', 'zoekwoord', '', '', '', '', '', '', 'GET', 'http://www.vandale.nl', 'vandale.gif', 'Woord:', '', 'Vul een woord in dat je wilt opzoeken via VanDale.nl.'); return true;">in NL woordenboek</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.synoniemen.net/index.php', 'zoekterm', '', '', '', '', '', '', 'GET', 'http://www.synoniemen.net/', 'synoniemen.png', 'Woord:', '', 'Vul een woord in waarvan je een synoniem wilt via Synoniemen.net.'); return true;">synoniemen</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://translate.google.nl/translate_t', 'text', '', 'tl', 'nl', 'sl', 'auto', '', 'POST', 'http://translate.google.nl/', 'google.gif', 'Woord(en):', '', 'Vul het woord in dat met Google Translate vertaald moet worden.'); return true;">woorden naar NL</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://translate.google.nl/translate', 'u', '', 'tl', 'nl', 'hl', 'nl', '', 'GET', 'http://translate.google.nl/', 'google.gif', 'Adres:', '', 'Vul het adres in van de door Google Translate te vertalen site.'); return true;">vertaal webpagina in NL</a></li>
	</ul>
</li>

<li>Multimedia
	<ul>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://video.google.com/videosearch', 'q', '', 'hl', 'nl', '', '', '', 'GET', 'http://video.google.com/', 'youtube.gif', 'Zoeken', '', 'Zoek filmpjes in Youtube en Google Video.'); return true;">Video (Youtube, Google, etc)</a></li> 

			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://search.live.com/video/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.live.com/?scope=video', 'live.gif', 'Zoeken', '', 'Zoek video\'s in Youtube, MSN, Hula, etc.'); return true;">Video (MSN, Hulu, Myspace, etc)</a></li> 

			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://search.live.com/images/results.aspx', 'q', '', '', '', '', '', '', 'GET', 'http://www.live.com/?scope=images', 'live.gif', 'Zoeken', '', 'Zoek afbeeldingen met Live.'); return true;">Afbeeldingen (Live)</a></li> 

			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.flickr.com/search', 'q', '', '', '', '', '', '', 'GET', 'http://www.flickr.com', 'flickr.png', 'Zoeken', '', 'Zoek fotos in Flickr.'); return true;">Fotos (Flickr)</a></li> 

			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://picasaweb.google.com/lh/view', 'q', '', '', '', '', '', '', 'GET', 'http://picasaweb.google.com/', 'picasa.gif', 'Zoeken', '', 'Zoek fotos in Picasa.'); return true;">Fotos (Picasa)</a></li> 

			<li>Meer...
		<ul rel="closed">
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://images.google.nl/images', 'q', '', 'hl', 'nl', '', '', 'btnG', 'GET', 'http://www.google.com/', 'google.gif', 'Zoek op', '', 'Zoek afbeeldingen met Google.'); return true;">Afbeeldingen (Google)</a></li>
			<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://nl.images.search.yahoo.com/search/images', 'p', '', '', '', '', '', '', 'GET', 'http://nl.images.search.yahoo.com/', 'yahoo.gif', 'Zoeken', '', 'Zoek afbeeldiongen met Yahoo.'); return true;">Afbeeldingen (Yahoo)</a></li>
		</ul>
		</li>

	</ul>
</li>

<li>Naslag
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://nl.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://nl.wikipedia.org', 'wikipedia.png', 'Trefwoord', '', 'Zoek een woord in de wikipedia.org'); return true;">Wikipedia [NL]</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://en.wikipedia.org/wiki/Special:Search', 'search', '', '', '', '', '', '', 'GET', 'http://en.wikipedia.org', 'wikipedia.png', 'Trefwoord', '', 'Zoek een woord in de wikipedia.org'); return true;">Wikipedia [ENG]</a></li>
	</ul>
</li>

<li>Locatie &amp; reis
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://maps.google.nl/maps', 'q', '', 'z', '17', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Plaats:', '', 'Vul de plaats en eventueel straat in die je wilt opzoeken via Google Maps. Bijvoorbeeld \'Kalverstraat, Amsterdam\''); return true;">Kaart en satelliet (Google Maps)</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://maps.live.com/default.aspx', 'where1', '', 'style', 'b', '', '', '', 'GET', 'http://maps.live.com', 'live.gif', 'Plaats', '', 'Vul plaats en eventueel straat in om met vogelblikperspectief te zien in Live Maps. Bijvoorbeeld \'Domplein, Utrecht\'. Er zijn niet van alle plaatsen in Nederland foto\'s beschikbaar.'); return true;">Satellietbeeld van schuin boven</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://maps.google.nl/maps', 'saddr', 'daddr', '', '', '', '', '', 'GET', 'http://maps.google.nl', 'google.gif', 'Van:', 'Naar:', 'Vul twee keer de straat en plaats in die je wilt opzoeken via Google Maps'); return true;">Route</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.plaats.nl/', 'countrySearchLocation', '', '', '', '', '', '', 'POST', 'http://www.plaats.nl', 'plaats.jpg', 'Plaats of postcode:', '', ' Vul de cijfers van een postcode in, of de plaatsnaam, gemeentenaam of provincie om te zoeken via plaats.nl:'); return true;">Regio</a></li>
	</ul>
</li>

<li>Nieuws
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://news.google.nl', 'q', '', '', '', '', '', 'zoek', 'GET', 'http://news.google.nl', 'google.gif', 'Zoekwoord:', '', 'Vul een woord in dat je wilt opzoeken in het nieuws via Google News.'); return true;">Nederlands nieuws</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://news.google.com', 'q', '', 'hl', 'en', '', '', 'zoek', 'GET', 'http://news.google.com', 'google.gif', 'Zoekwoord:', '', 'Vul een woord in dat je wilt opzoeken in het nieuws via Google News.'); return true;">Internationaal nieuws</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.perssupport.nl/publishingweb/pressrelease/quick-search.do', 'searchText', '', '', '', '', '', '', 'GET', 'http://www.perssupport.nl/', 'anppers.gif', 'Zoekwoord:', '', 'Vul een zoekwoord in dat je wilt opzoeken via ANP Pers Support'); return true;">Persberichten</a></li>
<!--		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.persberichten.com/persberichtfilter.aspx', 'q', '', 'as_sitesearch', 'persberichten.com', '', '', '', 'GET', 'http://www.persberichten.com/', '.gif', 'Zoekwoord:', '', 'Vul een zoekwoord in dat je wilt opzoeken via persberichten.com'); return true;">Persberichten</a></li> -->
	</ul>
</li>
	
<li>TV &amp; Film
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.tvgids.nl/zoeken/', 'q', '', '', '', '', '', '', 'GET', 'http://www.tvgids.nl/', 'tvgids.gif', 'Programmanaam:', '', 'Vul een programma in dat je wilt opzoeken '); return true;">TV Gids</a></li>
				<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.uitzendinggemist.nl/index.php/search?asd', 'sq', '', '', '', '', '', '', 'GET', 'http://www.uitzendinggemist.nl/', 'uitzendinggemist.gif', 'Programmanaam:', '', 'Vul een programma in dat je wilt opzoeken in Uitzendinggemist'); return true;">Uitzendinggemist</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'movie', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Filmterm:', '', 'Vul een film in die je wilt opzoeken met cinema.nl.'); return true;">Film</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.cinema.nl/zoeken/', 'query', '', 'resultType', 'person', '', '', '', 'GET', 'http://www.cinema.nl/', 'cinema.gif', 'Filmterm:', '', 'Vul een acteur in die je wilt opzoeken met cinema.nl.'); return true;">Acteurs</a></li>
	</ul>
</li>

<li>Internet
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.ipchecking.com/', 'ip', '', '', '', '', '', '', 'GET', 'http://www.ipchecking.com/', 'ipchecking.png', 'IP-adres of domeinnaam:', '', 'Vul het ip-adres of de domeinnaam in (de uitkomst is 1 domeinnaam, er kunnen meerdere domeinnamen op 1 adres draaien).'); return true;">Gegevens IP-adres en domeinnaam</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://web.archive.org/archive_request_ng', 'url', '', 'collection', 'web', '', '', '', 'GET', 'http://web.archive.org', 'archive.gif', 'Woord:', '', 'Vul het adres van de site in'); return true;">Oude versie van een site</a></li>
	</ul>
</li>
			
<li>Overig
	<ul>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://zoekdienst.overheid.nl/Zoekdienst/overheid.nl/overheid', 'term', '', '', '', '', '', '', 'POST', 'http://www.overheid.nl', 'overheid.png', 'Woord:', '', 'Vul een naam in of een zoekterm'); return true;">Overheid.nl</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.postcode.nl/index.php', 'address', '', 'action', 'search', 'goto', 'postcoderesult', 'search', 'GET', 'http://www.postcode.nl', 'postcode.png', 'Stad, straat:', '', 'Vul een postcode of een stad en straat in via Postcode.nl, bijvoorbeeld: 1012 NX of Amsterdam, Kalverstraat.'); return true;">Postcode</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.weer.nl/nl/home/weer/wereldweer/zoekresultaten.html', 'tx_citysearchgeodb_pi1[sword]', '', 'what', 'WeatherLocalUndeclared', 'lswa', 'WeatherLocalUndeclared', '', 'POST', 'http://www.weer.nl', 'weer.png', 'Plaatsnaam (, land):', '', 'Vul een plaatsnaam in waarvan je het weer wilt opzoeken met weer.nl, eventueel gevolgd door een komma en een land.'); return true;">Het Weer</a></li>
		<li><a href="#" onclick="changeForm(this.firstChild.nodeValue, 'http://www.marktplaats.nl/nieuw_zoek.php3', 'q', '', '', '', '', '', '', 'GET', 'http://www.marktplaats.nl/', 'marktplaats.png', 'Product:', '', 'Vul een product in dat je wilt opzoeken op marktplaats'); return true;">Spullen (Marktplaats)</a></li>
	</ul>
</li>

</li></li>
</ul>
</div>

<div id="right">

 <div id="righttop">
		<h2><a href="http://" target="_blank" id="searchurl"><img id="image" /><br/><span id="searchtitle">&nbsp;</span></a></h2>

<p id="descr" class="description">&nbsp;</p>

	<div id="htmldiv">&nbsp;
	</div>
  
	<div id="formdiv">
	<form name="zoekform" id="zoekform" onsubmit="return subm();" action="" method="">
		<input type="hidden" id="hidden1" />
		<input type="hidden" id="hidden2" />
		<input type="hidden" id="hidden3" />
		<input type="hidden" id="hidden4" />
		<p id="text1descr" >&nbsp;</p>
		<input name="q" type="text" id="text1" size="45" onFocus="this.select()" /><br />
		<br />
		<p id="text2descr" > &nbsp;</p>
		<input type="text" size="45" id="text2" style="display:none;" onFocus="this.select()" />
		<input id="submit" value="Zoek" type="submit" /><br />
	</form>
	</div>
 </div>
<h1>Zoekindex <sup>&alpha;</sup></h1>

<div>

<script type="text/javascript">
ddtreemenu.createTree("treemenu1", true);
start();
var text1 = document.getElementById("text1")
text1.select()
text1.focus()
</script>

</body>
</html>
