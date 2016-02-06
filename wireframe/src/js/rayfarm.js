/*

RayFarm JS
Author: Abhay Arora.
Copyright (c) 2016, RayFarm.

 */

(function(_W){

    _D = _W.document;
    _B = _D.body;

    $(document).ready(function () {
        $('.slider').unslider({
            autoplay: true,
            animation: 'vertical',
            infinite: true,
            arrows: false
        });
        $('.app-slider').unslider({
            autoplay: true,
            infinite: true,
            arrows: false
        });

        $('#searchClick').click(function () {
            var type = $('#searchType').val();
            var keywords = $('#searchTerms').val().replace(/ /g,'+');
            window.location.replace("http://rayfarm.in/search/#/" + type + '/' + keywords);
        });

    });

})(window);

