document.addEventListener("DOMContentLoaded", function () {
  const kunci = "cek:" + location.pathname;
  let simpan = [];
  try { simpan = JSON.parse(localStorage.getItem(kunci) || "[]"); } catch (e) {}
  const items = [];
  document.querySelectorAll("article li").forEach(function (li) {
    const t = li.firstChild;
    if (t && t.nodeType === 3 && t.textContent.trimStart().startsWith("☐")) {
      t.textContent = t.textContent.replace(/^\s*☐\s*/, "");
      li.classList.add("cek");
      items.push(li);
    }
  });
  items.forEach(function (li, idx) {
    if (simpan[idx]) li.classList.add("done");
    li.addEventListener("click", function () {
      li.classList.toggle("done");
      localStorage.setItem(kunci, JSON.stringify(items.map(x => x.classList.contains("done") ? 1 : 0)));
    });
  });
});
