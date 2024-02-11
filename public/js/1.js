$(document).ready(function(){
    $('#searchInput').on('keyup', function(){
      var searchText = $(this).val().toLowerCase();
      var hasResults = false;
      $('#cardContainer .card').each(function(){
        var titleText = $(this).find('.card-title').text().toLowerCase();
        if(titleText.indexOf(searchText) !== -1){
          $(this).closest('.col-sm-6').show();
          hasResults = true;
        } else {
          $(this).closest('.col-sm-6').hide();
        }
      });
      if (!hasResults) {
        $('#searchResults').html('<div class="col-md-12">Sin resultados</div>');
      } else {
        $('#searchResults').html('');
      }
    });
  });