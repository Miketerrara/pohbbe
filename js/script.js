const _element = {
    btnFaq: document.querySelectorAll('.box-faq'),    
}


let faqView = [
    document.getElementById('faq1'),
    document.getElementById('faq2'),
    document.getElementById('faq3'),
];

_element.btnFaq.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        
        faqView.forEach(reset => {
            reset.style.display = 'none'
            reset.addEventListener('click', () => {
                reset.style.display = 'none'
            })
        });

        switch(index) {
            case 0:
            faqView[0].style.display = 'block';
            break
            case 1: 
            faqView[1].style.display = 'block';
            break
            case 2: 
            faqView[2].style.display = 'block';
            break            
            default:
            console.warn('Indice inválido: ', index);
        }
        
        
        
    })
});


