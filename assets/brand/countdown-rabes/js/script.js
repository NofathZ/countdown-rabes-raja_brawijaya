// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Jun 21, 2021 00:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById('hari').innerHTML = days;
  document.getElementById('jam').innerHTML = hours;
  document.getElementById('menit').innerHTML = minutes;
  document.getElementById('detik').innerHTML = seconds;
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  // if ((distance < 0)) {
  //   window.location.replace('https://google.com')
  // }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('hari').innerHTML = "0";
    document.getElementById('jam').innerHTML = "0";
    document.getElementById('menit').innerHTML = "0";
    document.getElementById('detik').innerHTML = "0";
    // var button = document.getElementById('buttonPindahPosFix');
    // button.setAttribute('id', 'buttonPindahDisFlex');
    swal({
      title: "RAPAT TELAH DIMULAI",
      icon: "success",
      button: "Bergabung Ke Rapat",
    });
    document.getElementsByTagName('button')[0].setAttribute('onclick', 'reloadHalaman()');
  }
}, 1000);

function reloadHalaman() {
  window.location.reload(true);
}