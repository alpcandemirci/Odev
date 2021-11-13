
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {

        let count=0
        for (let j = 1; j <= numbers[i]; j++) {
            
            if (numbers[i] % j==0) {
                count++
            }
        }
        if (count==2) {
            console.log("Asal Sayidir")
        }
        else{
            console.log("Asal Degil")
        }

    }

  
}

findPrime(1,2,4,13)

//-----------------------------------------------------------

function arkSayi(sayi1, sayi2) {

    let toplam1 = 0
    let toplam2 = 0
    for (let i = 0; i < sayi1; i++) {

        if (sayi1 % i == 0) {

            toplam1 = toplam1 + i;

        }

    }
    
    for (let i = 0; i < sayi2; i++) {

        if (sayi2 % i == 0) {

            toplam2 = toplam2 + i;

        }

    }
    if (toplam1 == sayi2 && toplam2 == sayi1) {
        
        console.log(sayi1 + " ve " + sayi2 + " Sayıları arkadaş sayıdır")
    }

    else {
        
        console.log(sayi1 + " ve " + sayi2 + " Sayıları arkadaş sayı değildir")
    }
}

arkSayi(111,232)

//-----------------------------------------------------------

function mukSayi() {

    
    for (let sayi = 1; sayi < 1000; sayi++) {

        let toplam = 0
        for (let i = 1; i <= sayi; i++) {

            if (sayi % i == 0) {
                toplam = toplam + i
            }

        }

        if(toplam == sayi*2){

            console.log(sayi + " sayisi mukemmel sayidir")
        }
    }

}

mukSayi()

//-----------------------------------------------------------

function asalSayi(sayi) {

    
    for (let sayi = 2; sayi < 1000; sayi++) {

        let sayac=0
        for (let i = 2; i <= sayi; i++) {

            if (sayi % i == 0) {
                sayac++
            }

        }
        if (sayac == 1) {
            console.log(sayi + " sayisi asal sayidir")
        }
        
    }

}

asalSayi()