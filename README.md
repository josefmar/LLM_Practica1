# Santiago-Pontones · Web informativa

Página web pública de presentación del municipio de **Santiago-Pontones**,
enclavado en la Sierra de Segura (Jaén, Andalucía, España), dentro del
Parque Natural de las Sierras de Cazorla, Segura y Las Villas.

## Descripción

Sitio web estático que recoge información sobre la geografía, naturaleza,
turismo, gastronomía, cultura e historia del municipio de Santiago-Pontones.
Incluye enlaces a recursos institucionales y turísticos de interés.

## Uso

No requiere instalación ni proceso de compilación.

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/USUARIO/LLM_practica1.git
   ```
2. Abre `index.html` directamente en cualquier navegador moderno.

## Publicación

### GitHub Pages
```bash
git remote add origin https://github.com/USUARIO/LLM_practica1.git
git push -u origin main
# Activar en: Settings → Pages → Branch: main → / (root) → Save
# URL: https://USUARIO.github.io/LLM_practica1/
```

### Netlify (drag & drop)
Arrastra la carpeta del proyecto a [netlify.com/drop](https://app.netlify.com/drop).

### Servidor propio
Copia todos los archivos al directorio público del servidor web.
No se requiere ningún proceso de build.

## Estructura del proyecto

```
LLM_practica1/
├── index.html        ← página principal
├── css/
│   └── styles.css    ← hoja de estilos
├── js/
│   └── main.js       ← scripts de interactividad
├── img/
│   └── README.md     ← nota sobre imágenes
├── .gitignore
├── README.md
└── LICENSE
```

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas y Grid Layout
- JavaScript vanilla (sin dependencias)
- Google Fonts: Playfair Display, Crimson Pro, Barlow
- Imágenes: Unsplash CDN (licencia libre)

## Autoría

Desarrollado por **José Francisco Martínez Martínez**

## Licencia

MIT — ver archivo [LICENSE](LICENSE)
