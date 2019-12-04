<?php
if (isset($_GET['id'])) {
    $query = '(select pj.projectno, w.id, pj.name, workgroup, person, income, outcome, refund, sum(income - outcome + refund) as balance from (
        (select  projectno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund  from list GROUP by projectno) as l
        right JOIN
        (select * from project group by projectno) as pj on pj.projectno = l.projectno
        left JOIN
        (select * from workgroup) as w on w.name = pj.workgroup)
        where w.id = ? GROUP by l.projectno order by pj.created)
UNION ALL
select "","","total","", "", sum(income), sum(outcome), sum(refund), sum(income - outcome + refund) as balance from
(select pj.projectno, w.id, pj.name, workgroup, income, outcome, refund, sum(income - outcome + refund) as balance from (
        (select  projectno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund  from list GROUP by projectno) as l
        right JOIN
        (select * from project group by projectno) as pj on pj.projectno = l.projectno
        left JOIN
        (select * from workgroup) as w on w.name = pj.workgroup)
        where w.id = ? GROUP by l.projectno order by pj.created) as total';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'ii',
        $_GET['id'],
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    /** ดึง header */
    // $query = 'select * from workgroup where id = ?';
    $query = 'select w.id, w.name, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund, sum(income - outcome + refund) as balance from (
        (select * from workgroup) as w
        left JOIN
        (select workgroup, projectno from project group by projectno) as pj on pj.workgroup = w.name
        left join 
        (select projectno, sum(income) as income, sum(outcome) as outcome, sum(refund) as refund from list GROUP by projectno) as l on l.projectno = pj.projectno)
        where w.id = ? group by w.name order by w.id';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'i',
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    $result2 = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    /** ส่งค่าไป frontend */
    echo json_encode([
        'result' => $result,
        'result2' => $result2
    ]);
}
