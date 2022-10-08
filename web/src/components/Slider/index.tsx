import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { Arrow } from "./Arrow";

import { SContainer, SReturnStart, SSlider } from "./styled";

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
      perView: 1.5,
      spacing: 20
    },
    breakpoints: {
      "(min-width: 321px) and (max-width: 425px)": {
        slides: {
          perView: 2,
          spacing: 15
        }
      },
      "(min-width: 426px) and (max-width: 768px)": {
        slides: {
          perView: 3.5,
          spacing: 15
        }
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 20
        }
      },
      "(min-width: 1025px) and (max-width: 1440px)": {
        slides: {
          perView: 5,
          spacing: 20
        }
      },
      "(min-width: 1441px)": {
        slides: {
          perView: 6,
          spacing: 20
        }
      }
    }
  });

  return (
    <SContainer className="navigation--wrapper">
      {loaded && instanceRef.current && (
        <Arrow 
          left
          onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
          disabled={currentSlide === 0}
        />
      )}

      <SSlider ref={sliderRef} className="keen-slider">
        {children}
      </SSlider>

      {loaded && instanceRef.current && (
        <Arrow 
          onClick={e => e.stopPropagation() || instanceRef.current?.next()}
          disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
        />
      )}
    </SContainer>
  );
}
