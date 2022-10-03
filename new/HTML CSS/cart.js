$(document).ready(function() {
    $('#adminPage').hide();
    if(sessionStorage.getItem("name")=="Admin"){
        $('#adminPage').show();
    }

    fetchData();
    // FETCHING DATA FROM JSON FILE
    function fetchData() {

        $.getJSON(" http://localhost:3000/posts",
            function(data) {
                var user = '';

                // ITERATING THROUGH OBJECTS
                $.each(data, function(key, value) {
                    console.log(key);
                    //CONSTRUCTION OF ROWS HAVING
                    // DATA FROM JSON OBJECT
                    user += '<tr>';
                    user += '<td >' +
                        value.food_item + '</td>';

                    user += '<td >' +
                        value.food_name + '</td>';

                    user += '<td> <buttton><a href="#" aid=' + value.id + ' onclick="acceptItem(this)">Cart Item Added</a></button></td>';
                    user += '<td> <buttton><a href="#" aid=' + value.id + ' onclick="deleteItem(this)">Cart Item Delete</a></button></td>';

                    user += '</tr>';
                });

                //INSERTING ROWS INTO TABLE
                $('#table').append(user);
            });
    }
});


// function acceptQuestion(a) {


//     var id1 = $(a).attr('aid');

//     $.getJSON("http://localhost:3000" + id1,
//         function(data) {
//             let record = {
//                 "title": data.title,
//                 "question": data.question
//             }
//             $.ajax({
//                 url: "http://localhost:3000",
//                 type: "post",
//                 data: record,
//                 dataType: 'JSON',
//                 success: function() {

//                     deleteQuestion(a);
//                 },
//                 error: function() {
//                     console.log("succesffully");
//                 }

//             });
//         });

// }

function deleteItem(id) {
    var key;
    if (confirm('Are you sure?')) {
        key = $(id).attr('aid');
    }

    $.ajax({
        url: " http://localhost:3000/posts/ " + key,
        type: "DELETE",
        dataType: 'JSON',
        success: function() {
            console.log("done")
        },
        error: function() {
            console.log("done")
        }

    });

}

