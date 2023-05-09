$(document).ready(function(){
    var $container = $('#container');
    var $snbWrap = $('#container .snb-wrap');
    var $btnFold = $('#container .snb-wrap .btn-fold');
    $btnFold.on('click', function(){
        var $this = $(this);
        if ($this.hasClass('fold')) {
            $this.removeClass('fold');
            $container.removeClass('fold');
            $snbWrap.removeClass('fold');
        } else {
            $this.addClass('fold');
            $container.addClass('fold');
            $snbWrap.addClass('fold');
        }
    })
});


