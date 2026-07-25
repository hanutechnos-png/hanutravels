(function () {
  var phoneNumber = "919976555520";

  function clean(value) {
    return (value || "").toString().trim();
  }

  function field(form, name) {
    var input = form.querySelector("[name=\"" + name + "\"]");
    return input ? clean(input.value) : "";
  }

  function addLine(lines, label, value) {
    if (value) {
      lines.push(label + ": " + value);
    }
  }

  function buildMessage(form) {
    var context = form.getAttribute("data-form-context");
    var intro = context === "Request Quote Page"
      ? "Hi Hanu Travels, I want to request a travel quotation."
      : "Hi Hanu Travels, I want to enquire about a cab booking.";
    var lines = [intro];
    addLine(lines, "Source", context);
    addLine(lines, "Name", field(form, "name"));
    addLine(lines, "Mobile", field(form, "phone"));
    addLine(lines, "Company / Organization", field(form, "company"));
    addLine(lines, "Email", field(form, "email"));
    addLine(lines, "Service", field(form, "service"));
    addLine(lines, "Vehicle", field(form, "vehicle"));
    addLine(lines, "Pickup", field(form, "pickup"));
    addLine(lines, "Drop", field(form, "drop"));
    addLine(lines, "Travel Date", field(form, "date"));
    addLine(lines, "Pickup Time", field(form, "time"));
    addLine(lines, "Trip Type", field(form, "tripType"));
    addLine(lines, "Passengers", field(form, "passengers"));
    addLine(lines, "Message", field(form, "message"));
    return lines.join("\n");
  }

  function setupReveal() {
    var items = document.querySelectorAll(".hanu-quote-reveal");

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

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll(".hanu-enquiry-form");

    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
          return;
        }

        var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(buildMessage(form));
        window.open(url, "_blank", "noopener");
      });
    });

    setupReveal();
  });
})();
