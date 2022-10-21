// async function getData1() {
//   let data1 = await fetch("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien");
//   let hasilData1 = await data1.json();
//   let finalData1 = await hasilData1[0];

//   console.log(data1);
//   console.log(hasilData1);
//   console.log(finalData1.riwayatPenyakit);
// }

// getData1();

let btn = document.getElementById("submitRiwayat");
let field1 = document.getElementById("isiAnamnesis");
let field2 = document.getElementById("isiDiagnosis");
let field3 = document.getElementById("isiObat");
let field4 = document.getElementById("isiCatatan");
let field5 = document.getElementById("isiTanggal");
let area = document.getElementById("tArea");

console.log(field1);
console.log(field2);
console.log(field3);
console.log(field4);
console.log(field5);
console.log(btn);
btn.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      tanggalBerobat: field5.value,
      anamnesis: field1.value,
      diagnosis: field2.value,
      obat: field3.value,
      catatan: field4.value,
    }),
  });
  area.reset();
});
