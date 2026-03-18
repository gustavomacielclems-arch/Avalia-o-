const express = require('express')
const app = express()
const PORT = 3000

// Servir arquivos da pasta "public"
app.use(express.static('public'))

// Classe que simula o hardware
class HardwareEngine {
    gerarDados() {
        return {
            cpu: Math.floor(Math.random() * 101), // 0 a 100%
            memoria: (Math.random() * 16).toFixed(2), // 0 a 16 GB
            temperatura: Math.floor(Math.random() * (90 - 30 + 1)) + 30 // 30 a 90°C
        }
    }
}

// Endpoint da API
app.get('/api/status', (req, res) => {
    const hardware = new HardwareEngine()
    const dados = hardware.gerarDados()
    res.json(dados)
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`)
})

memoria: Number((Math.random() * 16).toFixed(2))
