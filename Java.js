// escutar o "click" do botao paara input  d tag "fectchButton"
document.getElementById('fetchButton').addEventListener('click', function() {
    
    // obter o nome ou texto referente ao pokemon no campo   "<input type="text" id="pokemonName">" e atribuir a variavel
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonInfoDiv = document.getElementById('pokemonInfo');

    if (pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon not found');
                }
                return response.json();
            })
            .then(data => {
                const pokemonData = `
                    <div class="pokemon-data">
                        <img src="${data.sprites.front_default}" alt="${data.name}">
                        <div>Name: ${data.name}</div>
                        <div>Height: ${data.height}</div>
                        <div>Weight: ${data.weight}</div>
                    </div>
                `;
                pokemonInfoDiv.innerHTML = pokemonData;
            })
            .catch(error => {
                pokemonInfoDiv.innerHTML = `<div class="error">${error.message}</div>`;
            });
    } else {
        pokemonInfoDiv.innerHTML = '<div class="error">Please enter a Pokémon name</div>';
    }
});
