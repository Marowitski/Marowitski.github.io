document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function(event) {
        const infoBox = document.getElementById('infoBox');
        const infoContent = document.getElementById('infoContent');

        // Tıklanan bölgeye ait bilgiyi al
        infoContent.textContent = this.getAttribute('data-info');

        // Tıklanan butonun konumunu al
        const rect = this.getBoundingClientRect();

        // Bilgi kutusunu butonun hemen altına yerleştir
        infoBox.style.left = rect.left + 'px';  // Butonun sol kenarı
        infoBox.style.top = rect.bottom + 'px'; // Butonun alt kısmı
        infoBox.style.display = 'block';        // Bilgi kutusunu göster
    });
});

// Bilgi balonundaki butonlara tıklama olayları
document.querySelectorAll('.info-option').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' butonuna tıkladınız.');
    });
});
