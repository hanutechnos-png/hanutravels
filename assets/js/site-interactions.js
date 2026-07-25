(function () {
  function revealOnScroll() {
    var cards = document.querySelectorAll([
      ".hanu-home-service-card",
      ".hanu-service-quote",
      ".hanu-service-mini-card",
      ".hanu-tariff-note",
      ".hanu-terms-reveal"
    ].join(", "));

    if (!cards.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (card) {
        card.classList.add("hanu-is-visible");
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
    }, {
      threshold: 0.18
    });

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  document.addEventListener("DOMContentLoaded", revealOnScroll);
})();
