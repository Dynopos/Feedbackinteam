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
    itemDetails: "Nama Barangan & Saiz",
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

    const lines = ["*Borang Penghantaran Barangan - Konsert INTEAM*", ""];
    Object.entries(FIELD_LABELS).forEach(([key, label]) => {
      if (data[key]) lines.push(label + ": " + data[key]);
    });

    const message = encodeURIComponent(lines.join("\n"));
    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message;

    window.location.href = waUrl;
  });
});
