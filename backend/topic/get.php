<?php

// $sql = 'SELECT * from budget';
$sql = 'select id, b.budgetno, name, income, outcome, sum(income - outcome) as balance from (
    (select *  from budget) as b
    left join
    (select budgetno, sum(income) as income, sum(outcome) as outcome from list GROUP by budgetno) as l on l.budgetno = b.budgetno)
    group by budgetno';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
