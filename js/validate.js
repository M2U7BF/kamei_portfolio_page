$(function(){
    $('input[type="submit"]').click(function(){

        if($('.jsc_form').val().length > 0){
            return true;
        }

        console.log("button");

        // クリックイベントなどを一旦とめる
        return false;
        // $('.className')
    });
});