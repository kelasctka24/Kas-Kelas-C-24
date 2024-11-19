<?php
require 'vendor/autoload.php'; // Pastikan autoloader composer digunakan

use PhpOffice\PhpSpreadsheet\IOFactory;

$filePath = 'Catatan-Kas.xlsx'; // Path ke file Excel

if (file_exists($filePath)) {
    // Membaca file Excel
    $spreadsheet = IOFactory::load($filePath);
    $sheet = $spreadsheet->getActiveSheet();
    $data = $sheet->toArray(); // Mengubah data menjadi array

    echo "<!DOCTYPE html>";
    echo "<html lang='en'>";
    echo "<head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<title>Rekap Kas Kelas</title>";
    echo "<link rel='stylesheet' href='style.css'>"; // CSS untuk styling
    echo "</head>";
    echo "<body>";
    echo "<h1>Rekap Kas Kelas</h1>";
    echo "<table border='1'>";
    echo "<thead>";
    
    // Menampilkan header (baris pertama Excel)
    echo "<tr>";
    foreach ($data[0] as $header) {
        echo "<th>" . htmlspecialchars($header) . "</th>";
    }
    echo "</tr>";
    echo "</thead>";
    echo "<tbody>";
    
    // Menampilkan data (baris kedua dan seterusnya)
    for ($i = 1; $i < count($data); $i++) {
        echo "<tr>";
        foreach ($data[$i] as $cell) {
            echo "<td>" . htmlspecialchars($cell) . "</td>";
        }
        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";
    echo "</body>";
    echo "</html>";
} else {
    echo "File Excel tidak ditemukan!";
}
?>