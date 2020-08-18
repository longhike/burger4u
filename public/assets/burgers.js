$(() => {
    $(".devour-burger").on("click", (e) => {
      e.preventDefault()
      let id = $(this).data("id")
      console.log(id);
      let defDevoured = $(this).data("newBurger")
      console.log(defDevoured);
  
      let newDevouredState = {
        devoured: defDevoured
      }
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      })
      .then(() => {
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
  