// OpenAI. (2023). ChatGPT [Large language model]. https://chat.openai.com
// Kasutasin OpenAI-d JavaScripti koodi kirjutamisel, sest ma pole ise JavaScriptiga vare kokku puutunud.
// Kuid nüüd mõistan mida ja milleks on vaja kasutada.

// funktsioon võtab argumendiks retseptinumbri ja tema eesmärk on näidata/peita (vastavalt nupule klikkimisele) pilti.
function pildiga(retseptiNumber) {
    // Määrame muutujale pildiElement väärtuse
    // document.getElementById on meetod, et otsida HTML dokumendist elementi, millel on ID
    // näitaPilti on ID osa, millele lisatakse reteptiNumber, et saada täpne ID vastava pilti jaoks. 
    // (HTML koodis oleme määranud piltide IDks "näitaPilti" + number(vastav järjekorra number))
    var pildiElement = document.getElementById('näitaPilti' + retseptiNumber);

    // Nüüd kontrollime, kas pilt on peidetud või mitte.
    // Kui pilt on peidetud, siis funktsioon teeb selle nähtavaks.
    // pildiElement.style.display annab juurdepääsu CSS-stiilile, kus reguleeritakse pildi nähtavust.
    // 'none' – pilt on peidetud ja muudetakse nähtavaks
    // 'block' – pilt on nähtaval ja muudetakse peidetuks
    if (pildiElement.style.display === 'none') {
        pildiElement.style.display = 'block';
    // Kui pilt on nähtav, siis funktsioon peidab pildi
    } else {
        pildiElement.style.display = 'none';
    }
}