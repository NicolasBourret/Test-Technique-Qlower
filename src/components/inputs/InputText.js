import { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "0.5rem 0",
  },
});

const InputText = ({ required, label, id, onChange }) => {
  const [value, setvalue] = useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setvalue(inputValue);
    onChange(inputValue);
  };

  return (
    <TextField
      required={required}
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      className={classes.root}
    />
  );
};

const InputTextRequired = ({ label, id, onChange }) => {
  return (
    <InputText required={true} id={id} label={label} onChange={onChange} />
  );
};

export { InputText, InputTextRequired };
