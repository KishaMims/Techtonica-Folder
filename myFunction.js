function emailForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please enter your email to sign up for more recipes!");
      return false;
    }
  }
  function color() {
    var x = Math.floor(Math.random() * 220);
    var y = Math.floor(Math.random() * 220);
    var z = Math.floor(Math.random() * 220);

    document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
  }