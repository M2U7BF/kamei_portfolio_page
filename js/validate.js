$(function(){
    $('input[type="submit"]').click(function(){

        if($('.jsc_form').val().length > 0){
            return true;
        }else{
            $('.jsc_form').addClass("is_error");
        }

        console.log("");

        // クリックイベントなどを一旦とめる
        return false;
        // $('.className')
    });
});