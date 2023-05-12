import { useDispatch } from "react-redux";
import Select from "react-select";
import { options } from "./DropDownOptions/";
import { CustomStyle } from "./DropDownStyles.js";

function DropDown() {
  const dispatch = useDispatch();

  function selectOption(selectedOption) {
    return {
      type: "users/setFilter",
      payload: selectedOption,
    };
  }

  const handleChange = (selectedOption) => {
    dispatch(selectOption(selectedOption));
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      autoFocus={true}
      placeholder="Are you following..."
      styles={CustomStyle}
    />
  );
}

export default DropDown;
