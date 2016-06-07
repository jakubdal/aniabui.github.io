var index=0;
var changetime = 600;
var prefix = 'img/photography/';
var images = {
    'food': {'curr': 0, 'max': 5},
    'kamienico': {'curr':0, 'max': 6},
    'cancer': {'curr': 0, 'max': 4},
    'stephanie': {'curr': 0, 'max': 5},
    'measles': {'curr': 0, 'max': 5},
    'nyclights': {'curr': 0, 'max': 6},
};

function set_imgname() {
    $('.projectimage').each( function () {
        if(!$(this).is(':hover')) {
            var imgname = $(this).parent().next('p').text().toLowerCase().replace(/[^a-z0-9]+/gi, '');
            $(this).attr('src',  prefix + imgname + '_' + images[imgname].curr + '.jpg');
            images[imgname].curr = (images[imgname].curr+1)%images[imgname].max;
        }
    });
}

function reset_image(img) {
    var imgname = $(img).parent().next('p').text().toLowerCase().replace(/[^a-z0-9]+/gi, '');
    console.log(imgname);
    img.src = prefix + imgname + '_' + (images[imgname].curr == 0 ? images[imgname].max-1 : images[imgname].curr-1) + '.jpg';
}

window.onload = function() {
    setInterval(function() {
        set_imgname();
    }, changetime);
};
