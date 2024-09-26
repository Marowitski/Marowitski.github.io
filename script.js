document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function(event) {
        const infoBox = document.getElementById('infoBox');
        const infoContent = document.getElementById('infoContent');

        // Tıklanan mahalleye ait bilgiyi al
        infoContent.textContent = this.getAttribute('data-info');

        // Bilgi kutusunu butonun hemen altına yerleştir
        const rect = this.getBoundingClientRect(); // Butonun pozisyonunu al
        const x = rect.left + window.scrollX; // Butonun X pozisyonu
        const y = rect.bottom + window.scrollY; // Butonun alt kısmının Y pozisyonu

        infoBox.style.left = x + 'px';
        infoBox.style.top = y + 'px';
        infoBox.style.display = 'block';
    });
});

// Bilgi balonundaki butonlara tıklama olayları
document.querySelectorAll('.info-option').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' butonuna tıkladınız.');
    });
});
