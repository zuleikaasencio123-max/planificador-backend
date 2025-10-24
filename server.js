import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales simuladas
app.get("/", (req, res) => {
  res.send("✅ Servidor del Planificador Docente IA funcionando correctamente");
});

app.post("/api/generate", (req, res) => {
  res.json({
    message: "Simulación: aquí el backend generaría la planificación",
  });
});

// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
