var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

console.log(daftarBuah.sort());

for(var i=0; i<daftarBuah.length; i++)
{
    console.log(daftarBuah[i]);
}

console.log("\n");

var kalimat = "saya sangat senang belajar javascript";

var hasil = kalimat.split(" ");

console.log(hasil);

console.log("\n");

let buah = [
    {
        "nama": "strawberry",
        "warna": "merah",
        "ada_bijinya": "tidak",
        "harga": 9000
    },
    {
        "nama": "jeruk",
        "warna": "oranye",
        "ada_bijinya": "ada",
        "harga": 8000
    },
    {
        "nama": "semangka",
        "warna": "hijau dan merah",
        "ada_bijinya": "ada",
        "harga": 1000

    },
    {
        "nama": "pisang",
        "warna": "kuning",
        "ada_bijinya": "tidak",
        "harga": 5000
    }];

console.log(buah[3]);