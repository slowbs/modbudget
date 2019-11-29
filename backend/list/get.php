<?php

// $sql = "SELECT * from list where 1";
// // $sql = "SELECT * FROM `c1` WHERE 1";
// $query = mysqli_query($database, $sql);
// $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// echo json_encode($result);


if (isset($_GET['budgetno']) && isset($_GET['activityno']) && isset($_GET['projectno'])) {
    // //     //$ids = $_GET['id'];
    // // $sql = "SELECT * from list where id = $_GET[id]";
    // // // $sql = "SELECT * FROM `c1` WHERE 1";
    // // $query = mysqli_query($database, $sql);
    // // $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

    // // echo json_encode($result);

    //     // $query = 'SELECT * FROM list WHERE type =  ?';
    //     // $query = 'SELECT l.id as id, l.bookno as bookno, l.datepick as datepick,
    //     // t.name as type, l.text as text, l.income as income, l.outcome as outcome,
    //     // l.refund as refund, l.balance as balance, l.note as note
    //     // FROM `list` l
    //     // left join total t on l.type = t.id
    //     // where type = ?';

    mysqli_query($database, "set @csum = 0");
    $query = 'select l.id as id, l.bookno as bookno, l.datepick as datepick,
        l.text as text, income, outcome, refund, csum.balance, note
        from list l
        left join budget b on b.budgetno = l.budgetno
        left join activity a on a.budgetno = l.budgetno and a.activityno = l.activityno
        left join project p on p.budgetno = l.budgetno and p.activityno = l.activityno and p.projectno = l.projectno
        left join (select id, (@csum := @csum + income - outcome + refund) as balance from list where budgetno = ? and activityno = ? and projectno = ?) as csum on csum.id = l.id
        where l.budgetno = ? and l.activityno = ? and l.projectno = ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'ssssss',
        $_GET['budgetno'],
        $_GET['activityno'],
        $_GET['projectno'],
        $_GET['budgetno'],
        $_GET['activityno'],
        $_GET['projectno']
    );
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);

    /** ดึง header */
    $query = 'select * from project where budgetno = ? and activityno = ? and projectno = ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'sss',
        $_GET['budgetno'],
        $_GET['activityno'],
        $_GET['projectno'],
    );
    mysqli_stmt_execute($stmt);
    $result2 = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    /** ส่งค่าไป frontend */
    echo json_encode([
        'result' => $result,
        'result2' => $result2
    ]);
}
