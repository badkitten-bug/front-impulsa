# Frontend Impulsa

Frontend de la aplicación Impulsa, desarrollado con React y Vite.

## 🚀 Tecnologías

- React
- Vite
- CSS Modules
- React Router
- Context API
- Google Auth

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/badkitten-bug/front-impulsa.git
cd front-impulsa
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Crear archivo de variables de entorno:
```bash
cp .env.example .env.local
```

4. Configurar las variables de entorno en `.env.local`:
```env
VITE_API_URL_NODE=http://localhost:3000
VITE_API_URL_PYTHON=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_NODE_ENV=development
```

5. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## 🏗️ Estructura del Proyecto

```
front-impulsa/
├── src/
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Contextos de React
│   ├── hooks/          # Hooks personalizados
│   ├── routes/         # Componentes de rutas
│   └── utils/          # Utilidades y helpers
├── public/             # Archivos públicos
└── index.html          # Punto de entrada HTML
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código

## 🌐 Despliegue

El proyecto está configurado para ser desplegado en Vercel:

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en la plataforma
3. Vercel desplegará automáticamente en cada push a la rama main

## 🔐 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| VITE_API_URL_NODE | URL del backend Node.js | http://localhost:3000 |
| VITE_API_URL_PYTHON | URL del backend Python | http://localhost:8000 |
| VITE_GOOGLE_CLIENT_ID | ID de cliente de Google Auth | your_google_client_id |
| VITE_NODE_ENV | Ambiente de ejecución | development |

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 