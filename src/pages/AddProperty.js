import { Container, Typography } from "@material-ui/core";
import TouchAppRoundedIcon from "@material-ui/icons/TouchAppRounded";
import AddPropertyForm from "../features/properties/AddPropertyForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  info: {
    backgroundColor: "rgba(0, 0, 255, 0.1)",
    borderRadius: "1rem",
    display: "flex",
    padding: "0.5rem",
  },
  icon: {
    color: "#40AFAC",
  },
});

const AddProperty = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography component="h3" variant="h3">
        Détailler une propriété
      </Typography>
      <Typography component="p" variant="body1">
        Renseignez votre bien en 5 minutes avec les documents suivants
      </Typography>
      <Typography component="div" variant="body1">
        <ul>
          <li>Bail de location en cours</li>
          <li>Tableau d'amortissement des crédits associés</li>
        </ul>
      </Typography>
      <Container maxWidth="md" className={classes.info}>
        <TouchAppRoundedIcon className={classes.icon} />
        <Typography component="p" variant="body1" color="primary">
          Vous pourrez toujours revenir sur ce bien à tout moment pour le
          compléter
        </Typography>
      </Container>
      <AddPropertyForm />
    </Container>
  );
};

export default AddProperty;
