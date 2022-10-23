let tes = localStorage.getItem("id");
console.log(tes);

async function data() {
  let api = await fetch("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien/" + tes);
  let hasilApi = await api.json();
  console.log(hasilApi);
  let finalApi = await hasilApi;
  let identitas = document.getElementById("identitas");

  identitas.innerHTML = `
<div class="head-isi">
  <h1>Data Pasien</h1>
  <h6>Identitas Pasien</h6>
</div>
<div class="id-pasien">
<div class="isi-id">
<div class="mb-3">
<div class="p-2">
<h5>NIK</h5>
        <p>${finalApi.NIK}</p>
      </div>
      <div class="p-2">
      <h5>Jenis Kelamin</h5>
      <p>${finalApi.jenisKelamin}</p>
      </div>
      <div class="p-2">
        <h5>Pekerjaan</h5>
        <p>${finalApi.pekerjaan}</p>
      </div>
    </div>
    <div class="mb-3">
      <div class="p-2">
        <h5>Nama Lengkap</h5>
        <p>${finalApi.namaLengkap}</p>
      </div>
      <div class="p-2">
        <h5>Tanggal lahir</h5>
        <p>${finalApi.tanggalLahir}</p>
        </div>
        <div class="p-2">
        <h5>Alergi Obat</h5>
        <p>${finalApi.alergiObat[0]}</p>
        </div>
        </div>
    <div class="mb-3">
    <div class="p-2">
    <h5>Umur</h5>
        <p>${finalApi.umur}</p>
        </div>
        <div class="p-2">
        <h5>Alamat</h5>
        <p>${finalApi.alamat}</p>
        </div>
        <div class="p-2">
        <h5>Konsultasi Pertama</h5>
        <p>${finalApi.konsultasiPertama}</p>
      </div>
    </div>
  </div>
</div>
`;
}

data();
