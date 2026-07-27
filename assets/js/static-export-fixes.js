(function () {
  var NativeMutationObserver = window.MutationObserver;

  if (NativeMutationObserver && !NativeMutationObserver.__hanuSafeObserve) {
    var originalObserve = NativeMutationObserver.prototype.observe;

    NativeMutationObserver.prototype.observe = function (target, options) {
      if (!target || !target.nodeType) {
        return;
      }

      return originalObserve.call(this, target, options);
    };

    NativeMutationObserver.__hanuSafeObserve = true;
  }

  function onReady(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }

    document.addEventListener("DOMContentLoaded", callback);
  }

  function labelLink(link, label) {
    if (!link.getAttribute("aria-label") && link.textContent.trim().length < 2) {
      link.setAttribute("aria-label", label);
    }
  }

  function addToken(current, token) {
    var values = current ? current.split(/\s+/) : [];
    if (values.indexOf(token) === -1) {
      values.push(token);
    }
    return values.join(" ").trim();
  }

  onReady(function () {
    var mainTarget = document.getElementById("hanu-main-content");
    var visibleMain = document.querySelector("main, #main, .site-main, .site-content, .entry-content, .elementor");

    if (!mainTarget && visibleMain) {
      if (!visibleMain.id) {
        visibleMain.id = "hanu-main-content";
        mainTarget = visibleMain;
      } else {
        mainTarget = document.createElement("span");
        mainTarget.id = "hanu-main-content";
        mainTarget.className = "hanu-main-anchor";
        visibleMain.parentNode.insertBefore(mainTarget, visibleMain);
      }
    }

    if (mainTarget) {
      mainTarget.setAttribute("tabindex", "-1");
      if (!document.querySelector("main") && !mainTarget.getAttribute("role")) {
        mainTarget.setAttribute("role", "main");
      }
    }

    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      link.setAttribute("rel", addToken(addToken(link.getAttribute("rel"), "noopener"), "noreferrer"));
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      labelLink(link, "Call Hanu Travels");
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
      labelLink(link, "Email Hanu Travels");
    });

    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(function (link) {
      labelLink(link, "Contact Hanu Travels on WhatsApp");
    });

    document.querySelectorAll('a[href*="instagram.com"]').forEach(function (link) {
      labelLink(link, "Hanu Travels Instagram");
    });

    document.querySelectorAll('a[href*="youtube.com"]').forEach(function (link) {
      labelLink(link, "Hanu Travels YouTube");
    });

    document.querySelectorAll('a[aria-disabled="true"]').forEach(function (link) {
      link.setAttribute("tabindex", "-1");
    });

    var currentPath = window.location.pathname.replace(/\/index\.html$/, "/");

    document.querySelectorAll("nav a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href.indexOf("#") === 0 || href.indexOf("javascript:") === 0) {
        return;
      }

      try {
        var url = new URL(href, window.location.href);
        var linkPath = url.pathname.replace(/\/index\.html$/, "/");
        if (url.origin === window.location.origin && linkPath === currentPath) {
          link.setAttribute("aria-current", "page");
        }
      } catch (error) {
        return;
      }
    });

    var revealTargets = document.querySelectorAll([
      ".hanu-about-reveal",
      ".hanu-about-section-title",
      ".hanu-about-card",
      ".hanu-service-quote",
      ".hanu-service-mini-card",
      ".hanu-tariff-note",
      ".hanu-faq-reveal",
      ".hanu-faq-item",
      ".hanu-terms-reveal",
      ".hanu-contact-reveal",
      ".hanu-contact-card",
      ".hanu-contact-form-panel",
      ".hanu-contact-support",
      ".hanu-quote-reveal",
      ".hanu-quote-panel",
      ".hanu-quote-side",
      ".hanu-quote-estimator",
      ".hanu-testimonial-reveal",
      ".hanu-testimonial-card",
      ".hanu-home-service-card",
      ".hanu-package-reveal",
      ".hanu-package-card",
      ".elementor-1333 .elementor-element-9db8aa9",
      ".elementor-1333 .elementor-element-cbeda0f",
      ".elementor-1333 .elementor-element-e37c3db",
      ".elementor-1333 .elementor-element-b2b6ae9",
      ".elementor-1333 .elementor-element-38e0ae2",
      ".elementor-1333 .elementor-element-6b27b9a",
      ".elementor-1333 .elementor-element-4200574",
      ".elementor-1333 .elementor-element-00fcb89",
      ".elementor-1333 .elementor-element-e5927c3"
    ].join(","));

    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("hanu-is-visible");
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      });

      revealTargets.forEach(function (target) {
        revealObserver.observe(target);
      });
    } else {
      revealTargets.forEach(function (target) {
        target.classList.add("hanu-is-visible");
      });
    }

    if (document.querySelector(".elementor-1333")) {
      window.requestAnimationFrame(function () {
        document.querySelectorAll([
          ".elementor-1333 .elementor-element-b2b6ae9",
          ".elementor-1333 .elementor-element-38e0ae2",
          ".elementor-1333 .elementor-element-6b27b9a"
        ].join(",")).forEach(function (target) {
          target.classList.add("hanu-is-visible");
        });
      });
    }

    document.querySelectorAll(".hfe-nav-menu__toggle").forEach(function (toggle) {
      var wrapper = toggle.closest(".hfe-nav-menu");
      var nav = wrapper ? wrapper.querySelector("nav") : null;

      if (!wrapper || !nav || toggle.__hanuMenuReady) {
        return;
      }

      toggle.__hanuMenuReady = true;
      toggle.setAttribute("role", "button");
      toggle.setAttribute("tabindex", "0");
      toggle.setAttribute("aria-label", "Menu");
      toggle.setAttribute("aria-expanded", "false");

      function setOpen(isOpen) {
        wrapper.classList.toggle("hanu-mobile-menu-open", isOpen);
        nav.classList.toggle("hanu-mobile-menu-open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }

      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        setOpen(!wrapper.classList.contains("hanu-mobile-menu-open"));
      });

      toggle.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setOpen(!wrapper.classList.contains("hanu-mobile-menu-open"));
        }
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setOpen(false);
        });
      });
    });
  });
})();
