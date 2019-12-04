<?php
if (isset($_GET['budgetno'])) {
    $query = 'select id, a.budgetno, a.activityno, name, income, outcome, refund, sum(income - outcome + refund) as balance from (
        (select *  from activity) as a
        left join
        (select activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by activityno) as l on l.activityno = a.activityno)
        where budgetno = ?
        group by activityno';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'i', $_GET['budgetno']);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    // echo json_encode($result);

    /** ดึง header */
    $query = 'select * from budget where budgetno = ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        's',
        $_GET['budgetno']
    );
    mysqli_stmt_execute($stmt);
    $result2 = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    /** ส่งค่าไป frontend */
    echo json_encode([
        'result' => $result,
        'result2' => $result2
    ]);
} else {
    $sql = 'select id, a.budgetno, a.activityno, name, income, outcome, refund, sum(income - outcome + refund) as balance from (
        (select *  from activity) as a
        left join
        (select activityno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by activityno) as l on l.activityno = a.activityno)
        where 1 group by activityno';
    $query = mysqli_query($database, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

    // $_SESSION['login'] = 'duck';

    echo json_encode([
        'result' => $result
    ]);
}
