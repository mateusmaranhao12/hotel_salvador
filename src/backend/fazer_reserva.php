<?php

    include "access_control.php";

    include "connection.php";

    if  ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        $local = $_POST['local'];
        $suite = $_POST['suite'];
        $ap = $_POST['ap'];
        $qtd_adultos = $_POST['qtd_adultos'];
        $qtd_criancas = $_POST['qtd_criancas'];
        $checkin = $_POST['checkin'];
        $checkout = $_POST['checkout'];

        $sql = "INSERT INTO reservas 
            (local, suite, ap, qtd_adultos, qtd_criancas, checkin, checkout) 
        VALUES 
            ('$local', '$suite', '$ap', '$qtd_adultos', '$qtd_criancas', '$checkin', '$checkout')";

        //verificar se houve erro ou sucesso ao cadastrar o usuario 
        if ($db_conn->query($sql) === TRUE) {
            $res = array('status' => 'sucesso', 'mensagem' => 'Reservado com sucesso!');
            echo json_encode($res);
        } else {
            $res = array('status' => 'erro', 'mensagem' => 'Erro ao fazer Reserva!' . $db_conn->error);
            echo json_encode($res);
        }

    }

?>