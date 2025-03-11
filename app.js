const amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        atualizarLista();
    } else {
        alert('Digite o nome do amigo.');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `Amigo sorteado: ${sorteado}`;
        lista.appendChild(li);
    } else {
        alert('Adicione pelo menos um amigo para sortear.');
    }
}

document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigo);