function pildiga(pildinumber) {
    // Igal pildil on oma ID, et ma saaks nendele viidata ilma, et need ei hakkaks üksteist segama
    var pilt = document.getElementById("näitaPilti" + pildinumber); 
    // Igal nupul on oma ID, et ma saaks nendele viidata ilma, et need ei hakkaks üksteist segama
    var nupp = document.getElementById('nupp' + pildinumber);

    // Kontrollib kas pilt on hetkel nähtaval või ei
    if (pilt.style.display === 'none'){
        // Kui pilt ei ole nähtaval, siis teeb selle nähtavaks ning muudab nupul oleva teksti 'Peida pilt'-iks
        pilt.style.display = 'block';
        nupp.textContent = 'Peida pilt';

        // Kui pilt on nähtaval, siis peidab pildi ära ning muudab nupul oleva teksti 'Näita pilti'-iks
    } else {
        pilt.style.display = 'none';
        nupp.textContent = 'Näita pilti';
    }

}

