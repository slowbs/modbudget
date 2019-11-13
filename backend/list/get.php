<?php

if(isset($_GET['id']))
{
//     //$ids = $_GET['id'];
// $sql = "SELECT * from list where id = $_GET[id]";
// // $sql = "SELECT * FROM `c1` WHERE 1";
// $query = mysqli_query($database, $sql);
// $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// echo json_encode($result);

    // $query = 'SELECT * FROM list WHERE type =  ?';
    $query = 'SELECT l.id as id, l.bookno as bookno, l.datepick as datepick,
    t.name as type, l.text as text, l.income as income, l.outcome as outcome,
    l.refund as refund, l.balance as balance, l.note as note
    FROM `list` l
    left join total t on l.type = t.id
    where type = ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    echo json_encode($result);
}