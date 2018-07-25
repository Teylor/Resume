

$(document).ready(function () {
    $('#heroes-selector').select2();

    $.ajax({
        dataType: "json",
        url: "heroes.json",
        success: function (data) {
            $.each(data, function (i, item) {
                $('#heroes-selector').append($('<option>', {
                    value: item.id,
                    text: item.name
                }));
            })
        }
    });
});