document.addEventListener("DOMContentLoaded", function () {
  // Override styles of the footnotes.
  document.querySelectorAll("d-footnote").forEach(function (footnote) {
    if (footnote.shadowRoot) {
      const span = footnote.shadowRoot.querySelector("span");
      if (span) {
        span.style.color = "var(--global-hover-color)";
      }
    }
  });

  // Override styles of the citations.
  document.querySelectorAll("d-cite").forEach(function (citation) {
    if (citation.shadowRoot) {
      const span = citation.shadowRoot.querySelector("span");
      if (span) {
        span.style.color = "var(--global-hover-color)";
      }
      let styleElement = citation.shadowRoot.querySelector("style");
      if (!styleElement) {
        styleElement = document.createElement("style");
        citation.shadowRoot.appendChild(styleElement);
      }

      const styleSheet = styleElement.sheet;
      if (styleSheet) {
        styleSheet.insertRule("ul li a {color: var(--global-text-color) !important; text-decoration: none;}", styleSheet.cssRules.length);
        styleSheet.insertRule("ul li a:hover {color: var(--global-theme-color) !important;}", styleSheet.cssRules.length);
      }
    }
  });
});
