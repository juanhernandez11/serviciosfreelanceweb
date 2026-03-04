# Backend JuanBvtech - Formulario de Contacto

## 📦 Instalación

```bash
cd backend
npm install
```

## ⚙️ Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
copy .env.example .env
```

2. Edita `.env` con tus credenciales:

### Para Gmail:
1. Ve a https://myaccount.google.com/security
2. Activa "Verificación en 2 pasos"
3. Ve a "Contraseñas de aplicaciones"
4. Genera una contraseña para "Correo"
5. Usa esa contraseña en `EMAIL_PASS`

```env
PORT=3001
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx
```

## 🚀 Ejecutar

### Desarrollo (con auto-reload):
```bash
npm run dev
```

### Producción:
```bash
npm start
```

El servidor estará en: http://localhost:3001

## 🧪 Probar

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hola"}'
```

## 📁 Estructura

```
backend/
├── server.js          # Servidor principal
├── package.json       # Dependencias
├── .env              # Configuración (NO subir a Git)
└── .env.example      # Ejemplo de configuración
```

## 🔒 Seguridad

- Nunca subas el archivo `.env` a Git
- Usa contraseñas de aplicación, no tu contraseña real
- En producción, usa variables de entorno del hosting

## 🌐 Deploy

### Opción 1: Railway.app (Gratis)
1. Sube el código a GitHub
2. Conecta Railway con tu repo
3. Agrega las variables de entorno
4. Deploy automático

### Opción 2: Render.com (Gratis)
1. Sube el código a GitHub
2. Crea nuevo Web Service en Render
3. Configura variables de entorno
4. Deploy

### Opción 3: Heroku
```bash
heroku create juanbvtech-backend
heroku config:set EMAIL_USER=tu-email@gmail.com
heroku config:set EMAIL_PASS=tu-contraseña
git push heroku main
```

## 📝 Actualizar URL en Frontend

Cuando despliegues, actualiza la URL en `src/sections/ContactForm.jsx`:

```javascript
// Cambiar de:
fetch('http://localhost:3001/api/contact', ...)

// A:
fetch('https://tu-backend.railway.app/api/contact', ...)
```
