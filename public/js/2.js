$(document).ready(function(){
    // Función para cargar el contenido de pc.html o android.html cuando se hace clic en el enlace correspondiente
    $('a[data-page]').click(function(event){
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        var page = $(this).data('page');
        if(page !== "inicio") {
            $('#contenido').addClass('loading').hide().load($(this).attr('href'), function(){
                $('#contenido').removeClass('loading').fadeIn(); // Agregar animación de fade in
                $('a[data-page]').parent().removeClass('active');
                $(`a[data-page="${page}"]`).parent().addClass('active');
            });
        }
    });

    // Función para cambiar la clase del navbar al hacer scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('active');
        } else {
            $('#navbar').removeClass('active');
        }
    });
});
$(document).ready(function(){
    // Función para cargar el contenido de pc.html o android.html cuando se hace clic en el enlace correspondiente
    $('a[data-page]').click(function(event){
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        var page = $(this).data('page');
        if(page !== "inicio") {
            $('#texto-principal').hide(); // Ocultar el contenido principal
            $('#contenido').addClass('loading').hide().load($(this).attr('href'), function(){
                $('#contenido').removeClass('loading').fadeIn(); // Agregar animación de fade in
                $('a[data-page]').parent().removeClass('active');
                $(`a[data-page="${page}"]`).parent().addClass('active');
            });
        }
    });
});