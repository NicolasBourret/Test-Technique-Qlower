import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: "1rem",
  },
});

const InputSelect = ({ label, onChange, id }) => {
  const [value, setvalue] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setvalue(inputValue);
    onChange(inputValue);
  };

  return (
    <FormControl variant="outlined" required className={classes.formControl}>
      <InputLabel id="propertyType">Type de propriété</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="appartment">Appartement</MenuItem>
        <MenuItem value="house">Maison</MenuItem>
      </Select>
    </FormControl>
  );
};

export default InputSelect;
