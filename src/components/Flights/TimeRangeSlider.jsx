import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./TimeRangeSlider.css";

const TimeRangeSlider = ({ min, max, onChange, inputType }) => {
  const [minVal, setMinVal] = useState(convertToType(min));
  const [maxVal, setMaxVal] = useState(convertToType(max));
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  function convertToType(value) {
    if (inputType === "time") {
      const hours = Math.floor(value);
      const minutes = (value % 1) * 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    } else {
      return value;
    }
  }

  // Convert time or price to numerical value
  function convertToValue(val) {
    if (inputType === "time") {
      const [hours, minutes] = val.split(":").map(Number);
      return hours + minutes / 60;
    } else {
      return parseFloat(val);
    }
  }

  // Set width of the range
  useEffect(() => {
    if (range.current) {
      const minPercent = ((convertToValue(minVal) - min) / (max - min)) * 100;
      const maxPercent = ((convertToValue(maxVal) - min) / (max - min)) * 100;
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, max, minVal, maxVal]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: convertToValue(minVal), max: convertToValue(maxVal) });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="pt-4">
      <input
        type="range"
        min={min}
        max={max}
        step="0.5"
        value={convertToValue(minVal)}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(
            +event.target.value,
            convertToValue(maxVal) - 0.5
          );
          setMinVal(convertToType(value));
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": convertToValue(minVal) > max - 0.5,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        step="0.5"
        value={convertToValue(maxVal)}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(
            +event.target.value,
            convertToValue(minVal) + 0.5
          );
          setMaxVal(convertToType(value));
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider ">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        {inputType === "time" ? (
          <>
            <div className="slider__left-value text-gray-700">{minVal}</div>
            <div className="slider__right-value text-gray-700">{maxVal}</div>
          </>
        ) : (
          <>
            <div className="slider__left-value text-gray-700">US ${minVal}</div>
            <div className="slider__right-value text-gray-700">
              US ${maxVal}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TimeRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  inputType: PropTypes.oneOf(["time", "price"]).isRequired,
};

export default TimeRangeSlider;
