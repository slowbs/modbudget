<?php

$data = json_decode(file_get_contents('php://input'));

if (isset($data->project) && ($data->project !=null)) {
    $data->project = "%$data->project%";
    // $query = 'SELECT * FROM `project` WHERE name like ?';
    $query = 'select id, p.budgetno, p.activityno, p.projectno, name, income, outcome, refund, sum(income - outcome + refund) as balance, person, workgroup from (
        (select * from project) as p
        left JOIN
        (select projectno, budgetno, activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno, activityno) as l on l.activityno = p.activityno and l.projectno = p.projectno)
        where name like ?
        group by p.id';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 's', $data->project);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    echo json_encode($result);

} elseif (isset($data->person) && ($data->person != null)) {
    $data->person = "%$data->person%";
    // $query = 'SELECT * FROM `project` WHERE person like ?';
    $query = 'select id, p.budgetno, p.activityno, p.projectno, name, income, outcome, refund, sum(income - outcome + refund) as balance, person, workgroup from (
        (select * from project) as p
        left JOIN
        (select projectno, budgetno, activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno, activityno) as l on l.activityno = p.activityno and l.projectno = p.projectno)
        where person like ?
        group by p.id';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 's', $data->person);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    echo json_encode($result);
}
