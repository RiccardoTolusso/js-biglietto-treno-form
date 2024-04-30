--------- HTML -----------
creo due campi di input rispettivamente
#inputKm
#inputAge

creo un pulsante
#submitButton


-------- JS ------------
definisco delle costanti 
youngDiscount
youngAge

oldDiscount
oldAge

kmPrice

creo un event listner per quando l'utente preme il pulsante submitButton

definisco 2 variabili userKm e userAge

valido i dati di input

definisco 2 variabili: 
discountedTicketPrice = none
fullTicketPrice = userKm * kmPrice

controllo se l'utente ha dtiritto ad uno sconto e nel caso
discountedTicketPrice = fullTicketPrice * (100- loScontoDaApplicare )/100

scrivo nella console il risultato