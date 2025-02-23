let previewContainer = document.querySelector('.produkt-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.showcase .produkt').forEach(produkt => {
    produkt.onclick = () => {
        previewContainer.style.display = 'flex'; 

        let name = produkt.getAttribute('data-name');
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name === target) {
                preview.classList.add('active');
            } else {
                preview.classList.remove('active');
            }
        });
    };
});

previewBoxes.forEach(preview => {
    let closeBtn = preview.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = () => {
            preview.classList.remove('active');
            previewContainer.style.display = 'none';  
        };
    }
});