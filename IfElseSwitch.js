function validateForm() {
    const age = document.forms[0]["age"].value;
    const country = document.forms[0]["country"].value;
  
    if (age > 17 && country === "UK") {
      alert("Yes I can serve you");
    } else if (age < 18) {
      alert("You aren't old enough");
    } else {
      switch (country) {
        case "USA":
          alert("Sorry, we don't serve the USA");
          break;
        case "Canada":
          alert("Sorry, we don't serve Canada");
          break;
        default:
          alert("Sorry, we don't serve that country");
          break;
      }
    }
  }
  