<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailOrMobile = validateInput($_POST['email_or_mobile']);
    $password = $_POST['password'];

    // Simple check: if password is 'password', login
    if ($password === 'password') {
        $_SESSION['user_id'] = 1;
        $_SESSION['user_email'] = $emailOrMobile;
        $_SESSION['user_name'] = 'User';
        
        // Regenerate session id to prevent session fixation
        session_regenerate_id(true);
        
        // Set a security token to prevent CSRF attacks
        $_SESSION['csrf_token'] = generateCSRFToken();
        
        // Set a session timeout
        $_SESSION['last_activity'] = time();

        header("Location: ../../../index.html"); // Redirect to main site
        exit();
    } else {
        $_SESSION['error_message'] = "Invalid email/mobile or password";
        header("Location: index_login.html");
        exit();
    }
}

function validateInput($input) {
    return filter_var(trim($input), FILTER_SANITIZE_STRING);
}

function generateCSRFToken() {
    return bin2hex(random_bytes(32));
}
