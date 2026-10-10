(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  var filters = document.querySelectorAll(".filter");
  var items = document.querySelectorAll(".menu-item");

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      filters.forEach(function (item) {
        item.classList.remove("is-active");
      });
      button.classList.add("is-active");

      var type = button.getAttribute("data-filter");
      items.forEach(function (card) {
        var show = type === "all" || card.getAttribute("data-category") === type;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  var form = document.getElementById("reserve-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var date = form.date.value;
      var time = form.time.value;
      var guests = form.guests.value;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !date || !time || !guests) {
        status.textContent = "Please complete every field.";
        return;
      }

      if (!emailOk) {
        status.textContent = "Please enter a valid email address.";
        return;
      }

      status.textContent =
        "Thanks, " + name + ". Table request noted in the browser only.";
      form.reset();
    });
  }
})();