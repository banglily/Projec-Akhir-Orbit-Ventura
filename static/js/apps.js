function hitungTotal(){
    harga = document.getElementById("Hargap").value;
    luas = document.getElementById("Luas").value;
    Total = harga * luas;
    document.getElementById("Total").value =  Total;

}
function fplanT(){
    harga = document.getElementById("Hargas").value;
    tahun = document.getElementById("Tahun").value;
    Tabungt = harga / tahun;
    document.getElementById("Tabungt").value =  Tabungt;

}
function fplanB(){
    harga = document.getElementById("Hargat").value;
    bulan = document.getElementById("Bulan").value;
    Tabungb = harga / bulan;
    document.getElementById("Tabungb").value =  Tabungb;

}
function fplanH(){
    harga = document.getElementById("Hargab").value;
    hari = document.getElementById("txtHari").value;
    Tabung = harga / hari;
    document.getElementById("Tabungh").value =  Tabung;

}
function LengthConverter(valNum) {
    document.getElementById("output").innerHTML=valNum*10000;
}