import React, { useMemo } from "react";
import Select from "react-select";
import cities from "../Cities.json";

function SelectCity(props) {
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
        color: "#9a9a9a",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  );

  return (
    <div>
      <Select options={cities} styles={customStyles} />
    </div>
  );
}

export default SelectCity;
