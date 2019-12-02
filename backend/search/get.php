<?php
// if (isset($data->project)) {
//     $query = 'SELECT * FROM `project` WHERE name like %%?%%';
//     $stmt = mysqli_prepare($database, $query);
//     mysqli_stmt_bind_param($stmt, 's', $data->project);
//     mysqli_stmt_execute($stmt);
//     $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
//     //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
//     // echo json_encode($result);

//     /** ส่งค่าไป frontend */
//     echo json_encode([
//         'result' => $result
//     ]);
// } elseif (isset($data->person)) {
//     $query = 'SELECT * FROM `project` WHERE person like %%?%%';
//     $stmt = mysqli_prepare($database, $query);
//     mysqli_stmt_bind_param($stmt, 's', $data->person);
//     mysqli_stmt_execute($stmt);
//     $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
//     //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
//     // echo json_encode($result);

//     /** ส่งค่าไป frontend */
//     echo json_encode([
//         'result' => $result
//     ]);
// }

$sql = 'select id, p.budgetno, p.activityno, p.projectno, name, income, outcome, refund, sum(income - outcome + refund) as balance, person, workgroup from (
    (select * from project) as p
    left JOIN
    (select projectno, budgetno, activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno, activityno) as l on l.activityno = p.activityno and l.projectno = p.projectno)
    where 1
    group by p.id';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

// echo json_encode($result);
echo json_encode([
    'result' => $result
]);
