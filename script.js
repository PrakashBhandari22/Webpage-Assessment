window.addEventListener("load", () => {
  if (!localStorage.getItem("welcomeShown")) {
    alert("Welcome to Wanderlust Trails!");
    localStorage.setItem("welcomeShown", "true");
  }

  // Additional alerts (these can show every time or you can also control with localStorage)
  if (!localStorage.getItem("travelTipsShown")) {
    setTimeout(() => {
      alert("Check out our Travel Tips section!");
      localStorage.setItem("travelTipsShown", "true");
    }, 5000); // delay in milliseconds (5000ms = 5s)
  }

  if (!localStorage.getItem("newDestinationsShown")) {
    setTimeout(() => {
      alert("Explore our latest destinations!");
      localStorage.setItem("newDestinationsShown", "true");
    }, 10000); // delay in milliseconds (10s)
  }
});
