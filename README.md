# Plantilla base ![GitHub package.json version](https://img.shields.io/github/package-json/v/rr69sport/plantilla-base) ![GitHub repo size](https://img.shields.io/github/repo-size/rr69sport/plantilla-base) ![GitHub](https://img.shields.io/github/license/rr69sport/plantilla-base)

Una plantilla de HTML, CSS y JavaScript básica para proyectos de páginas estáticas.

Usa Gulp en su versión 4 para ejecutar las tareas.

Transpila el HTML, el CSS y el JavaScript para que sea posible trabajar en una carpeta de desarrollo(src) y otra carpeta con todos los archivos(public) para subir a producción.

Utiliza [Browser Sync](https://browsersync.io/docs/gulp) para levantar un servidor de desarrollo en tiempo real.

***

## Cómo usarlo

Descargue o clone este repositorio.
La estructura de carpetas esta pensado segun el patronde carpetas smacss, patron 7-1.
Ejecute en terminal `npm install`

Pasos para iniciar el repositorio
Descarga el proyecto con git clone o como zip
En el directorio del proyecto abre una terminal y escribe npm install
Una vez terminada la instalación escribe el comando gulp

Disfrute!

### Pug

`views` es donde tendrá todo lo relacionado a Pug que se compilará a HTML

En la carpeta `config` va todo lo relacionado a variables configuraciones que necesite. Puede llamar a esta carpeta tambien con el nombre de abstracts

En la carpeta `includes` van los bloques de código que no se repetirán a lo largo de la web.

En la carpeta `layout` si desea puede omitirla y usar `includes` en su lugar ya que van los bloques que no se repiten a lo largo de la web. Aunque es más deducible lo que hacen estos archivos al estar en esta carpeta,

La carpeta `pages` contendrá las páginas de la web, ej: index, about, contact etc etc.

`templates` es una carpeta que contendrá los templates que reutilizará a lo largo del proyecto

### SCSS

En la carpeta `scss` contendrá todo lo relacionado a css.

En `config` contendrá sus archivos de variables (scss, css) funciones, mixins, placeholders de sass Puede llamar a esta carpeta tambien con el nombre de `abstracts`

En `layout` debería de existir los mismos archivos que la carpeta `layout` de Pug

`components` es la carpeta para componentes que se repetirán a lo largo de la web como botones, menus, slider etc etc

El archivo `styles` solo importará lo necesario para sus estilos de css

### Javascript

El archivo `scripts` puede añadir todo sobre la pogramacion del sitio
