# Portafolio

Portafolio personal de Pedro Omar ([@pedroomar23](https://github.com/pedroomar23)),
Desarrollador Móvil con experiencia en Swift, SwiftUI y UIKit.

Sitio estático sin build: `index.html` solo define contenedores vacíos y cada
sección se inyecta desde un script con `innerHTML` al dispararse `DOMContentLoaded`.

## Estructura

```
index.html                  Contenedores y carga de scripts
public/styles/styles.css    Tema, layout y responsive
src/scripts/navigation.js   Header con foto, nombre y enlaces
src/scripts/aboutme.js      Sección About Me
src/scripts/wifihub.js      Sección Proyectos (WifiHub)
src/scripts/footer.js       Redes sociales y texto del pie
public/assets/              Iconos, foto de perfil e imágenes
```

## Desarrollo local

```bash
python3 -m http.server 8000
```

Abre http://localhost:8000/ — es necesario usar un servidor porque las rutas
de los assets son absolutas (`/public/...`, `/src/...`).

## Despliegue

Cada push a `main` ejecuta `.github/workflows/static.yml`, que publica la raíz
del repositorio en GitHub Pages:

https://pedroomar23.github.io/
