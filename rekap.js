async function loadRekap() {
    const csvUrl = 'https://drive.google.com/file/d/12t5cEdGDy8w64cZUp-LCk3xsE6AJW4tY/view?usp=drivesdk'; 
 // Ganti dengan URL Raw yang benar
    try {
        console.log('Memuat file CSV dari:', csvUrl); // Debug
        const response = await fetch(csvUrl);

        if (!response.ok) {
            throw new Error('Status tidak OK: ' + response.status); // Debug status
        }

        const data = await response.text();
        console.log('Data CSV berhasil dimuat:', data); // Debug isi data

        const rows = data.split('\n').map(row => row.split(','));
        let table = '<table>';
        rows.forEach((row, index) => {
            table += '<tr>';
            row.forEach(cell => {
                table += index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`;
            });
            table += '</tr>';
        });
        table += '</table>';
        document.getElementById('rekap-container').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('rekap-container').innerHTML = '<p>Gagal memuat data rekap kas.</p>';
    }
}

loadRekap();
