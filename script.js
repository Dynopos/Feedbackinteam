document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("postage-form");
  if (!form) return;

  const submitBtn = document.getElementById("submit-btn");
  const messageEl = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!GOOGLE_SHEET_ENDPOINT || GOOGLE_SHEET_ENDPOINT.includes("PASTE_YOUR")) {
      showMessage("Borang belum disambungkan ke Google Sheet. Sila lengkapkan config.js.", "error");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    data.submittedAt = new Date().toISOString();

    submitBtn.disabled = true;
    submitBtn.textContent = "Menghantar...";
    showMessage("", "");

    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });

      form.reset();
      showMessage("Terima kasih! Maklumat penghantaran anda telah berjaya dihantar.", "success");
    } catch (err) {
      showMessage("Maaf, gagal menghantar borang. Sila cuba lagi.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Hantar Maklumat";
    }
  });

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = "form-message" + (type ? " " + type : "");
  }
});
