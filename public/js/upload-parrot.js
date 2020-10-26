$(document).ready(function() {
        let imagesPreview = function(input, placeToInsertImagePreview) {
          if (input.files) {
            let filesAmount = input.files.length;
            for (i = 0; i < filesAmount; i++) {
              let reader = new FileReader();
              reader.onload = function(event) {
                $($.parseHTML("<img>"))
                  .attr("src", event.target.result)
                  .appendTo(placeToInsertImagePreview);
              };
              reader.readAsDataURL(input.files[i]);
            }
          }
        };
        $("#input-files").on("change", function() {
          imagesPreview(this, "div.preview-images");
        });
        $( "#create-parrot" ).click(function() {
          console.log("test 2");
          createParrot();
        });  


        function createParrot(event) {
          // Make sure to preventDefault on a submit event.
          event.preventDefault();
          console.log("test 1");
        
          var newParrot = {
            name: $(".name").val().trim(),
            age: $(".age").val().trim(),
            species: $(".species").val().trim(),
            desc: $(".desc").val().trim()
          };
        
          // Send the POST request.
          $.ajax("/api/upload/file", {
            type: "POST",
            data: newParrot
          }).then(
            function() {
              console.log("created new parrot");
              // Reload the page to get the updated list
              location.reload();
            }
          );
          }
        
});

