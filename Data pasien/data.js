let tes = localStorage.getItem("id");
let akord = document.getElementById("accordionExample");
async function data() {
  let api = await fetch("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien/" + tes);
  let hasilApi = await api.json();
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

  akord.innerHTML += `
  <div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Periksa 1</button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div>
        <ul>
          <li><h5>Tanggal Periksa</h5></li>
          <h6>${finalApi.riwayatPenyakit[0].tanggalBerobat}</h6>
          <li><h5>Anamnesis</h5></li>
          <h6>${finalApi.riwayatPenyakit[0].anamnesis}</h6>
          <li><h5>Diagnosa</h5></li>
          <h6>${finalApi.riwayatPenyakit[0].diagnosis}</h6>
        </ul>
      </div>
      <div>
        <ul>
          <li><h5>Obat</h5></li>
          <h6>${finalApi.riwayatPenyakit[0].obat}</h6>
          <li><h5>Catatan</h5></li>
          <h6>${finalApi.riwayatPenyakit[0].catatan}</h6>
        </ul>
      </div>  
    </div>
  </div>
  </div>
  `;
  for (let i = 0; i < finalApi.riwayatPenyakit.length; i++) {
    akord.innerHTML += `
          <div class="accordion-item">
          <h2 class="accordion-header" id="heading${i + 2}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i + 2}" aria-expanded="false" aria-controls="collapse${i + 2}">Periksa ${i + 2}</button>
          </h2>
          <div id="collapse${i + 2}" class="accordion-collapse collapse" aria-labelledby="heading${i + 2}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div>
                <ul>
                  <li><h5>Tanggal Periksa</h5></li>
                  <h6>${finalApi.riwayatPenyakit[i + 1].tanggalBerobat}</h6>
                  <li><h5>Anamnesis</h5></li>
                  <h6>${finalApi.riwayatPenyakit[i + 1].anamnesis}</h6>
                  <li><h5>Diagnosa</h5></li>
                  <h6>${finalApi.riwayatPenyakit[i + 1].diagnosis}</h6>
                </ul>
              </div>
              <div>
                <ul>
                  <li><h5>Obat</h5></li>
                  <h6>${finalApi.riwayatPenyakit[i + 1].obat}</h6>
                  <li><h5>Catatan</h5></li>
                  <h6>${finalApi.riwayatPenyakit[i + 1].catatan}</h6>
                </ul>
              </div>   
            </div>
          </div>
        </div>
      `;
  }
}
data();
