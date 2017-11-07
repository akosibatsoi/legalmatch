$(document).ready(function(){
    $('#enter-zip').keyup(function() {
    var value = $(this).val();
    var exp = new RegExp('^' + value, 'i');

    $('.zip-codes .zip-code').each(function() {
        var isMatch = exp.test($('.zipnum', this).text());
        $(this).toggle(isMatch);
        });
  
    $(document).mouseup(function(){
        $(".zip-codes").hide();
        });
    if($('#enter-zip').val() == ''){
      $(".zip-codes").hide();
    }
    });

     $("#dropdown").click(function()
        {
            var x = $(this).attr('id');
            if(x == 1){
                $(".submenu").hide();
                $(this).attr('id', '0'); 
            } else {
            $(".submenu").show();
            $(this).attr('id', '1');
        }
        });

    $(".submenu").mouseup(function()
        {
            return false;
        });
    $(".category").mouseup(function()
        {
            return false;
        });
    $(document).mouseup(function()
        {
            $(".submenu").hide();
            $(".category").attr('id', '');
        });
    $(function() {
    //----- OPEN
        $('[data-popup-open]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
     
            e.preventDefault();
        });
     
        //----- CLOSE
        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
     
            e.preventDefault();
        });
    });
});

