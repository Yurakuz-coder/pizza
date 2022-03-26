;
(function() {
    if (typeof ymaps === 'undefined') {
        return;
    }

    ymaps.ready(function() {
        var myMap = new ymaps.Map('ymap', {
                center: [56.122846, 93.338057],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г.Сосновоборск, ул. Ленинского Комсомола д. 4'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/common/marker.svg',
                iconImageSize: [40, 63.2],
                iconImageOffset: [-27, -40]
            });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    });


})();