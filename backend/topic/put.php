<?php

$data = json_decode(file_get_contents('php://input'));

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    /** Validation */
    if (empty($data->budgetno)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก bookno'
        ]));
    } elseif (empty($data->name)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรอก name'
        ]));
    }

    // echo json_encode([
    //     'message' => 'valid'
    // ]);
    //query นี้ยังไม่เวิค เพราะใน table list ตัวของ budgetno จะยังไม่เปลี่ยนตาม
    $query = "UPDATE budget SET budgetno = ?, name = ? WHERE id = ?";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        'ssi',
        $data->budgetno,
        $data->name,
        $_GET['id']
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);

    /** เช็ค error */
    if ($error_message) {
        http_response_code(400);
        exit(json_encode([
            'message' => $error_message
        ]));
    }

    exit(json_encode([
        'message' => 'แก้ไขสำเร็จ'
    ]));
}
http_response_code(400);
echo json_encode([
    'message' => 'รายการ Request ไม่ถูกต้อง'
]);