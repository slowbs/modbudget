<?php

// $sql = 'SELECT * from budget';
$sql = "select id, text, a.budgetno, a.activityno, ac.name, income, sum_income1, m_10, m_11, m_12, m_1, m_2, m_3, sum_outcome1, sum(sum_income1 - sum_outcome1) as balance1, round(sum((sum_outcome1 * 100)/sum_income1), 2) as per1,
sum_income2, m_4, m_5, m_6, m_7, m_8, m_9, outcome, round((sum(outcome * 100)/income), 2) as per2,
sum(income - outcome) as totalbalance
from
(select text, budgetno, activityno, sum(income) as income, sum(outcome) as outcome from list GROUP by activityno) as a
left JOIN
(select activityno, SUM(outcome) as m_11 from list where MONTH(datepick) = '11' GROUP by activityno) as m11
on m11.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_12 from list where MONTH(datepick) = '12' GROUP by activityno) as m12
on m12.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_1 from list where MONTH(datepick) = '1' GROUP by activityno) as m1
on m1.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_2 from list where MONTH(datepick) = '2' GROUP by activityno) as m2
on m2.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_3 from list where MONTH(datepick) = '3' GROUP by activityno) as m3
on m3.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_4 from list where MONTH(datepick) = '4' GROUP by activityno) as m4
on m4.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_5 from list where MONTH(datepick) = '5' GROUP by activityno) as m5
on m5.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_6 from list where MONTH(datepick) = '6' GROUP by activityno) as m6
on m6.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_7 from list where MONTH(datepick) = '7' GROUP by activityno) as m7
on m7.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_8 from list where MONTH(datepick) = '8' GROUP by activityno) as m8
on m8.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_9 from list where MONTH(datepick) = '9' GROUP by activityno) as m9
on m9.activityno = a.activityno
left JOIN
(select activityno, SUM(outcome) as m_10 from list where MONTH(datepick) = '10' GROUP by activityno) as m10
on m10.activityno = a.activityno
left JOIN
activity ac on ac.activityno = a.activityno
left join
(select activityno, SUM(income) as sum_income1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
 GROUP by activityno ) as sumincome1
on sumincome1.activityno = a.activityno
left join
(select activityno, SUM(income) as sum_income2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
 GROUP by activityno ) as sumincome2
on sumincome2.activityno = a.activityno
left join
(select activityno, SUM(outcome) as sum_outcome1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
 GROUP by activityno ) as sumoutcome1
on sumoutcome1.activityno = a.activityno
left join
(select activityno, SUM(outcome) as sum_outcome2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
 GROUP by activityno ) as sumoutcome2
on sumoutcome2.activityno = a.activityno
GROUP by a.activityno";
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

// echo json_encode($result, JSON_PRETTY_PRINT);
echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
