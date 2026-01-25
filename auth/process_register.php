<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = validateInput($_POST['name']);
    $email = validateInput($_POST['email']);
    $phone = validateInput($_POST['phone']);
    $password = $_POST['password'];

    // Simple validation
    if (empty($name) || empty($email) || empty($phone) || empty($password)) {
        $_SESSION['error_message'] = "All fields are required";
        header("Location: register.html");
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error_message'] = "Invalid email format";
        header("Location: register.html");
        exit();
    }

    if (strlen($password) < 6) {
        $_SESSION['error_message'] = "Password must be at least 6 characters";
        header("Location: register.html");
        exit();
    }

    // For demo, just set session (no DB)
    $_SESSION['user_id'] = rand(1000, 9999); // Random ID
    $_SESSION['user_email'] = $email;
    $_SESSION['user_name'] = $name;
    $_SESSION['user_phone'] = $phone;

    // Regenerate session id
    session_regenerate_id(true);

    // Set CSRF token
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

    // Set session timeout
    $_SESSION['last_activity'] = time();

    $_SESSION['success_message'] = "Registration successful! Welcome to Shop.me.";
    header("Location: ../index.html");
    exit();
}

function validateInput($input) {
    return filter_var(trim($input), FILTER_SANITIZE_STRING);
}
?>