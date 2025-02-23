function Procurar(){

    let pais = document.getElementById("pais").value
    let finalURL= `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    
    console.log(finalURL)
    
    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){
    
    console.log(data[0]);
    console.log(data[0].population);
    console.log(data[0].capital[0]);
    console.log(data[0].continents[0]);
    
    let bandeira = document.getElementById('bandeira');
    let capital = document.getElementById('capital');
    let pop = document.getElementById('pop');
    let nome = document.getElementById('nome');
    nome.innerHTML = pais;
    capital.innerHTML = data[0].capital[0];
    pop.innerHTML = data[0].population;
    cont.innerHTML = data[0].continents;
    bandeira.src = data[0].flags.svg;
    })
    
    document.getElementById('pais').value = '';
}
