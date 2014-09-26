<?php
	echo file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/components/".$_POST['page'].".html", false);	
?>