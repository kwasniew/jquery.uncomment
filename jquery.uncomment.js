(function ($) {
    $.fn.uncomment = function () {
        this.contents().
            filter(function() {
                return this.nodeType === Node.COMMENT_NODE;
            }).
            replaceWith(function() {
                return this.data;
            });
        return this;
    };
})(jQuery);