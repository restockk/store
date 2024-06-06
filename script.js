document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { specialOffer: true, title: 'Termo Stanley Quencher H2.0', price: '$35.00 USD', rating: 5, image: './img/imgProductos/termoStanly.jpg', link:'https://amzn.to/4bVahG5', category: ['h', 'd']},
        { specialOffer: true, title: 'Samsung Tab S9 FE 128gb', price: '$369.00 USD', rating: 4, image: './img/imgProductos/samsungTab.jpg', link:'https://amzn.to/451HJbB', category: ['t']},
        { specialOffer: true, title: 'Auriculares Sony WH-CH520', price: '$38.00 USD', rating: 5, image: './img/imgProductos/auricularesSony.webp', link:'https://amzn.to/3VjdTLB', category: ['t']},
        { specialOffer: true, title: 'Cámara TP-Link 1080P', price: '$15.99 USD', rating: 5, image: './img/imgProductos/camara.jpg', link:'https://amzn.to/3WVG0CS', category: ['h', 't']},
        { specialOffer: true, title: 'Mini Cámara inalámbrica Wifi', price: '$23.99 USD', rating: 4, image: './img/imgProductos/minicamara.jpg', link:'https://amzn.to/3V4BiQr', category: ['h', 't']},
        { specialOffer: true, title: '4 Lámparas LED enchufable', price: '$9.99 USD', rating: 5, image: './img/imgProductos/luzenchufable.jpg', link:'https://amzn.to/3Kpbnhu', category: ['h']},
        { specialOffer: true, title: 'Humificador ASAKUKI', price: '$25.99 USD', rating: 5, image: './img/imgProductos/humificador.jpg', link:'https://amzn.to/4e2THWQ', category: ['h']},
        { specialOffer: true, title: 'Juego de escoba y recogedor', price: '$26.99 USD', rating: 4, image: './img/imgProductos/juegodeescobayrecogedor.jpg', link:'https://amzn.to/4e3PaDi', category: ['h']},
        { specialOffer: true, title: 'Timbre inalámbrico SECRUI', price: '$17.99 USD', rating: 4, image: './img/imgProductos/timbre.jpg', link:'https://amzn.to/455pMsH', category: ['h']},
        { specialOffer: true, title: '50 Ganchos antideslizantes', price: '$21.89 USD', rating: 5, image: './img/imgProductos/ganchos.jpg', link:'https://amzn.to/3V0Uqio', category: ['h']},
        { specialOffer: true, title: 'Cámara GoPro HERO12 Black', price: '$299.99 USD', rating: 5, image: './img/imgProductos/gopro.jpg', link:'https://amzn.to/3x1eYzo', category: ['t', 'd']},
        { specialOffer: true, title: 'Repetidor Wifi TP-Link AC1200', price: '$22.99 USD', rating: 5, image: './img/imgProductos/amplificadorwifi.jpg', link:'https://amzn.to/3x2JAR5', category: ['t']},
        { specialOffer: true, title: 'SAMSUNG Galaxy Tab A9+ 128gb', price: '$22.99 USD', rating: 5, image: './img/imgProductos/samsungTabA9.jpg', link:'https://amzn.to/454O8TC', category: ['t']},
        { specialOffer: true, title: 'SAMSUNG 990 PRO SSD 2TB', price: '$169.99 USD', rating: 5, image: './img/imgProductos/ssd.jpg', link:'https://amzn.to/455vefa', category: ['t']},
        { specialOffer: true, title: 'HD externo Seagate  2TB', price: '$69.99 USD', rating: 5, image: './img/imgProductos/ssdsaegate.jpg', link:'https://amzn.to/4c1LFf0', category: ['t']},
        { specialOffer: true, title: 'MNN Portable Monitor 15.6inch 1080P', price: '$89.98 USD', rating: 5, image: './img/imgProductos/monitormnn.jpg', link:'https://amzn.to/3KsKWHU', category: ['t']},
        { specialOffer: true, title: 'Lector de tarjetas SD para iPhone', price: '$9.99 USD', rating: 5, image: './img/imgProductos/lectorssdparaiphone.jpg', link:'https://amzn.to/3x2JAR5', category: ['t']},

    ];

    const productContainer = document.getElementById('cdp');
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');

    function renderStars(rating) {
        const maxStars = 5;
        let starsHTML = '';
        for (let i = 1; i <= maxStars; i++) {
            if (i <= rating) {
                starsHTML += '<span class="star filled">&#9733;</span>';
            } else {
                starsHTML += '<span class="star">&#9733;</span>';
            }
        }
        return starsHTML;
    }

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
                ${product.specialOffer ? '<div class="special-offer">Oferta Especial</div>' : ''}
                <img src="${product.image}" alt="${product.title}">
                <div class="divIntoCard">
                    <h2><a href="${product.link}">${product.title}</a></h2>
                    <div class="star-rating">
                    ${renderStars(product.rating)}
                </div>
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