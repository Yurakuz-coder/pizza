;
(function() {
    var catalog = document.querySelector('.catalog');
    if (catalog === null) {
        return;
    }

    var updateProductPrice = function(product, price) {
        var productPrice = product.querySelector('.product__price-value');
        productPrice.textContent = price;
    };

    var changeProductSize = function(target) {
        var product = myLib.closestItemByClass(target, 'product');
        var previousBtnActive = product.querySelector('.product__size.is-active');
        var newPrice = target.getAttribute('data-product-size-price');

        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
        updateProductPrice(product, newPrice);
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('product__size')) {
            e.preventDefault();
            changeProductSize(target);
        }
    });
})();