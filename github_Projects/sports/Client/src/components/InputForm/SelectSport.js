import React, { useMemo } from "react";
import Select from "react-select";
import sports from "../Sports.json";

function SelectSport({ setSportData }) {
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        color: "#9a9a9a",
        opacity: 0.8,
        padding: 20,
      }),
      control: (provided, state) => ({
        ...provided,
        border: " #cac6c6 solid 0.5px",
        background: "#ffff",
        fontFamily: "poppins",
        boxShadow: state.isFocused ? "1px solid black" : 0,

        "&:hover": {
          border: state.isFocused ? "1px solid #cac6c6" : "1px solid #cac6c6",
        },

        color: "#9a9a9a",
        height: 53,
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
      container: (provided, state) => ({
        ...provided,
        width: 300,
      }),

      container: (provided, state) => ({
        ...provided,
        width: 300,
      }),
      indicatorsContainer: (provided, state) => ({
        ...provided,
        display: "none",
      }),
    }),
    []
  );

  return (
    <div>
      <Select
        name="sports"
        placeholder="Sport"
        options={sports}
        styles={customStyles}
        onChange={(e) => {
          const selectedSport = e.value;
          setSportData(selectedSport);
        }}
      />
    </div>
  );
}

export default SelectSport;
