

$(document).ready(function () {
    $('.js-example-basic-single').select2();

    $.ajax({
        dataType: "json",
        url: "heroes.json",
        success: function (data) {
            $.each(data, function (i, item) {
                $('#heroes').append($('<option>', {
                    value: item[i].id,
                    text: item[i].name
                }));
            })
        }
    });
});