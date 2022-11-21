<?php
    $connection = new mysqli("localhost","root","","crud-ajax-empresas");

    // Check connection
    if (mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_errno();
      exit();
    }
?>