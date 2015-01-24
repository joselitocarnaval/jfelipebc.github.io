<?php
	$email 		= $_POST['email'];
	$message   	= $_POST['message']; 
	$name	   	= $_POST['name'];
	$subject    = "Mensaje enviado por: ".$name  
	$to   		= "jfelipebc@outlook.com";
	$from 		= "From: Portafolio - Juan Felipe" 
	$body 		= "From: $name\n E-Mail: $email\n Message:\n $message";

	if ($_POST['submit']) {
	    if (mail ($to, $subject, $body, $from)) { 
	        echo 'Your message has been sent';
	    } else { 
	        echo 'Something went wrong, go back and try again!'; 
	    }
	}
 ?>