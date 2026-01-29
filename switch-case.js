const fs = require("fs")
const { stdout,stdin, exit } = require("process")
const readline = require("readline")

const ae = readline.createInterface({
    input : stdin,
    output : stdout
})
landingPage()

function landingPage(){
    console.log("Selamat datang di list app")
    console.log("Pilih menu :")
    console.log("1. Daftar web anime")
    console.log("2. Daftar laptop kece")
    console.log("3. Exit")
    ae.question("ketik angka pilihan :", (answare) =>{
        switch (parseInt(answare)) {
            case 1:
                console.log("Laptop ASUS ROG")
                console.log("Laptop ASUS TUF")
                console.log("Laptop Acer Nitro")
                console.log("Laptop Axioo Pongo")
                ae.close()
                break;
            case 2:
                console.log("Bsation")
                console.log("Crunchyroll")
                console.log("Idlix")
                ae.close()
                break;
            case 3:
                ae.close()
                break;
        }
    })
}