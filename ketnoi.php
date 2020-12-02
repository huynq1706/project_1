<?php session_start();

$localhost = 'localhost';
$username = 'root';
$password = '';
$dbname = 'du_an_1';
try {
    $conn = new PDO("mysql:host=$localhost; dbname=$dbname; charset=utf8", $username, $password);
    // echo "Kết nối thành công";
} catch (PDOException $e) {
    // echo "kết nối cơ sở dữ liệu thất bại<br>" . $e->getMessage();
}