// definisco le costanti 
const youngDiscount = 20
const youngAge = 18

const oldDiscount = 40
const oldAge = 65

const kmPrice = 0.21

// definisco le variabili
let userKm 
let userAge

let discountedTicketPrice
let fullTicketPrice

// definisco le costanti che contengono gli elementi del DOM che utilizzerò
const submitButton = document.getElementById("submitButton")
const inputKm = document.getElementById('inputKm')
const inputAge = document.getElementById('inputAge')
console.log(inputAge)
// creo un event listner per quando l'utente preme il pulsante submitButton
submitButton.addEventListener('click', function(){
    let tempUserKm = Number(inputKm.value)
    if (isNaN(tempUserKm) || tempUserKm <= 0){
        // function to give user feedbac
        return
    }
    let tempUserAge = Number(inputAge.value)
    if (isNaN(tempUserAge) || tempUserAge <= 0 || tempUserAge > 110){
        // function to give user feedback
        return
    }
    userKm = tempUserKm
    userAge = tempUserAge

    fullTicketPrice = userKm * kmPrice
    if (userAge < youngAge){
        discountedTicketPrice = fullTicketPrice * (100 - youngDiscount) / 100
    }else if (userAge > oldAge){
        discountedTicketPrice = fullTicketPrice * (100 - oldDiscount) / 100
    } else {
        discountedTicketPrice = fullTicketPrice
    }
    console.log(
    `
    === MILESTONE 1 ===
    Kilometri da percorrere: ${userKm}
    Anni del passeggero: ${userAge}
    Costo del biglietto intero: ${fullTicketPrice}
    Costo del biglietto scontato: ${discountedTicketPrice}
    `)
})


// valido i dati di input

// definisco 2 variabili: 
// discountedTicketPrice = none
// fullTicketPrice = userKm * kmPrice

// controllo se l'utente ha dtiritto ad uno sconto e nel caso
// discountedTicketPrice = fullTicketPrice * (100- loScontoDaApplicare )/100

// scrivo nella console il risultato