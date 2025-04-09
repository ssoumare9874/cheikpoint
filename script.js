document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    // Mise à jour du prix total
    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalPriceElement.textContent = `${total}€`;
    }

    // Augmenter la quantité
    cartItems.forEach(item => {
        const increaseButton = item.querySelector('.increase');
        const decreaseButton = item.querySelector('.decrease');
        const quantityElement = item.querySelector('.quantity');

        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    // Supprimer un article
    cartItems.forEach(item => {
        const removeButton = item.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
    });

    // Aimer un article
    cartItems.forEach(item => {
        const likeButton = item.querySelector('.like');
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    // Initialiser le prix total
    updateTotalPrice();
});
