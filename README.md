# Integrantes y correos
- Julie Andrea Padilla González j.padillag@uniandes.edu.co
- Julián Cáceres Florez j.caceresf@uniandes.edu.co

# Entorno inicial
Se debe instalar el proyecto ejecutando en la raíz de este:
```
npm i 
```

Es necesario contar con Cypress instalado, preferiblemente de forma global en el equipo. Para hacerlo:
```
npm install cypress -g
```
También es necesario contar con Node.js y npm.

Tener la aplicación Ghost instalada y corriendo en el entorno local, las pruebas se ejecutaron sobre la versión 4.41.3

# Descripción de escenarios 

https://github.com/jcaceresf/pruebas-automatizadas-semana-7/wiki/Descripci%C3%B3n-de-escenarios

# Instrucciones para correr las pruebas 

Configurar el archivo env.js con los datos locales de su aplicación incluyendo el puerto, usuario y password.

## Escenarios con generación de datos aleatorios a priori 
###### *(cypress/integration/a_priori_cases)*
Para crear un nuevo pool de datos aleatorios, ejecutar en la raíz del proyecto: 
```
node poolGenerator.js
```
El nuevo pool de datos será guardado en la carpeta cypress/fixtures/pool.json. Posteriormente, ejecutar dentro de la raíz del proyecto:

```
cypress open
```

Con esto se abrirá una ventana con la interfaz de Cypress donde se puede seleccionar con doble click el caso a ejecutar. Para ejecutarlos se presupone que se tiene una versión local de Ghost funcionando, cuya URL debe ser ingresada en la propiedad URL del archivo cypress/integration/env.js, además de los datos de loggeo del usuario administrador. 

## Escenarios con un pool dinámico
###### *(cypress/integration/dynamic_pool)*
Ya que el pool será creado durante la ejecución de la prueba, sólo es necesario ejecutar: 
```
cypress open
```
Y comenzar a seleccionar los casos a probar.

## Escenarios con datos aleatorios
###### *(cypress/integration/random_case_scenario)*
Seguir las instrucciones del paso anterior. 
