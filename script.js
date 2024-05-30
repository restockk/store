document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'Termo Stanley Quencher H2.0', price: '$35.00 USD', image: './img/imgProductos/termoStanly.jpg', link:'https://amzn.to/4bVahG5', category: ['h', 'd']},
        { title: 'Samsung Tab S9 FE 128gb', price: '$369.00 USD', image: './img/imgProductos/samsungTab.jpg', link:'https://amzn.to/451HJbB', category: ['t']},
        { title: 'Auriculares Sony WH-CH520', price: '$38.00 USD', image: './img/imgProductos/auricularesSony.webp', link:'https://amzn.to/3VjdTLB', category: ['t']},
        { title: 'Cámara TP-Link 1080P', price: '$15.99 USD', image: './img/imgProductos/camara.jpg', link:'https://amzn.to/3WVG0CS', category: ['h', 't']},
        { title: 'Mini Cámara inalámbrica Wifi', price: '$23.99 USD', image: './img/imgProductos/minicamara.jpg', link:'https://amzn.to/3V4BiQr', category: ['h', 't']},
        { title: '4 Lámparas LED enchufable', price: '$9.99 USD', image: './img/imgProductos/luzenchufable.jpg', link:'https://amzn.to/3Kpbnhu', category: ['h']},
        { title: 'Humificador ASAKUKI', price: '$25.99 USD', image: './img/imgProductos/humificador.jpg', link:'https://amzn.to/4e2THWQ', category: ['h']},
        { title: 'Juego de escoba y recogedor', price: '$26.99 USD', image: './img/imgProductos/juegodeescobayrecogedor.jpg', link:'https://amzn.to/4e3PaDi', category: ['h']},
        { title: 'Timbre inalámbrico SECRUI', price: '$17.99 USD', image: './img/imgProductos/timbre.jpg', link:'https://amzn.to/455pMsH', category: ['h']},
        { title: '50 Ganchos antideslizantes', price: '$21.89 USD', image: './img/imgProductos/ganchos.jpg', link:'https://amzn.to/3V0Uqio', category: ['h']},
        
    ];

    const productContainer = document.getElementById('cdp');
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');

    function renderProducts(filter = '', category = 'a') {
        productContainer.innerHTML = '';

        const filteredProducts = products.filter(product => {
            const matchesTitle = product.title.toLowerCase().includes(filter.toLowerCase());
            const matchesCategory = category === 'a' || product.category.includes(category);
            return matchesTitle && matchesCategory;
        });

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="divIntoCard">
                    <h2><a href="${product.link}">${product.title}</a></h2>
                    <p>${product.price}</p>
                    <a class="botonComprar" href="${product.link}">Comprar</a>
                </div>
            `;
            productContainer.appendChild(card);
        });
    }

    searchInput.addEventListener('input', () => {
        renderProducts(searchInput.value, categorySelect.value);
    });

    categorySelect.addEventListener('change', () => {
        renderProducts(searchInput.value, categorySelect.value);
    });

    renderProducts();
});