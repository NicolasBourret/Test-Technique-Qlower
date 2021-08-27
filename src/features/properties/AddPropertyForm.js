import { useState } from "react";
import { Container, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputSelect from "../../components/inputs/InputSelect";
import {
  InputText,
  InputTextRequired,
} from "../../components/inputs/InputText";
import { useDispatch } from "react-redux";
import { addNewProperty } from "./propertiesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: "1rem",
  },
  doubleInput: {
    display: "flex",
    padding: 0,
  },
  formButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  formContainer: {
    borderRadius: "1rem",
    padding: "1rem",
  },
});

const AddPropertyForm = () => {
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [city, setCity] = useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addNewProperty({
        id: nanoid(),
        type: propertyType,
        name: propertyName,
        address: propertyAddress,
        complement: addressComplement,
        code: cityCode,
        city: city,
      })
    );

    history.push("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.formContainer}>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <InputSelect
            label={"Type de propriété"}
            onChange={setPropertyType}
            id="propertyType"
          />
          <InputTextRequired
            label="Nom de la propriété"
            id="name"
            onChange={setPropertyName}
          />
          <InputTextRequired
            label="Adresse de la propriété"
            id="address"
            onChange={setPropertyAddress}
          />
          <InputText
            required={false}
            label="Complément d'adresse"
            id="complement"
            onChange={setAddressComplement}
          />
          <Container maxWidth="md" className={classes.doubleInput}>
            <InputTextRequired
              label="Code postal"
              id="cityCode"
              onChange={setCityCode}
            />
            <InputTextRequired label="Ville" id="city" onChange={setCity} />
          </Container>
          <Container maxWidth="md" className={classes.formButtonContainer}>
            <Button variant="contained" color="primary" type="submit">
              Continuer
            </Button>
          </Container>
        </form>
      </Paper>
    </Container>
  );
};

export default AddPropertyForm;
