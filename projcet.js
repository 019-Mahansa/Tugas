let nilai = [45,80,30,100]

for(let n of nilai){
    if(n >= 90){
     console.log(`nilai ${n} mendapatkan predikat A`)   
    }else if(n >= 80){
        console.log(`nilai ${n} mendapatkan predikat B`)
    }else if(n >= 70){
        console.log(`nilai ${n} mendapatkan predikat C`)
    }else if(n >= 60){
        console.log(`nilai ${n} mendapatkan predikat D`)
    }else {
        console.log(`nilai ${n} mendapatkan predikat F`)
    }
}


//nomor 2
let obj = [
    {nama : "Habie", umur : 17, kelas : "XI"},
    {nama : "Mahansa", umur : 16, kelas : "XI"},
    {nama : "Galih", umur : 17, kelas : "XI"},
    {nama : "dis", umur : 15, kelas : "X"}
]

for(let i in obj){
    console.log(` nama : ${obj[i].nama} \n umur : ${obj[i].umur} \n kelas : ${obj[i].kelas} \n`)
}