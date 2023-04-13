<?php

include "acess_control.php";
include "connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";

        $result = $db_conn->query($sql);

        if ($result->num_rows > 0) {
            // Login bem-sucedido
            $res = array('status' => 'OK');
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