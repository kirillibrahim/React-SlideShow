import React, { useState } from "react";
import SlideItem from "./SlideItem";
function Slides({ slides }) {
  console.log(slides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledRestart, setDisabledRestart] = useState(true);
  const onClickNext = () => {
    let index = currentIndex;

    if (index < slides.length - 1) {
      index++;
      setCurrentIndex(index);
      setCurrentSlide(slides[index]);
      setDisabledPrev(false);
      setDisabledRestart(false);
    }

    if (index === slides.length - 1) {
      setDisabledNext(true);
    }
  };

  const onClickPrev = () => {
    let index = currentIndex;

    if (index > 0) {
      index--;
      setCurrentIndex(index);
      setCurrentSlide(slides[index]);
      setDisabledNext(false);
    }
    if (index === 0) {
      setDisabledPrev(true);
      setDisabledRestart(true);
    }
  };

  const onClickRestart = () => {
    setCurrentIndex(0);
    setCurrentSlide(slides[0]);
    setDisabledPrev(true);
    setDisabledNext(false);
    setDisabledRestart(true);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          onClick={() => onClickRestart()}
          className="small outlined"
          disabled={disabledRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          onClick={() => onClickPrev()}
          className="small"
          disabled={disabledPrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={() => onClickNext()}
          className="small"
          disabled={disabledNext}
        >
          Next
        </button>
      </div>
      <div>
        <SlideItem item={currentSlide} />
      </div>
    </div>
  );
}

export default Slides;
