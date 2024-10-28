<?php 
/********************************************************************
*    function that reads directory content and
*    returns the result as links to every file in the directory
*    
*    toss it into any directory and get a list of links to every file
*
*       This program is free software licensed under the
*       GNU General Public License (GPL).
*
*********************************************************************/ 
function directory($result) { 
    
     $handle=opendir("."); 
     while ($file = readdir($handle)) { 
     if ( is_dir ($file) || $file == "readme.txt" || $file == "index.php" || $file == "." || $file == "..") { } else { print "<a href=$file>$file</a><br>\n"; }
      
     } 
     closedir($handle); 

return $result; 
} 


		if (file_exists ('readme.txt')) {
            
htmlentities(nl2br(readfile ("readme.txt")));
echo '<br><br>';		}
echo directory($result); 
?> </p>