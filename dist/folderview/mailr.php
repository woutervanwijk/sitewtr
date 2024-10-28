<?
//error_reporting(0);
//ini_set('display_errors',2); 
//error_reporting(2);

//echo $_POST["jaja"];
if ($_POST["jaja"] != '123') { die ('Message not sent. Please read the descriptions.'); }
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
<html><head><title>Message send</title>
  <style type="text/css" media="screen" title="Folder">
    @import url(style.css);
  </style>
  <meta content="text/html; charset=iso-8859-1"
 http-equiv="content-type" />
  <meta content="true" name="MSSmartTagsPreventParsing" />
</head>
<body>
<h3>Message send</h3>
Your message was sent. Thanks for your input.<br /><br />
<a href="index.html">Back to the Folder View homepage</a>
</body></html>
