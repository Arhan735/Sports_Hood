import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function GoogleMap({ setCityData }) {
  const [address, setAddress] = React.useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    // const latLng = await getLatLng(results[0]);
    setCityData(value);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "City" })} />

            <div className="autocomplete-dropdown-container">
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "##d8f0f0" : "#fff",
                  width: suggestion.active ? "300px" : "300px",
                  padding: "10px",
                  color: "#b4aeae",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
