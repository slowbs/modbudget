<?php

// $sql = 'SELECT * from workgroup';
$sql = 'select w.id, w.name, sum(income) as income, sum(outcome) as outcome, sum(refund), sum(income - outcome + refund) as balance from (
    (select * from workgroup) as w
    left JOIN
    (select workgroup, projectno from project) as pj on pj.workgroup = w.name
    left join 
    (select projectno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno) as l on l.projectno = pj.projectno)
    group by w.name order by w.id';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
