fetch('https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/pasien').then((data)=>{
    //console.log(data);
    return data.json();
}).then((showdata)=>{
    console.log(showdata);
})