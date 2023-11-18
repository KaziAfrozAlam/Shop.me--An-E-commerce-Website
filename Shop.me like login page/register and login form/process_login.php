<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailOrMobile = validateInput($_POST['email_or_mobile']);
    $password = $_POST['password'];

    $conn = createDatabaseConnection();

    $user = getUserByCredentials($conn, $emailOrMobile);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['user_name'] = $user['name'];
        
        // Regenerate session id to prevent session fixation
        session_regenerate_id(true);
        
        // Set a security token to prevent CSRF attacks
        $_SESSION['csrf_token'] = generateCSRFToken();
        
        // Set a session timeout
        $_SESSION['last_activity'] = time();

        header("Location: dashboard.php");
        exit();
    } else {
        $_SESSION['error_message'] = "Invalid email/mobile or password";
        header("Location: login.php");
        exit();
    }

    closeDatabaseConnection($conn);
}

function validateInput($input) {
    return filter_var(trim($input), FILTER_SANITIZE_STRING);
}

function createDatabaseConnection() {
    $host = 'localhost';
    $dbUsername = 'root';
    $dbPassword = 'NO';
    $dbName = 'user';

    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbName", $dbUsername, $dbPassword);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }
}

function getUserByCredentials($conn, $emailOrMobile) {
    $stmt = $conn->prepare("SELECT id, name, email, password FROM users WHERE email = :emailOrMobile OR mobile = :emailOrMobile LIMIT 1");
    $stmt->bindParam(':emailOrMobile', $emailOrMobile);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function generateCSRFToken() {
    return bin2hex(random_bytes(32));
}

function closeDatabaseConnection($conn) {
    $conn = null;
}
