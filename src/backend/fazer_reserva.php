<?php
    include "access_control.php";
    include "connection.php";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        $local = $_POST['local'];
        $suite = $_POST['suite'];
        $ap = $_POST['ap'];
        $qtd_adultos = $_POST['qtd_adultos'];
        $qtd_criancas = $_POST['qtd_criancas'];
        $checkin = $_POST['checkin'];
        $checkout = $_POST['checkout'];
        $usuario_id = $_POST['usuario_id'];
        $usuario_nome = $_POST['usuario_nome'];

        // Verifica se já existe uma reserva para o mesmo período de tempo e local, suite e ap
        $sql = "SELECT id FROM reservas WHERE local = '$local' AND suite = '$suite' AND ap = '$ap' AND 
            ((checkin >= '$checkin' AND checkin < '$checkout') OR (checkout > '$checkin' AND checkout <= '$checkout')
            OR (checkin < '$checkin' AND checkout > '$checkout'))";

        $result = $db_conn->query($sql);

        if ($result->num_rows > 0) {
            $res = array('status' => 'erro', 'mensagem' => 'Já existe uma reserva nesse local pra esta data!');
            echo json_encode($res);
        } else {
            // Insere a reserva no banco de dados
            $sql = "INSERT INTO reservas 
                (local, suite, ap, qtd_adultos, qtd_criancas, checkin, checkout, usuario_id, usuario_nome) 
            VALUES 
                ('$local', '$suite', '$ap', '$qtd_adultos', '$qtd_criancas', '$checkin', '$checkout', '$usuario_id', '$usuario_nome')";

            if ($db_conn->query($sql) === TRUE) {
                $res = array('status' => 'sucesso', 'mensagem' => 'Reservado com sucesso!');
                echo json_encode($res);
            } else {
                $res = array('status' => 'erro', 'mensagem' => 'Erro ao fazer reserva!' . $db_conn->error);
                echo json_encode($res);
            }
        }
    }
?>