$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevouredState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("button submit");

    var newBurger = {
      burger_name: $("#burgName").val().trim(),
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
