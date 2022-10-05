import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { Arrow } from "./Arrow";

import { SContainer, SSlider } from "./styled";

interface SliderProps {
  children?: React.ReactNode;
}

export function Slider({ children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 6,
      spacing: 24
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: {
          perView: 2,
          spacing: 20
        }
      },
      "(min-width: 481px) and (max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20
        }
      },
      "(min-width: 769px) and (max-width: 1279px)": {
        slides: {
          perView: 4,
          spacing: 20
        }
      },
      "(min-width: 1279px)": {
        slides: {
          perView: 6,
          spacing: 20
        }
      }
    },
  });

  return (
    <SContainer className="navigation--wrapper">
      <SContainer className="slider--wrapper">
        <SSlider ref={sliderRef} className="keen-slider">
          {children}
        </SSlider>
      </SContainer>
      {loaded && instanceRef.current && (
        <>
          <Arrow 
            left
            onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow 
            onClick={e => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </SContainer>
  );
}
