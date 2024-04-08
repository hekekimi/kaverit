const kaverit = []
painike1 = document.getElementById("painike1");
painike2 = document.getElementById("painike2");
painike3 = document.getElementById("painike3");

painike1.addEventListener("click", lisaaKaveri)
painike2.addEventListener("click", poistaKaveri)
painike3.addEventListener("click", jarjestaKaverit)










function lisaaKaveri()
{

let syote_orig = document.querySelector("#main input[type ='text']").value;
let syote = syote_orig.trim();
if(syote.length < 1)
    {
        window.alert("Anna kaverin nimi!")
        return;

    }

let kaveriElementti = document.createElement("li");
let kaveriNimi = document.createTextNode(syote);
kaveriElementti.appendChild(kaveriNimi);
kaveriElementti.className = "list-item";
kaverit.push(syote);

document.querySelector('#itemList').appendChild(kaveriElementti);
document.getElementById('kaverit').innerHTML = "Kaverit";
console.log(kaverit);



}

function poistaKaveri() 
{
    let syote_orig = document.querySelector("#main input[type='text']").value;
    let syote = syote_orig.trim();

    if (syote.length < 1) {
        window.alert("Anna kaverin nimi!");
        return;
    }

    const poistettavaNimi = kaverit.indexOf(syote);

    if (poistettavaNimi !== -1)
     {
        kaverit.splice(poistettavaNimi, 1); 
        const kaverit_lista = document.querySelector('#itemList');
        const kaveriElementit = kaverit_lista.getElementsByTagName('li'); 

        for(let i = 0; i< kaveriElementit.length; i++)
        {
            if (kaveriElementit[i].textContent === syote)
            {
                kaverit_lista.removeChild(kaveriElementit[i]);
                if (kaveriElementit.length ==0)
                {
                
                document.getElementById('kaverit').innerHTML = "";
                }

                break;
                
                
            }
        }
    }
}

function jarjestaKaverit()
{
    kaverit.sort()
    console.log(kaverit)
    let aakkos_kaverit = document.querySelector('#itemList');
    aakkos_kaverit.innerHTML = "";
    for (i = 0; i< kaverit.length; i++)
    {
    let kaveriElementti = document.createElement("li");
    let kaveriNimi = document.createTextNode(kaverit[i]);
    kaveriElementti.appendChild(kaveriNimi);
    kaveriElementti.className = "list-item";
    aakkos_kaverit.appendChild(kaveriElementti);



}




}


  

  











