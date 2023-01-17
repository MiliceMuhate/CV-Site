<?php
  //pegar os valores do formulario
   $email = $_POST["email"];
   $senha = $_POST["senha"];

  //Conectar a BD e verificaar se o usuariao esta cadastrado
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "sgcomercial";

try {
   $conn = new PDO("mysql:host = $servername; dbname = $dbname", $username, $password);
   $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   $consulta = $conn->prepare("SELECT * FROM $dbname.usuarios WHERE email=:email AND senha = md5(:senha)");
   $consulta -> bindParam(':email', $email, PDO::PARAM_STR);
   $consulta -> bindParam(':senha', $senha, PDO::PARAM_STR);
   $consulta->execute();

   // Converter o array resultante num array associativo
   $result = $consulta->fetchAll();
   $qtdUsuarios = count($result);
   if($qtdUsuarios == 1){
      include("Usuario.php");
   }else if($qtdUsuarios == 0){
      $resultado["msg"] = "Usuario desconhecido";
      $resultado["cod"] = 0;
      
   }
} catch (PDOException $e) {
   echo "Falha na conexao a Base de dados".$e ->getMessage();
}

$conn=null;
?>