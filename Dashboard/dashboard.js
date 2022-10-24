// fetch("https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien")
//   .then((res) => res.json())
//   .then((data) => {
//     hasilForm = data;
//     console.log(hasilForm);

//     console.log(res);
//   });

let dataPasienAPI = "https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien";
let dataDokterAPI = "https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/users";

let tableBody = document.getElementsByClassName("table-body")[0];
let inputSearch = document.getElementById("inputSearch");

let dataStore = [];

function kondisi(angka) {
  localStorage.setItem("id", "" + angka);
}
let getDataPasien = async () => {
  let response = await fetch(dataPasienAPI);
  let allDataPasien = await response.json();
  // console.log(allDataPasien);
  let resp = await fetch(dataDokterAPI);
  let allDataDokter = await resp.json();
  // console.log(allDataDokter);

  for (let i = 0; i < allDataPasien.length; i++) {
    for (let j = 0; j < allDataDokter.length; j++) {
      // PERLU PENYESUAIAN LAGI DENGAN USER SIAPA YANG LAGI LOGIN
      let pasienDokter = allDataDokter[j].idDokter == allDataPasien[i].idDokter && allDataPasien[i].konsultasi == false;
      if (pasienDokter) {
        dataStore.push(allDataPasien[i]);
        //         tableBody.innerHTML += `
        //                 <tr >
        //                 <td scope="col">${i + 1}</td>
        //                 <td scope="col">${allDataPasien[i].idPasien}</td>
        //                 <td scope="col">${allDataPasien[i].namaLengkap}</td>
        //                 <td scope="col">${allDataPasien[i].jenisKelamin}</td>
        //                 <td scope="col">${allDataPasien[i].umur}</td>
        //                 <td scope="col">${allDataPasien[i].tanggalLahir}</td>
        //                 <td scope="col">
        //                 <form action="index.html">
        //                 <button id="submit${i}" onclick="kondisi(${i + 1})" class="btn btn-sm" href="../Konsultasi/index.html" role="button">
        //                 <i class="material-icons" style="font-size: 15px">edit</i>
        //                 Edit
        //                 </button>
        //                 </form>
        //                 </td>
        //                 </tr>
        //                 `;
      }

      // PERLU PENYESUAIAN DI HREF BUTTON ACTION
    }
  }
  let pasien = document.getElementById("jumlahPasien");
  pasien.innerHTML = `${dataStore.length}`;
};
getDataPasien();
