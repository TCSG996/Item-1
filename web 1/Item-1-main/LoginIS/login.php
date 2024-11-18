<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "Lonig";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 获取用户输入的用户名和密码
$input_username = $_POST['username'];
$input_password = $_POST['password'];

// 查询数据库中的账号和密码
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $input_username);
$stmt->execute();
$result = $stmt->get_result();

// 检查查询结果
if ($result->num_rows > 0) {
    // 获取查询到的用户记录
    $row = $result->fetch_assoc();

    // 验证密码是否匹配
    if ($input_password == $row['password']) {
        // 登录成功，设置会话变量并跳转到主页
        session_start();
        $_SESSION['loggedin'] = true;
        header('Location:../Home page one/Home page one.html');
        exit;
    } else {
        // 密码不匹配，显示错误消息
        header('Location: /login.html?error=1');
        exit;
    }
} else {
    // 用户名不存在，显示错误消息
    header('Location: /login.html?error=1');
    exit;
}

// 关闭数据库连接
$stmt->close();
$conn->close();
?>