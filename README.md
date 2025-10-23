# Planificador Backend (Opción A — Render + Node/Express)

Backend seguro para el **Planificador Docente IA**. Provee endpoints para:
- `/api/generate` → llama a Gemini con la API key **segura**, sanitiza HTML y devuelve la planificación.
- `/api/curriculo/:grado/:asignatura` → (simulado) devuelve texto oficial del currículo.
- `/api/template/parse` → (simulado) analiza plantilla subida.

## Requisitos
- Node 18+
- Clave de Gemini en variable de entorno `GEMINI_API_KEY`

## Instalación local
```bash
npm install
npm run dev
# GET http://localhost:8080/
```

## Variables de entorno
Crea `.env` (no lo subas al repo):
```env
GEMINI_API_KEY=TU_CLAVE_SECRETA
```

## Despliegue en Render
1. Sube este folder a GitHub.
2. En Render → New → Web Service → conecta el repo.
3. Build command: `npm install`
4. Start command: `npm start`
5. Agrega **Environment Variable**: `GEMINI_API_KEY` con tu clave.
6. Deploy. Obtendrás una URL como `https://tu-backend.onrender.com`.

## Conectar desde Angular
En tu componente, reemplaza la llamada directa a Gemini por:
```ts
const response = await fetch('https://tu-backend.onrender.com/api/generate', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ prompt: masterPrompt })
});
const { html } = await response.json();
this.generatedPlan.set(html);
```

### Endpoint de currículo
Temporalmente devuelve datos simulados. Reemplaza por JSON/BD con el **texto literal del MINERD**.

### Seguridad
- No expongas `GEMINI_API_KEY` en el frontend.
- Sanitización server-side con DOMPurify.
