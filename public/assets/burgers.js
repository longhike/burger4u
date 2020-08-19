$(function() {
    $(".devour-burger").on("click", function(e) {
      e.preventDefault()
      let id = $(this).attr("id")
      console.log(id);
      let defDevoured = $(this).data("newburger")
      console.log(defDevoured);
  
      let newDevouredState = {
        devoured: defDevoured
      }
      console.log(newDevouredState);
      console.log("Hello world");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      })
      .then(() => {
        console.log("works");  
        console.log("changed devoured status to " + defDevoured)
        location.reload()
        }
      )
    })
  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#newBurger").val().trim()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      })
      .then(() => {
          console.log("success!")
          location.reload()
        }
      )
    })
  })
  