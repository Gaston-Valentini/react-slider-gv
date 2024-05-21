# react-slider-gv

Desarrollado por Gastón Valentini

Este paquete se trata de un componente versátil y fácil de usar que le permitirá agregar carruseles interactivos a sus aplicaciones web desarrolladas con React. Con este componente, puede crear presentaciones de diapositivas dinámicas y atractivas para mostrar contenido de manera efectiva a los usuarios.

## Tabla de Contenidos

1. [Características](#características)
2. [Instalación](#instalación)
3. [Prop types y valores por defecto](#prop-types-y-valores-por-defecto)
4. [Contribución](#contribución)
5. [Desarrollador](#desarrollador---gastón-valentini)
6. [Licencia](#licencia)

## Características

-   **Personalizable**: Ofrece una variedad de opciones de personalización como ajuste de dimensiones, efecto y velocidad de transición, diferentes formatos de navegación y más. Puedes adaptar el aspecto y la funcionalidad del carrusel para que se ajuste perfectamente a tus necesidades y estilo de diseño.

-   **Fácil de usar**: Con una interfaz simple y clara, la integración en sus proyectos es rápida y sencilla. Simplemente importe el componente en su aplicación y pase los elementos deseados como contenido.

-   **Control de navegación**: Incluye botones de navegación incorporados que permiten a los usuarios avanzar y retroceder entre las diapositivas con facilidad. Esto ofrece una experiencia de usuario intuitiva y mejorada.

## Instalación

Para implementar esta librería simplemente debe seguir los siguientes pasos:

**1º Instalación del paquete**

Ubicado en la raíz del proyecto ejecute el siguiente comando:

```bash
npm install react-slider-gv
```

**2º Importación**

Importe el componente Slider y sus estilos en su proyecto:

```jsx
import Slider from "react-slider-gv";
import "react-slider-gv/dist/style.css";
```

**3º Implementación**

Para utilizar la librería, implemente el componente en su aplicación y pase los elementos deseados como contenido:

```jsx
export default function App() {
    return (
        <Slider>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
        </Slider>
    );
}
```

**4º Personalización**

Puede personalizar aún más el carrusel pasando configuraciones como props:

```jsx
export default function App() {
    const settings = {
        // Se muestra el objeto de configuración como ejemplo con los valores por defecto
        height: "100%",
        width: "100%",
        smooth: false,
        smoothTime: "0.3",
        infiniteScroll: false,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplayInterval: 3000,
        initialSlide: 0,
    };

    return (
        <Slider settings={settings}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
        </Slider>
    );
}
```

## Prop types y valores por defecto

En la siguiente tabla se muestra el tipo de dato y el valor por defecto de las propiedades del objeto de configuración:

| Prop               | Tipo      | Valor por Defecto | Descripción                                                                                      |
| ------------------ | --------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `height`           | `string`  | `"100%"`          | Alto del carrusel                                                                                |
| `width`            | `string`  | `"100%"`          | Ancho del carrusel                                                                               |
| `smooth`           | `boolean` | `false`           | Define si el carrusel tiene una transición suave                                                 |
| `smoothTime`       | `string`  | `"0.3s"`          | Duración de la transición en segundos (Debe ser menor o igual que la propiedad autoplayInterval) |
| `infiniteScroll`   | `boolean` | `false`           | Define si el carrusel tiene scroll infinito                                                      |
| `dots`             | `boolean` | `false`           | Define si el carrusel tendrá el navbar con puntos                                                |
| `arrows`           | `boolean` | `true`            | Define si el carrusel tendrá las flechas para navegar                                            |
| `autoplay`         | `boolean` | `false`           | Define si el carrusel cambiará automáticamente de diapositivas                                   |
| `autoplayInterval` | `number`  | `3000`            | Intervalo entre el cambio de las diapositivas (ms) (No se recomienda que sea inferior a 1000)    |
| `initialSlide`     | `number`  | `0`               | Diapositiva inicial que se mostrará en el carrusel                                               |

## Contribución

¡Contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto o encuentras algún problema, por favor abre un pull request en GitHub.

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza los cambios necesarios y realiza los commits (git commit -m 'Agrega nueva funcionalidad').
4. Empuja tus cambios (git push origin feature/nueva-funcionalidad).
5. Abre un pull request.

## Desarrollador - Gastón Valentini

-   LinkedIn: https://www.linkedin.com/in/gastonvalentini/
-   GitHub: https://github.com/Gaston-Valentini
-   Portfolio: https://www.gastonvalentini.com/

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

[Volver al inicio](#react-slider-gv)
