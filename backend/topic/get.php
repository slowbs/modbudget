<?php

// $sql = 'SELECT * from budget';
$sql = 'select id, b.budgetno, name, income, outcome, refund, sum(income - outcome + refund) as balance from (
    (select *  from budget) as b
    left join
    (select budgetno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by budgetno) as l on l.budgetno = b.budgetno)
    group by budgetno order by id';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
