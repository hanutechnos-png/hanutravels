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
  });
})();
