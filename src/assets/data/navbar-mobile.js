import uk from "../svgs/england.svg";
import usa from "../svgs/usa.svg";
export const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: "#AFAFAF",
  }),
};
export const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "normal" : "normal",
    color: "black",
    backgroundColor: "#ffffff",
  }),
};

export const options = [
  {
    value: "USA, English",
    label: (
      <div className="select__option">
        <img src={usa} />
        USA, English
      </div>
    ),
  },

  {
    value: "USA, English",
    label: (
      <div className="select__option">
        <img src={usa} />
        USA, English
      </div>
    ),
  },
];
