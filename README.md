
# ENCABEZADOS PRINCIPAL

## Encabezado 2

**Texto bold**
__Texto bold 2__
>Texto con sangria

`Texto entre comillas`

``` 
Bloques de codigo

function Main(){
    const ROUTER = new Router();
    ROUTER.startRouter();

    window.addEventListener("hashchange", (e) => {
        ROUTER.startRouter();
    });
};
```

Puedo implementar y visualizar colores : `#0969DA`, pero esto solo aplica en problemas, solicitudes de incorporación de cambios y debates.

Esto es un link: [MessengerService.app](http://127.0.0.1:5500/dashboard.html?#/)

## Insertando vinculos entre secciones

### Seccion 1
Esto seria un texto ramdon...

### Seccion 2
Esto seria un texto ramdon...

### Seccion 3
Esto seria un texto ramdon...

Este vinculo apunta: [Seccion 1](#seccion-1)

Este vinculo apunta: [Seccion 2](#seccion-2)

Este vinculo apunta: [Seccion 3](#seccion-3)

## Insertando vinculos para secciones con nombre iguales.

### Seccion de prueba
Esto seria un texto ramdon....

### Seccion de prueba
Esto seria un texto ramdon....

Este vinculo apunta a la segunda seccion gracias a implementar el identificador -1: [Seccion de prueba 2](#seccion-de-prueba-1)

Este vinculo apunta a la segunda seccion gracias a implementar el identificador: [Seccion de prueba 1](#seccion-de-prueba)

# VINCULOS RELATIVOS

Este vinculo apunta a la documentacion del sistema de eventos: [Sistema de eventos](js/modules/Event_system/Event_system.md)

# Section Heading

Some body text of this section.

<a name="my-custom-anchor-point"></a>
Este vinculo apunta a la segunda seccion gracias a implementar el identificador:Este 

[A link to that custom anchor](#my-custom-anchor-point)

# INSERTANDO IMAGENES
![Digarama de flujo inicio de seccion](/DiagramaFlujo/AutenticacionUsuario.png)

# MOSTRAR IMAGENES EN BASE AL TEMA DE FONDO ( DARK - LIGHT)
<picture>
    <!-- luna -->
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
    <!-- sol -->
    <source media="(prefers-color-scheme: light )" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
    <!-- sol -->
    <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

# CREAR LISTAS DESORDENADAS

Lista de colaboradores del proyecto.

### Colaboradores

+ Carlos montalvez **(frontend)**
- Maria sinclar **(Diseño)**
* Victo solarte **(Backend)**

# CREAR LISTAS ORDENADAS

1. Carlos montalvez **(frontend)**
2. Maria sinclar **(Diseño)**
3. Victo solarte **(Backend)**

# LISTAS ANIDADAS/SANGRIA

Requisitos

1. Desarrollador frontend
    - html5
    - css3
    - javascript

1. Desarrollador backend
    - api rest
    - base de datos 
    - redes
    
# LISTAS DE TAREAS

Funcionalidades a trabajar:

- [x] Seccion de login.  
- [ ] Seccion olvide mi contraseña.
- [ ] Seccion autenticacion.

# MENCIONAR EQUIPOS

@DavidMontano1997

[Idea de proyecto: biblioteca para servicios de google](https://github.com/jlord/sheetsee.js)

# AGREGAR EMOJIS

Se usa la sentencia `:nombreEmoji:`, para los nombres de emoji 
ver el [recuros](https://github.com/ikatyang/emoji-cheat-sheet/tree/master?tab=readme-ov-file#smileys--emotion)

# AGREGAR NOTAS DE PIE 

`El fecto y comporamiento se ve directamente de github`

Esto seria una nota de pie[^1]

Esto seria otra nota de pie[^2]

[^1]: Este seria el texto de la primera nota de pie.
[^2]: Este seria el segundo texto de la nota de pie.

# CREAR ALERTAS

Existen 5 tipos de alerta:

> [!NOTE]
> Información útil que los usuarios deben conocer, incluso cuando el contenido.
> ```
> function requesBD(arguments){
>    arguments.forEach( arg => arg.ejec());
> }
> ```

> [!TIP]
> Consejos útiles para hacer las cosas mejor o más fácilmente.

> [!IMPORTANT]
> Información clave que los usuarios necesitan saber para lograr su objetivo

> [!WARNING]
> Información urgente que necesita atención inmediata del usuario para evitar problemas.

> [!CAUTION]
> Asesora sobre riesgos o resultados negativos de determinadas acciones.

# CREANDO DIAGRAMAS

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```











