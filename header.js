
$(document).ready(function(){

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            document.getElementById("cabecera").className="navbar2";
        } else{
            document.getElementById("cabecera").className="navbar";
        }
    });

        $('a[href^="#"]').click(function() {
          var destino = $(this.hash);
          if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
          }
          if (destino.length == 0) {
            destino = $('html');
          }
          $('html, body').animate({ scrollTop: destino.offset().top-100 }, 1000);
          return false;
        });
});