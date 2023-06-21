function toggleIcon() {
    var icon = document.getElementById("toggle-icon");
  
    if (icon.classList.contains("fa-toggle-off")) {
      icon.classList.remove("fa-toggle-off");
      icon.classList.add("fa-toggle-on");
    } else {
      icon.classList.remove("fa-toggle-on");
      icon.classList.add("fa-toggle-off");
    }
  }
  