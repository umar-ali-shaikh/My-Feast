import { LANG } from "./language";

export function changeLanguage(code) {
  const items = document.querySelectorAll(".lang");

  items.forEach((el) => {
    const key = el.getAttribute("data-key");

    if (LANG[code] && LANG[code][key]) {
      el.innerHTML = LANG[code][key];      
    }
  });

  localStorage.setItem("site_lang", code);
}
