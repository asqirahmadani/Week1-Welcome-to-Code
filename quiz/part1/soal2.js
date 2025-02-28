// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 25; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2005; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch (true) {
    case tanggal > 0 && tanggal <= 31:
        tanggal = tanggal;
        break;
    default:
        tanggal = "tanggal invalid";
}

switch (bulan) {
    case (bulan = 1):
        bulan = "Januari";
        break;
    case (bulan = 2):
        bulan = "Februari";
        break;
    case (bulan = 3):
        bulan = "Maret";
        break;
    case (bulan = 4):
        bulan = "April";
        break;
    case (bulan = 5):
        bulan = "Mei";
        break;
    case (bulan = 6):
        bulan = "Juni";
        break;
    case (bulan = 7):
        bulan = "Juli";
        break;
    case (bulan = 8):
        bulan = "Agustus";
        break;
    case (bulan = 9):
        bulan = "September";
        break;
    case (bulan = 10):
        bulan = "Oktober";
        break;
    case (bulan = 11):
        bulan = "November";
        break;
    case (bulan = 12):
        bulan = "Desember";
        break;
    default:
        bulan = "bulan invalid";
}

switch (true) {
    case (tahun >= 1900 && tahun <= 2200):
        tahun == tahun;
        break;
    default:
        tahun = "tahun invalid"
}

console.log(`${tanggal} ${bulan} ${tahun}`)