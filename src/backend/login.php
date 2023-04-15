<?php
require __DIR__ . '../../../vendor/autoload.php';
require "access_control.php";
include "connection.php";
use \Firebase\JWT\JWT;


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";

        $result = $db_conn->query($sql);

        if ($result->num_rows > 0) {
            // Login bem-sucedido
            $user = $result->fetch_assoc();
            $payload = array(
                'id' => $user['id'],
                'nome' => $user['nome'],
                'email' => $user['email']
            );
            $secret_key = "123"; // Substitua pela sua própria chave secreta
            $expiration_time = 3600; // Tempo de expiração do token (em segundos)
            $token = JWT::encode($payload, $secret_key, 'HS256');

            // Define o cookie com o token JWT
            setcookie("jwt", $token, time() + $expiration_time, '/', '', false, true);

            // Retorna uma resposta de sucesso com o token JWT
            $res = array('status' => 'OK', 'token' => $token);
            echo json_encode($res);
        } else {
            // E-mail ou senha inválidos
            $res = array('status' => 'erro', 'mensagem' => 'E-mail ou senha inválidos');
            echo json_encode($res);
        }
    } else {
        // Parâmetros de entrada ausentes
        $res = array('status' => 'erro', 'mensagem' => 'Parâmetros de entrada ausentes');
        echo json_encode($res);
    }
}
?>