<?php

// $sql = 'SELECT * from budget';
// $sql = "select id, text, a.budgetno, a.activityno, ac.name, income, sum_income1, m_10, m_11, m_12, m_1, m_2, m_3, sum_outcome1, sum(sum_income1 - sum_outcome1) as balance1, round(sum((sum_outcome1 * 100)/sum_income1), 2) as per1,
// sum_income2, m_4, m_5, m_6, m_7, m_8, m_9, outcome, round((sum(outcome * 100)/income), 2) as per2,
// sum(income - outcome) as totalbalance
// from
// (select text, budgetno, activityno, sum(income) as income, sum(outcome) as outcome from list GROUP by activityno) as a
// left JOIN
// (select activityno, SUM(outcome) as m_11 from list where MONTH(datepick) = '11' GROUP by activityno) as m11
// on m11.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_12 from list where MONTH(datepick) = '12' GROUP by activityno) as m12
// on m12.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_1 from list where MONTH(datepick) = '1' GROUP by activityno) as m1
// on m1.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_2 from list where MONTH(datepick) = '2' GROUP by activityno) as m2
// on m2.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_3 from list where MONTH(datepick) = '3' GROUP by activityno) as m3
// on m3.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_4 from list where MONTH(datepick) = '4' GROUP by activityno) as m4
// on m4.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_5 from list where MONTH(datepick) = '5' GROUP by activityno) as m5
// on m5.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_6 from list where MONTH(datepick) = '6' GROUP by activityno) as m6
// on m6.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_7 from list where MONTH(datepick) = '7' GROUP by activityno) as m7
// on m7.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_8 from list where MONTH(datepick) = '8' GROUP by activityno) as m8
// on m8.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_9 from list where MONTH(datepick) = '9' GROUP by activityno) as m9
// on m9.activityno = a.activityno
// left JOIN
// (select activityno, SUM(outcome) as m_10 from list where MONTH(datepick) = '10' GROUP by activityno) as m10
// on m10.activityno = a.activityno
// left JOIN
// activity ac on ac.activityno = a.activityno
// left join
// (select activityno, SUM(income) as sum_income1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
//  GROUP by activityno ) as sumincome1
// on sumincome1.activityno = a.activityno
// left join
// (select activityno, SUM(income) as sum_income2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
//  GROUP by activityno ) as sumincome2
// on sumincome2.activityno = a.activityno
// left join
// (select activityno, SUM(outcome) as sum_outcome1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
//  GROUP by activityno ) as sumoutcome1
// on sumoutcome1.activityno = a.activityno
// left join
// (select activityno, SUM(outcome) as sum_outcome2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
//  GROUP by activityno ) as sumoutcome2
// on sumoutcome2.activityno = a.activityno
// GROUP by a.activityno";
$sql = "select text, p.budgetno, p.activityno, pj.name, income, sum_income1, m_10, m_11, m_12, m_1, m_2, m_3, sum_outcome1, sum(sum_income1 - sum_outcome1) as balance1, round(sum((sum_outcome1 * 100)/sum_income1), 2) as per1,
sum_income2, m_4, m_5, m_6, m_7, m_8, m_9, outcome, round((sum(outcome * 100)/income), 2) as per2,
sum(income - outcome) as totalbalance, person, workgroup
from
(select text, budgetno, activityno, projectno, sum(income) as income, sum(outcome) as outcome from list GROUP by projectno, activityno) as p
left JOIN
(select activityno, projectno, SUM(outcome) as m_11 from list where MONTH(datepick) = '11' GROUP by projectno, activityno) as m11
on m11.projectno = p.projectno and m11.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_12 from list where MONTH(datepick) = '12' GROUP by projectno, activityno) as m12
on m12.projectno = p.projectno and m12.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_1 from list where MONTH(datepick) = '1' GROUP by projectno, activityno) as m1
on m1.projectno = p.projectno and m1.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_2 from list where MONTH(datepick) = '2' GROUP by projectno, activityno) as m2
on m2.projectno = p.projectno and m2.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_3 from list where MONTH(datepick) = '3' GROUP by projectno, activityno) as m3
on m3.projectno = p.projectno and m3.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_4 from list where MONTH(datepick) = '4' GROUP by projectno, activityno) as m4
on m4.projectno = p.projectno and m4.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_5 from list where MONTH(datepick) = '5' GROUP by projectno, activityno) as m5
on m5.projectno = p.projectno and m5.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_6 from list where MONTH(datepick) = '6' GROUP by projectno, activityno) as m6
on m6.projectno = p.projectno and m6.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_7 from list where MONTH(datepick) = '7' GROUP by projectno, activityno) as m7
on m7.projectno = p.projectno and m7.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_8 from list where MONTH(datepick) = '8' GROUP by projectno, activityno) as m8
on m8.projectno = p.projectno and m8.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_9 from list where MONTH(datepick) = '9' GROUP by projectno, activityno) as m9
on m9.projectno = p.projectno and m9.activityno = p.activityno
left JOIN
(select activityno, projectno, SUM(outcome) as m_10 from list where MONTH(datepick) = '10' GROUP by projectno, activityno) as m10
on m10.projectno = p.projectno and m10.activityno = p.activityno
LEFT JOIN
project pj on pj.projectno = p.projectno and pj.activityno = p.activityno
left join
(select projectno, activityno, SUM(income) as sum_income1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
 GROUP by projectno, activityno ) as sumincome1
on sumincome1.projectno = p.projectno and sumincome1.activityno = p.activityno
left join
(select projectno, activityno, SUM(income) as sum_income2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
 GROUP by projectno, activityno ) as sumincome2
on sumincome2.projectno = p.projectno and sumincome2.activityno = p.activityno
left join
(select projectno, activityno, SUM(outcome) as sum_outcome1 from list where MONTH(datepick) IN ('10', '11', '12', '1', '2', '3')
 GROUP by projectno, activityno ) as sumoutcome1
on sumoutcome1.projectno = p.projectno and sumoutcome1.activityno = p.activityno
left join
(select projectno, activityno, SUM(outcome) as sum_outcome2 from list where MONTH(datepick) IN ('4', '5', '6', '7', '8', '9')
 GROUP by projectno, activityno ) as sumoutcome2
on sumoutcome2.projectno = p.projectno and sumoutcome2.activityno = p.activityno
GROUP by p.projectno, p.activityno
";
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

// echo json_encode($result, JSON_PRETTY_PRINT);
echo json_encode($result);
// echo json_encode([
//     'result' => $result,
//     'session' => $_SESSION['login']
// ]);
