// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {
    var $allVideos = $("iframe[src='//player.vimeo.com'], iframe[src='//www.youtube.com'], iframe[src*='https://www.youtube-nocookie.com'], object, embed"),
        newWidth,
        $el;

    $allVideos.each(function() {

    $(this)
        // jQuery .data does not work on object/embed elements
        .attr('data-aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
    });

    $(window).resize(function() {
        $allVideos.each(function() {
        $el = $(this);  // Automatically detects parent element and resizes according to its dimensions.
        newWidth = $el.parent().width();
        $el.width(newWidth).height(newWidth * $el.attr('data-aspectRatio'));
    });

    }).resize();
});
