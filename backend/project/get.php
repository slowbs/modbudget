<?php
if(isset($_GET['budgetno']) && isset($_GET['activityno'])){
    $query = 'select id, p.budgetno, p.activityno, p.projectno, name, income, outcome, refund, sum(income - outcome + refund) as balance, person, workgroup from (
        (select * from project) as p
        left JOIN
        (select projectno, budgetno, activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno, activityno) as l on l.activityno = p.activityno and l.projectno = p.projectno)
        where p.budgetno = ? and p.activityno = ?
        group by p.id;';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'ss',
     $_GET['budgetno'],
     $_GET['activityno']
    );
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    echo json_encode($result);
}
 else {
    $sql = 'SELECT * from project';
    $query = mysqli_query($database, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

    // $_SESSION['login'] = 'duck';

    echo json_encode($result);
}
