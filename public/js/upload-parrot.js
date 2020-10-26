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
        
    function Submit(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newParrot = {
      name: $("#ca").val().trim(),
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
  };






      });


