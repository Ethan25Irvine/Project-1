// Shorthand for $( document ).ready()
$(function() {
    $("#searchTerm").keypress(function(e){
        if(e.keyCode===13){
            var searchTerm = $("#searchTerm").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charsest=utf-8",
                async: false,
                dataType: "json",
                success: function(data, status, jqXHR){
                    $("#output").html();
                    for(var i=0; i < data[1].length;i++){
                        console.log(data);
                        $("#output").prepend("<div><div class='btn-primary'><a href="
                        +data[3][i]+"><h1>" + data[1][i]+ "</h1>" + "<p>" + data[2][i] +
                        "</p></a></div></div>");
                    }
    
                },
            })
        }
    });

    $('#search').on("click", function(){
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
        + searchTerm + "&format=json&callback=?";
        /* var url = "https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:" 
        + searchTerm + "&cmlimit=20&format=json&callback=?"; */

        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charsest=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR){
                $("#output").html();
                for(var i=0; i < data[1].length;i++){
                console.log(data);
                    $("#output").prepend("<div><div class='btn-primary'><a href="
                    +data[3][i]+"><h1>" + data[1][i]+ "</h1>" + "<p>" + data[2][i] +
                    "</p></a></div></div>");
                }

            },
        })
        .done(function(){
            console.log("success");
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("complete");
        });
    });
});