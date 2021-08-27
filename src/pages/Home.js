import { Button, Paper, Typography, Container } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PropertiesList from "../features/properties/PropertiesList";
import CardItem from "../components/CardItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: "1rem 0",
    borderStyle: "dashed",
    borderRadius: "1rem",
  },
  container: {
    padding: "1rem",
    borderRadius: "1rem",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Container maxWidth="md" className={classes.root}>
        <Typography component="h1" variant="h5">
          Mes Propriétés (Juillet)
        </Typography>
        <Button color="primary" endIcon={<EditIcon />}>
          Gérer mes propriétés
        </Button>
      </Container>
      <Container maxWidth="md">
        <Link to="/add-property">
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<AddCircleOutlineIcon />}
            className={classes.button}
          >
            Ajouter une propriété
          </Button>
        </Link>
      </Container>
      <Container maxWidth="md">
        <Paper elevation={2} className={classes.container}>
          <Typography component="h2" variant="h6">
            Mes simulations
          </Typography>
          <CardItem title="Mes simulations" />
        </Paper>
      </Container>
      <PropertiesList />
    </Container>
  );
};

export default Home;
