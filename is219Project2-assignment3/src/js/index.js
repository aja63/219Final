(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "Name" },
            { "data": "Team" },
            { "data": "Position" },
            { "data": "Height_inches" },
            { "data": "Weight_lbs" },
            { "data": "Age" }

        ]
    } );

})(jQuery);