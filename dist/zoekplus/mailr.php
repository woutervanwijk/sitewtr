<?
if ($_POST["jaja"] != '123') { die ('Bericht niet verstuurd. Lees aub de beschrijvingen. <a href="#" onClick="history.back();return false;">Ga terug</a>'); }
$mailto = "woutervanwijk@gmail.com";
$os = $_POST["os"];
$message = $_POST["message"];
$name = $_POST["name"];
$message = str_replace("&","\n\n",$message);
$email=$_POST["email"];
$a = "$message\n\n$name\n\n$email\n\n$os\n";

mail($mailto,$_POST["subject"],$a, "From: $email\r\n");
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

<link rel="stylesheet" type="text/css" href="zoek.css" />

<title>Bericht verstuurd</title>

</head>
<body>

<div >

<h3>Bericht verstuurd</h3>
Bedankt voor uw bericht.<br /><br />
<a href="/">Ga terug</a>
</body></html>
