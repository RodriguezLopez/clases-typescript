import express from 'express'
import type { Application } from 'express'
import { router, initRoutes } from './routes/index'

const app: Application = express()
const PORT = 3000

// Middleware para parsear JSON
app.use(express.json())

// Inicializar las rutas dinámicas
await initRoutes()
app.use('/api', router)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
})
