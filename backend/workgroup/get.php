<?php

// $sql = 'SELECT * from workgroup';
$sql = 'select id, w.name, income, outcome, refund, sum(income - outcome + refund) as balance from (
    (select *  from workgroup) as w
    left JOIN
    (select workgroup, projectno from project) as pj on pj.workgroup = w.name
    left JOIN
    (select projectno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list) as l on l.projectno = pj.projectno)
    group by w.name order by id';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
