
nappula = document.getElementById("nappula");
nappula.addEventListener("click",lisaaUusiKaveri);

const kaverit = []





function lisaaUusiKaveri()
{
    
    let nimi = prompt("Anna nimi");
    let uusikaveriElementti = document.createElement("li");
    let uusikaveriNimi = document.createTextNode(nimi);
    uusikaveriElementti.appendChild(uusikaveriNimi);
    let lista = document.getElementById("buddyList");
    kaverit.push(nimi)
    


    if (kaverit.length == 10)
    
    {
        
        for (let i = 0; i < kaverit.length; i++) 
        {
        
        let listaElementti = document.createElement("li");
        listaElementti.innerText = kaverit[i]
        lista.appendChild(listaElementti)
        
        }
    lista.style.visibility = "visible";
    document.getElementById("kaveriotsikko").style.visibility = "visible";
    
    
    
    }

    

}


