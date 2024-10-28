<?php 
/*
function CSV2Array($content, $delim = ';', $encl = '"', $optional = 1) {
   if ($content[strlen($content)-1]!="r" && $content[strlen($content)-1]!="n")
       $content .= "rn";

   $reg = '/(('.$encl.')'.($optional?'?(?(2)':'(').
           '[^'.$encl.']*'.$encl.'|[^'.$delim.'rn]*))('.$delim.
           '|rn)/smi';

   preg_match_all($reg, $content, $treffer);
   $linecount = 0;

   for ($i = 0; $i<=count($treffer[3]);$i++) {
       $liste[$linecount][] = $treffer[1][$i];
       if ($treffer[3][$i] != $delim)
           $linecount++;
   }
   unset($linecount);
   unset($i);
   unset($reg);
   unset($content);
   unset($delim);
   unset($encl);
   unset($optional);
   unset($treffer);

   return $liste;
} --> */
   function csv2array($file, $titles=true)
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
        $titles = array_map('trim', explode(',',$lines[0]));
        unset($lines[0]);
    }
    else 
    {
        $titles = range(0, count(explode(',', $lines[0]), 1));
    }
    $return = array();
    foreach($lines as $key => $line)
    {
        $peices = array_map('trim', explode(',', $line));
        for($i=0;$i<count($peices);$i++)
        {
            $k = $i;
            while(substr_count($peices[$k], '"') % 2 === 1)
            {
                $peices[$k] = $peices[$k] . ',' . $peices[$i + 1];
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
} ?>