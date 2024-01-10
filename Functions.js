function calculateTotal() {
    let size = document.querySelector('input[name="size"]:checked').value;
    let toppings = document.querySelectorAll('input[name="topping"]:checked');
    let price = 0;
    switch (size) {
      case "small":
        price = 10;
        break;
      case "medium":
        price = 12;
        break;
      case "large":
        price = 15;
        break;
    }
    for (let i = 0; i < toppings.length; i++) {
      switch (toppings[i].value) {
        case "pepperoni":
          price += 2;
          break;
        case "mushrooms":
          price += 1;
          break;
        case "olives":
          price += 1.5;
          break;
      }
    }
    alert("Your total price is $" + price.toFixed(2));
  }
  function submitOrder() {
    alert("Your order is placed. Please wait for your turn.");
  }
  let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Your order is placed. Please wait for your turn.");
});

// function submitOrder() {
//     let toppings = [];
//     let checkboxes = document.getElementsByName("topping");
//     for (let i = 0; i < checkboxes.length; i++) {
//       if (checkboxes[i].checked) {
//         toppings.push(checkboxes[i].value);
//       }
//     }
//     if (toppings.length > 0) {
//       alert("You ordered a pizza with the following toppings: " + toppings.join(", "));
//     } else {
//       alert("Please select at least one topping.");
//     }
//   }
//   function submitOrder() {
//     let toppings = [];
//     let checkboxes = document.getElementsByName("topping");
//     for (let i = 0; i < checkboxes.length; i++) {
//       if (checkboxes[i].checked) {
//         toppings.push(checkboxes[i].value);
//       }
//     }
//     if (toppings.length > 0) {
//       alert("Your order is successful. Please wait for your turn.");
//     } else {
//       alert("Please select at least one topping.");
//     }
//   }
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  