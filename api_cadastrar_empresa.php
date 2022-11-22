<?php
  include "bd.php";

  $nome = mysqli_real_escape_string($connection, $_POST['nome']);
  $email = mysqli_real_escape_string($connection, $_POST['email']);
  $endereco = mysqli_real_escape_string($connection, $_POST['endereco']);
  $telefone = mysqli_real_escape_string($connection, $_POST['telefone']);

  echo "<pre>";
  printf($nome);
  echo "<br><br>";
  printf($email);
  echo "<br><br>";
  printf($endereco);
  echo "<br><br>";
  printf($telefone);
  echo "</pre>";
  // exit();

  /* Returning a JSON object with the value of 'OK' */
  // echo json_encode('OK');

?>
