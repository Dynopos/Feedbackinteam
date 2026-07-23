document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("postage-form");
  if (!form) return;

  const FIELD_LABELS = {
    fullName: "Nama Penuh",
    phone: "No. Telefon",
    email: "Emel",
    addressLine1: "Alamat (Baris 1)",
    addressLine2: "Alamat (Baris 2)",
    postcode: "Poskod",
    city: "Bandar",
    state: "Negeri",
    quantity: "Jumlah Kuantiti",
    orderRef: "No. Resit / Rujukan",
    notes: "Nota Tambahan",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    const lines = [];
    Object.entries(FIELD_LABELS).forEach(([key, label]) => {
      if (data[key]) lines.push(label + ": " + data[key]);
    });

    const subject = encodeURIComponent("Borang Penghantaran Barangan - Konsert INTEAM - " + (data.fullName || ""));
    const body = encodeURIComponent(lines.join("\n"));
    const mailtoUrl = "mailto:" + NOTIFY_EMAIL + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoUrl;
  });
});
