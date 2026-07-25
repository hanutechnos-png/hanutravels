(function () {
  function setupReveal() {
    var items = document.querySelectorAll(".hanu-testimonial-reveal");

    if (!items.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("hanu-is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("hanu-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function setupFeaturedReview() {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".hanu-testimonial-card"));
    var text = document.querySelector(".hanu-testimonial-feature-text");
    var name = document.querySelector(".hanu-testimonial-feature-name");
    var type = document.querySelector(".hanu-testimonial-feature-type");
    var currentIndex = 0;

    if (!cards.length || !text || !name || !type) {
      return;
    }

    function showReview(index) {
      var card = cards[index];

      if (!card) {
        return;
      }

      currentIndex = index;
      text.textContent = card.getAttribute("data-review") || card.querySelector("p").textContent;
      name.textContent = card.getAttribute("data-author") || card.querySelector("strong").textContent;
      type.textContent = card.getAttribute("data-type") || card.querySelector("span").textContent;

      cards.forEach(function (item, itemIndex) {
        item.classList.toggle("is-active", itemIndex === currentIndex);
      });
    }

    cards.forEach(function (card, index) {
      card.setAttribute("tabindex", "0");
      card.addEventListener("click", function () {
        showReview(index);
      });
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showReview(index);
        }
      });
    });

    showReview(0);

    window.setInterval(function () {
      showReview((currentIndex + 1) % cards.length);
    }, 4200);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupReveal();
    setupFeaturedReview();
  });
})();
