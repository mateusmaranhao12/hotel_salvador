<?php
include "access_control.php";
include "connection.php";

$sql = "SELECT * FROM reservas";
$result = $db_conn->query($sql);

$reservas = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($reservas, $row);
    }
}

echo json_encode($reservas);
?>