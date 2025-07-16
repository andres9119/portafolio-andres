# 🚀 Portafolio Personal - Andres Bateca

Un portafolio web moderno y profesional para desarrolladores Django, con diseño responsive y funcionalidades avanzadas.

## ✨ Características

### 🎨 **Mejoras Visuales**
- **Animaciones fluidas**: Transiciones suaves y efectos hover modernos
- **Gradientes y sombras**: Diseño visual atractivo con efectos de profundidad
- **Tipografía mejorada**: Fuente Inter con diferentes pesos para mejor jerarquía
- **Efectos parallax**: Animaciones sutiles al hacer scroll
- **Animación de carga**: Spinner profesional al cargar la página

### ⚡ **Funcionalidades Avanzadas**
- **Modo oscuro/claro**: Toggle de tema con persistencia en localStorage
- **Filtros de proyectos**: Categorización dinámica de proyectos
- **Formulario inteligente**: Validación en tiempo real con notificaciones
- **Copiar al portapapeles**: Click en información de contacto para copiar
- **Navegación por teclado**: Soporte completo para accesibilidad
- **PWA**: Progressive Web App con funcionalidad offline

### 📱 **Responsive y Accesible**
- **Diseño mobile-first**: Optimizado para todos los dispositivos
- **Navegación mejorada**: Menú hamburguesa con animaciones
- **Contraste optimizado**: Mejor legibilidad en diferentes temas
- **SEO optimizado**: Meta tags y estructura semántica

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd portafolio-andres
```

### 2. Personalizar contenido

#### 📝 **Información Personal**
Edita `index.html` y actualiza:
- Nombre y título
- Información de contacto
- Enlaces a redes sociales
- Descripción personal
- Experiencia y estadísticas

#### 🎨 **Personalización Visual**
En `styles.css`, modifica las variables CSS:
```css
:root {
  --hue-color: 230; /* Cambia el color principal */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  /* ... más variables */
}
```

#### 📊 **Habilidades y Proyectos**
- Actualiza porcentajes de habilidades en `index.html`
- Agrega tus proyectos reales con imágenes
- Modifica tecnologías y descripciones

### 3. Configurar PWA
1. Crea iconos en diferentes tamaños (192x192, 512x512)
2. Actualiza `manifest.json` con tu información
3. Personaliza colores del tema en el manifiesto

### 4. Desplegar
```bash
# Usando Python
python -m http.server 8000

# O usando Node.js
npx serve .

# O subir a GitHub Pages, Netlify, Vercel, etc.
```

## 📁 Estructura del Proyecto

```
portafolio-andres/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── main.js            # JavaScript principal
├── sw.js              # Service Worker (PWA)
├── manifest.json      # Manifiesto PWA
├── README.md          # Este archivo
└── assets/            # Imágenes y recursos
    ├── images/
    └── pdf/
```

## 🎯 Funcionalidades Principales

### **Sistema de Temas**
- Toggle entre modo claro y oscuro
- Persistencia de preferencia del usuario
- Transiciones suaves entre temas

### **Filtros de Proyectos**
- Categorización por tecnología
- Animaciones de transición
- Filtros dinámicos

### **Formulario de Contacto**
- Validación en tiempo real
- Notificaciones elegantes
- Campos con placeholder animado

### **Animaciones**
- Scroll reveal para elementos
- Animación de habilidades al hacer scroll
- Efectos parallax sutiles

## 🔧 Personalización Avanzada

### **Agregar Nuevas Secciones**
1. Crea la estructura HTML en `index.html`
2. Agrega estilos en `styles.css`
3. Implementa funcionalidad en `main.js`

### **Modificar Animaciones**
```javascript
// En main.js
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Agregar nuevas animaciones
sr.reveal('.tu-nueva-clase', {delay: 400});
```

### **Cambiar Colores**
```css
/* En styles.css */
:root {
  --hue-color: 250; /* Cambia a púrpura */
  /* O usa valores HSL directos */
  --first-color: hsl(250, 69%, 61%);
}
```

## 📱 PWA Features

### **Instalación**
- El portafolio se puede instalar como app
- Funciona offline
- Actualizaciones automáticas

### **Configuración**
- `manifest.json`: Configuración de la app
- `sw.js`: Service Worker para cache
- Iconos en diferentes tamaños

## 🚀 Optimizaciones

### **Performance**
- Lazy loading de imágenes
- CSS y JS minificados
- Caché inteligente

### **SEO**
- Meta tags completos
- Schema markup
- URLs amigables

### **Accesibilidad**
- Navegación por teclado
- Contraste adecuado
- Textos alternativos

## 📞 Soporte

Para personalizar o mejorar el portafolio:

1. **Cambiar información personal**: Edita `index.html`
2. **Modificar estilos**: Edita `styles.css`
3. **Agregar funcionalidades**: Edita `main.js`
4. **Configurar PWA**: Edita `manifest.json` y `sw.js`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta tu nuevo portafolio profesional! 🎉** 