
/* =====================================
   VYN PORTFOLIO - FINAL JAVASCRIPT
===================================== */

function initializeVYN() {

  // 1. MOBILE NAVIGATION

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.textContent = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

      });

    });

    console.log("VYN navigation connected.");

  } else {

    console.error("VYN navigation elements missing.");

  }


  // 2. SECTION REVEAL ANIMATIONS

  const sections = document.querySelectorAll(".section");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));

  } else {

    sections.forEach(section => section.classList.add("visible"));

  }


  // 3. FOOTER COPYRIGHT

  const footer = document.querySelector("footer p");

  if (footer) {

    footer.textContent =
      `© ${new Date().getFullYear()} VYN. All rights reserved.`;

  }


  // 4. PROJECT INTERACTIONS

  document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("click", function () {

      this.classList.toggle("selected");

    });

  });


  // 5. SYSTEM STATUS

  console.log("VYN Portfolio system online.");
  console.log("All interactions initialized.");

}


// HANDLE BOTH LOADING SITUATIONS

if (document.readyState === "loading") {

  document.addEventListener("DOMContentLoaded", initializeVYN);

} else {

  initializeVYN();

}
