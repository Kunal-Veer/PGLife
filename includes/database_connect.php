<?php
//$conn = mysqli_connect("123.0.0.1", "root", "", "pglife");
//$conn = mysqli_connect("localhost", "root", "", "pglife");
$conn = mysqli_connect("localhost:3307", "root", "", "pglife");
// $conn = mysqli_connect("localhost/3307", "root", "", "pglife");
if (mysqli_connect_errno()) {
    // Throw error message based on ajax or not
    echo "Failed to connect to MySQL! Please contact the admin.";
    return;
}
