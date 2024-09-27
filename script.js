document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', function(event) {
        const infoBox = document.getElementById('infoBox');
        const infoContent = document.getElementById('infoContent');
        const infoButtonsContainer = document.getElementById('infoButtons');
        
        // Tıklanan mahalleye ait bilgiyi al
        infoContent.textContent = this.getAttribute('data-info');

        // Önceki butonları temizle
        infoButtonsContainer.innerHTML = '';

        // Buton bilgilerini JSON formatında al
        const buttons = JSON.parse(this.getAttribute('data-buttons'));

        // Her bir buton için yeni butonlar oluştur
        buttons.forEach(buttonText => {
            const button = document.createElement('button');
            button.className = 'info-option';
            button.textContent = buttonText;

            // Her butona tıklandığında bir olay tetikle
            button.addEventListener('click', function() {
                alert(buttonText + ' butonuna tıkladınız.');
            });

            // Butonu kutucuğa ekle
            infoButtonsContainer.appendChild(button);
        });

        // Tıklanan butonun konumunu al
        const rect = this.getBoundingClientRect();

        // Bilgi kutusunu butonun hemen altına yerleştir
        infoBox.style.left = rect.left + 'px';  // Butonun sol kenarı
        infoBox.style.top = rect.bottom + 'px'; // Butonun alt kısmı
        infoBox.style.display = 'block';        // Bilgi kutusunu göster
    });
});
