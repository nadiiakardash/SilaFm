function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "700px";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function seemore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "EЩЕ";
      moreText.style.display = "none";
  
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "МЕНЬШЕ";
      moreText.style.display = "inline";
  
    }
  }
  