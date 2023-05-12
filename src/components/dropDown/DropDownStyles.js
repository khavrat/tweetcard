export const CustomStyle = {
  control: (base, state) => ({
    ...base,
    marginBottom: "20px",
    height: "40px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    textTransform: "uppercase",
    backgroundColor: state.isFocused ? " #5CD3A8" : " #EBD8FF",
    border: state.isFocused ? "2px solid #5CD3A8" : "2px solid #DBBDFB",
    borderRadius: "8px",
    boxShadow: state.isFocused
      ? "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)"
      : "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      border: state.isFocused ? "2px solid #5CD3A8" : "2px solid #5CD3A8",
      cursor: "pointer",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6c757d",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    textTransform: "uppercase",
  }),
  option: (base, state) => ({
    ...base,
    marginBottom: "4px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    textTransform: "uppercase",
    color: "#373737",
    backgroundColor: state.isSelected ? "#DBBDFB" : "#DBBDFB",
    "&:hover": {
      backgroundColor: state.isFocused ? "#5CD3A8" : "#EBD8FF",
      cursor: "pointer",
    },
  }),
};