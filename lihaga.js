// defineerin funktsiooni toggleImage, mille argumendiks on retsepti ID
function toggleImage(recipeId) {
    // leiab html-ist elemendi, millel on retsepti ID ning salvestab selle muutujasse recipe
    var recipe = document.getElementById(recipeId);
    // otsib img elemnti ehk pildi elementi recipe elemendi alert, ehk põhimõtteliselt pildi linki ja salvestab muutujasse img
    var img = recipe.querySelector('img');
    // jällegi otsib recipe elemedi alt elementi button ja salvestab selle muutujasse button
    var button = recipe.querySelector('button');
    // muudab pildi läbipaistvuse nulliks ja üheks, olenevalt, kas on vaja pilti kuvada või mitte
    img.style.opacity = (img.style.opacity === '0') ? '1' : '0';
    // muudab nupu teksti olenevalt sellest, kas pilt on läbipaistev (nupu tekstiks 'Näita pilti') või mitte (nupu tekstiks 'Peida pilt')
    button.textContent = (img.style.opacity === '0') ? 'Näita pilti' : 'Peida pilt';
}