<?php
if (isset($data->project)) {
    $query = 'SELECT * FROM `project` WHERE name like %%?%%';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 's', $data->project);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    // echo json_encode($result);

    /** ส่งค่าไป frontend */
    echo json_encode([
        'result' => $result
    ]);
} elseif (isset($data->person)) {
    $query = 'SELECT * FROM `project` WHERE person like %%?%%';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 's', $data->person);
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    //$result = mysqli_fetch_all($stmt, MYSQLI_ASSOC);
    // echo json_encode($result);

    /** ส่งค่าไป frontend */
    echo json_encode([
        'result' => $result
    ]);
}
