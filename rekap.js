async function loadRekap() {
    const url = 'https://cors-anywhere.herokuapp.com/https://github.com/fdhl1135/Pembayaran-Kas-TKA-1C/blob/main/rekap_kas.csv';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        let table = '<table>';
        table += '<tr><th>Tanggal</th><th>Keterangan</th><th>Pemasukan</th><th>Pengeluaran</th></tr>';
        data.forEach(item => {
            table += `<tr>
                <td>${item.Tanggal}</td>
                <td>${item.Keterangan}</td>
                <td>${item.Pemasukan}</td>
                <td>${item.Pengeluaran}</td>
            </tr>`;
        });
        table += '</table>';
        document.getElementById('rekap-container').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('rekap-container').innerHTML = '<p>Gagal memuat data rekap kas.</p>';
    }
}

loadRekap();
