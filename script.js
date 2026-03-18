class Monitor {
    atualizar(dados) {

        // Atualiza valores
        document.getElementById('cpu').innerText = dados.cpu
        document.getElementById('ram').innerText = dados.memoria
        document.getElementById('temp').innerText = dados.temperatura

        // Aplica alertas
        this.verificar('cpu-card', dados.cpu, 80)
        this.verificar('ram-card', dados.memoria, 12)
        this.verificar('temp-card', dados.temperatura, 75)
    }

    verificar(id, valor, limite) {
        const card = document.getElementById(id)

        if (valor > limite) {
            card.classList.add('alerta-critico')
    } else {
        card.classList.remove('alerta-critico')
    }
}
}

const monitor = new Monitor()

async function buscarDados() {
    try {
        const resposta = await fetch('/api/status')
        const dados = await resposta.json()

        monitor.atualizar(dados)

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro)
    }
}

// Atualiza a cada 2 segundos
setInterval(buscarDados, 2000)



