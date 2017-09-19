(function ($) {
  $(function () {

    $('#add-project').on('click', request);

    function request(e) {
        e.preventDefault();
		if (true) {
		  $('#authModal').modal('show');
		} else {
        /*var text = $('#search__field').val();

        $.ajax({
          url: '',
          data: {
            limit: ,
            tag: text
          },
          dataType: 'json',
          success: function (data) {
            div.innerHTML = '';
            if (data.results.length != 0) {
              $.each(data.results, function (i, val) {
                var img = document.createElement('img');
                img.src = val.itemurl;
                img.title = val.title;
                img.style.width = '30%';
                div.appendChild(img);
              });
            } else {
              div.innerText ='Ничего не найдено, попробуйте еще раз';
            }
          }
        });*/
		}
      }
  });
})(jQuery);