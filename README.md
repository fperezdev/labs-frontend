# labs-frontend

## Tabla de contenidos

- [labs-frontend](#labs-frontend)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Stack Tecnológico](#stack-tecnológico)
  - [Levantar el Servicio](#levantar-el-servicio)
    - [Localmente](#localmente)
  - [Idiomas](#idiomas)
  - [Convenciones](#convenciones)
  - [Contribuyentes](#contribuyentes)

## Descripción

`labs-frontend` es una aplicación de frontend para el proyecto Labs, cuyo objetivo es mejorar la gestión de los laboratorios de computación.

## Stack Tecnológico

- Node.js LTS 18.17.0
- yarn 1.22.19
- react 18.2.0
- vite 4.4.5
- eslint 8.45.0
- prettier 3.0.3
- husky 8.0.3

## Levantar el Servicio

### Localmente

Para levantar el servicio localmente es necesario cumplir los siguientes requisitos:

1. Tener instalado [Node.js](https://nodejs.org/) en su versión 18.17.0 preferentemente.
2. Tener instalado [yarn](https://yarnpkg.com/), se puede instalar con el comando `npm install --global yarn`

Y seguir los siguientes pasos:

1. Clonar el repositorio `labs-frontend` y entrar en la carpeta del proyecto.
2. Instalar los paquetes necesarios con el comando `yarn install`.
3. Tener las variables de entorno necesarias en un archivo .env en la ruta principal del proyecto. Este archivo se puede conseguir con @Francisco Perez.
4. Correr la aplicación en modo desarrollo con el comando `yarn dev`.

## Idiomas

Español.

## Convenciones

- Se recomiendo utilizar el editor de texto VSCode para poder instalar las siguientes extensiones de `eslint` y `prettier`:

  ```
  - dbaeumer.vscode-eslint
  - esbenp.prettier-vscode
  ```

## Contribuyentes

Francisco Pérez
