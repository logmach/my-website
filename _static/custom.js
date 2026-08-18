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

/* ── Fix: tombol toggle sidebar tidak berfungsi ──
   Theme merender 2 tombol .primary-toggle (satu tersembunyi di navbar,
   satu terlihat di header artikel), tetapi listener JS theme hanya
   menempel pada tombol PERTAMA (yang tersembunyi). Akibatnya tap di
   mobile maupun klik di desktop tidak membuka sidebar.
   Solusi: teruskan klik dari tombol yang terlihat ke tombol pertama.
   Catatan: hapus blok ini jika upgrade sphinx-book-theme /
   pydata-sphinx-theme kelak sudah memperbaiki bug ini. */
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".primary-toggle");
  if (toggles.length < 2) return;
  for (let i = 1; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function (ev) {
      const dlg = document.getElementById("pst-primary-sidebar-modal");
      if (dlg && dlg.open) return; /* sudah terbuka, jangan dobel */
      ev.preventDefault();
      toggles[0].click();
    });
  }
});
