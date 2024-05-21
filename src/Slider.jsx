import React, { useEffect, useRef, useState } from "react";
import style from "./Slider.module.css";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Slider({ children, settings = {} }) {
    // Convertir children en un array
    const childrenArray = React.Children.toArray(children);

    // Configuraciones del carrusel
    const { height = "100%", width = "100%", smooth = false, smoothTime = "0.3", infiniteScroll = false, dots = false, arrows = true, autoplay = false, autoplayInterval = 3000, initialSlide = 0 } = settings;

    // Referencia al carrusel y almacena el estado con la posición actual del carrusel
    const big = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(initialSlide);

    // Función para mover el carrusel a una posición específica
    const goToSlide = (index) => {
        setCurrentPosition(index);
        big.current.style.transform = `translateX(calc(-${100 / childrenArray.length}% * ${index}))`;
    };

    // Función para avanzar el carrusel
    const onNext = () => {
        const newPosition = currentPosition + 1 >= childrenArray.length ? 0 : currentPosition + 1;
        goToSlide(newPosition);
    };

    // Función para retroceder el carrusel
    const onPrev = () => {
        const newPosition = currentPosition - 1 < 0 ? childrenArray.length - 1 : currentPosition - 1;
        goToSlide(newPosition);
    };

    // Setea la posición inicial del carrusel
    useEffect(() => {
        goToSlide(initialSlide);
    }, [initialSlide]);

    // Si está activado, crea el intervalo para cambiar las diapositivas
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(onNext, autoplayInterval);
            return () => clearInterval(interval);
        }
    }, [currentPosition, autoplay, autoplayInterval]);

    return (
        <section className={style.container} style={{ height, width }}>
            <div
                className={style.containerBig}
                style={
                    smooth
                        ? {
                              transition: `transform ${smoothTime}s`,
                              width: `${childrenArray.length}00%`,
                          }
                        : { width: `${childrenArray.length}00%` }
                }
                ref={big}
            >
                {childrenArray.map((child, index) => (
                    <div key={index} className={style.containerBigCard} style={{ width: `calc(100% / ${childrenArray.length})` }}>
                        {child}
                    </div>
                ))}
            </div>
            <div className={style.containerNavbar}>
                {arrows && <MdOutlineArrowBackIosNew className={!infiniteScroll && currentPosition === 0 ? style.containerNavbarButtonDisabled : style.containerNavbarButton} onClick={!infiniteScroll && currentPosition === 0 ? () => {} : onPrev} />}
                {dots && (
                    <div className={style.containerNavbarDots}>
                        {childrenArray.map((child, index) => (
                            <div key={index} className={currentPosition === index ? style.containerNavbarDotsDotCurrent : style.containerNavbarDotsDot} onClick={() => goToSlide(index)}></div>
                        ))}
                    </div>
                )}
                {arrows && <MdOutlineArrowForwardIos className={!infiniteScroll && currentPosition === children.length - 1 ? style.containerNavbarButtonDisabled : style.containerNavbarButton} onClick={!infiniteScroll && currentPosition === children.length - 1 ? () => {} : onNext} />}
            </div>
        </section>
    );
}
