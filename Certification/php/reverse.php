<?php
if (isset($_POST['input'])) {
	
 	$string = $_POST['input'];
 	
 	echo strrev($string);
}
echo "<strong>loading ok</strong>";
?>