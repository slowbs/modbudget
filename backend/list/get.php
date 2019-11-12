<?php

if(isset($_GET['id']))
{
//     //$ids = $_GET['id'];
// $sql = "SELECT * from list where id = $_GET[id]";
// // $sql = "SELECT * FROM `c1` WHERE 1";
// $query = mysqli_query($database, $sql);
// $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// echo json_encode($result);

    $query = 'SELECT * FROM list WHERE type =  ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    echo json_encode($result);
}