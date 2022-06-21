async function getPokemon(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {method: "GET"});
    const json = await response.json();

    for(let i = 0; i < json.results.length; i++){
        const res = await fetch(json.results[i].url, {method: "GET"});
        const data = await res.json();

        let div = document.createElement("div");
        let img = document.createElement("img");
        let number = document.createElement("span");
        let name = document.createElement("span");
        let type = document.createElement("span");

        if(data.types[0].type.name == "grass"){
            div.style.background = "#32CD32";
        }else if(data.types[0].type.name == "fire"){
            div.style.background = "#DC143C";
        }else if(data.types[0].type.name == "water"){
            div.style.background = "#51a3f5";
        }else if(data.types[0].type.name == "bug"){
            div.style.background = "#808080";
        }else if(data.types[0].type.name == "normal"){
            div.style.background = "#cfd8c0";
        }else if(data.types[0].type.name == "poison"){
            div.style.background = "#d40435";
        }else if(data.types[0].type.name == "electric"){
            div.style.background = "#e3ff00";
        }else if(data.types[0].type.name == "ground"){
            div.style.background = "#b64c2f";
        }else{
            div.style.background = "ffffff";
        }

        div.style.display = "inline-block";
        div.style.padding = "40px";
        div.style.textAlign = "center";
        div.style.marginTop = "20px";
        div.style.marginLeft = "20px";
        div.style.width = "90px";
        div.style.height = "160px";
        number.style.display = "inline-block";

        img.setAttribute("src", data.sprites.front_shiny)
        number.innerText = `${data.id}: `;
        name.innerText = data.name;
        type.innerText = `type: ${data.types[0].type.name}`;

        document.getElementById('pokemon-result').appendChild(div);
        div.appendChild(number);
        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(type);
    }
}