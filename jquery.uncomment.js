(function ($) {
    $.fn.uncomment = function () {
        this.contents().
            filter(function() {
                return this.nodeType === 8; // comment
            }).
            replaceWith(function() {
                return this.data;
            });
        return this;
    };
})(jQuery);