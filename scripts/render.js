(function () {
  const data = window.SITE_CONTENT;

  function safeLink(item) {
    if (!item.href) {
      return `<span class="link-placeholder">${item.value || item.label || "N/A"}</span>`;
    }
    const target = item.external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a href="${item.href}"${target}>${item.value || item.label || item.href}</a>`;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  document.title = data.site.title;
  setText("brand", data.site.name);
  setText("hero-eyebrow", data.site.eyebrow);
  setText("hero-name", data.site.name);
  setText("hero-subtitle", data.site.subtitle);
  const avatar = document.getElementById("hero-avatar");
  if (avatar && data.site.avatar) {
    avatar.src = data.site.avatar.src;
    avatar.alt = data.site.avatar.alt || `${data.site.name} portrait`;
  }

  const primary = document.getElementById("hero-primary");
  if (primary) {
    primary.textContent = data.site.primaryButton.label;
    primary.href = data.site.primaryButton.href;
  }

  setHTML(
    "profile-list",
    data.profile
      .map((item) => {
        const value = item.href ? safeLink(item) : item.value;
        return `<div class="profile-row"><span class="profile-label">${item.label}</span><span class="profile-value">${value}</span></div>`;
      })
      .join("")
  );

  setHTML(
    "about-text",
    `<strong>EN:</strong> ${data.about.en}<br /><br /><strong>中文:</strong> ${data.about.zh}`
  );

  setHTML(
    "research-cards",
    data.research
      .map(
        (item) =>
          `<article class="card"><h3>${item.title}</h3><p>${item.description}</p></article>`
      )
      .join("")
  );

  setText("pub-note", data.publicationsNote);

  setHTML(
    "pub-list",
    data.publications
      .map(
        (item) => `
      <li>
        <article class="pub-item">
          <h3>${item.title}</h3>
          <p class="authors">${item.authors}</p>
          <p class="meta">${item.venue}</p>
          <p class="links">${item.links.map((link) => safeLink(link)).join("")}</p>
        </article>
      </li>`
      )
      .join("")
  );

  setHTML(
    "teaching-list",
    data.teaching.map((item) => `<li>${item}</li>`).join("")
  );

  setHTML(
    "service-list",
    data.service.map((item) => `<li>${item}</li>`).join("")
  );

  setHTML(
    "contact-list",
    data.contact
      .map((item) => {
        const value = item.href ? safeLink(item) : item.value;
        return `<p>${item.label}: ${value}</p>`;
      })
      .join("")
  );

  setText("copyright", data.site.copyright);
})();
