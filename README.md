# Landing Leo - Juegos Landing Page 🎰

Una landing page moderna y responsiva para juegos construida con Astro, React y TailwindCSS.

## 🚀 Características

- **Diseño responsivo** - Optimizada para desktop, tablet y móvil
- **Animaciones fluidas** - Efectos flotantes y de hover interactivos
- **Carrusel de imágenes** - Galería automática de fotos del casino
- **Integración WhatsApp** - Botón directo para contacto y registro
- **Optimización de rendimiento** - Carga rápida con lazy loading
- **Fondo animado** - Elementos decorativos de cartas flotantes

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework principal
- **[React](https://reactjs.org/)** - Componentes interactivos
- **[TailwindCSS](https://tailwindcss.com/)** - Estilos y diseño responsivo
- **[Lucide React](https://lucide.dev/)** - Iconografía
- **[React Icons](https://react-icons.github.io/react-icons/)** - Iconos adicionales

## 📁 Estructura del Proyecto

```
├── public/                    # Archivos estáticos
│   ├── 1.jpg - 10.jpg        # Imágenes del carrusel
│   ├── game.gif              # GIF principal del juego
│   └── favicon.svg           # Favicon del sitio
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Background.astro  # Fondo animado con símbolos
│   │   ├── Carrousel.astro   # Carrusel de imágenes
│   │   ├── Juega.jsx         # Componente principal CTA
│   │   └── Welcome.astro     # Componente de bienvenida
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal
│   ├── pages/
│   │   └── index.astro       # Página principal
│   └── styles/
│       └── global.css        # Estilos globales y animaciones
└── astro.config.mjs          # Configuración de Astro
```

## 🎨 Componentes

### [`Juega.jsx`](src/components/Juega.jsx)
Componente principal con:
- Título llamativo con efectos de texto
- Botón de WhatsApp integrado
- Animaciones de pulso y brillo
- Diseño completamente responsivo

### [`Carrousel.astro`](src/components/Carrousel.astro)
Carrusel infinito que incluye:
- 10 imágenes duplicadas para efecto continuo
- Animación automática pausable al hover
- Responsive design con diferentes tamaños

### [`Background.astro`](src/components/Background.astro)
Fondo decorativo con:
- 12 símbolos de cartas flotantes (♠ ♥ ♦ ♣)
- Animaciones escalonadas
- Efecto de rotación y traslación

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [URL-del-repositorio]
cd landing-leo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
```

## 📱 Funcionalidades

### Integración WhatsApp
El botón "Crea tu Usuario" abre WhatsApp con:
- Número predefinido: `1234567890`
- Mensaje: "¡Hola! Quiero Jugar."

### Animaciones
- **Float**: Elementos flotantes con rotación
- **Pulse**: Efectos de pulsación en botones
- **Scroll**: Carrusel con movimiento continuo
- **Hover**: Interacciones de escala y pausa

## 🎯 Personalización

### Cambiar número de WhatsApp
Edita la variable `phoneNumber` en [`Juega.jsx`](src/components/Juega.jsx):

```jsx
const phoneNumber = "TU_NUMERO_AQUI";
```

### Modificar imágenes del carrusel
Reemplaza las imágenes en [`public/`](public/) manteniendo la numeración 1.jpg a 10.jpg.

### Ajustar colores
Los colores principales están definidos en clases de TailwindCSS:
- **Verde**: Botón de WhatsApp (`from-green-500 to-green-600`)
- **Amarillo**: Texto destacado (`text-yellow-400`)
- **Gradientes**: Fondos y efectos (`from-purple-800 via-purple-700 to-fuchsia-900`)

### Personalizar animaciones
Las animaciones están definidas en [`global.css`](src/styles/global.css):
- Duración: Modifica valores en `animation: float 8s`
- Delay: Ajusta `animation-delay` para sincronización
- Efectos: Cambia `transform` y `opacity` en keyframes

## 📊 Optimización

### Rendimiento
- **Lazy loading** en imágenes
- **Componentes híbridos** Astro + React
- **CSS optimizado** con TailwindCSS
- **Imágenes optimizadas** con Astro Image

### SEO
- Meta tags configurados en [`Layout.astro`](src/layouts/Layout.astro)
- Favicon personalizado
- Estructura semántica HTML

## 🌐 Deployment

### Build para producción
```bash
npm run build
```

### Hosting recomendado
- **Vercel** - Integración directa con Astro
- **Netlify** - Deploy automático desde Git
- **Cloudflare Pages** - CDN global incluido

## 📝 Configuración adicional

### Variables de entorno
Crea un archivo `.env` para configuraciones sensibles:
```env
WHATSAPP_NUMBER=1234567890
SITE_URL=https://tu-dominio.com
```

### Tailwind personalizado
Extiende la configuración en `astro.config.mjs` si necesitas colores o utilidades personalizadas.

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

**Desarrollado con ❤️ para Casino Leo**