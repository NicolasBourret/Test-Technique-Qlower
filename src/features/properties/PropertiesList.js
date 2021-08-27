import { useEffect } from "react";
import { List, ListItem, Typography, Container } from "@material-ui/core";
import CardItem from "../../components/CardItem";
import { makeStyles } from "@material-ui/core/styles";
import { selectAllProperties, fetchProperties } from "./propertiesSlice";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  listItem: {
    display: "inline-block",
  },
});

const PropertiesList = () => {
  const dispatch = useDispatch();

  const properties = useSelector(selectAllProperties);
  const propertyStatus = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);

  const classes = useStyles();

  useEffect(() => {
    if (propertyStatus === "idle") {
      dispatch(fetchProperties());
    }
  }, [propertyStatus, dispatch]);

  return (
    <Container maxWidth={"md"}>
      {propertyStatus === "loading" && (
        <Typography component="p" variant="body1">
          Chargement des propriétés...
        </Typography>
      )}
      {propertyStatus === "succeeded" && (
        <List>
          {properties.map((property) => {
            return (
              <ListItem className={classes.listItem} key={property.id}>
                <CardItem title={property.name} />
              </ListItem>
            );
          })}
        </List>
      )}
      {propertyStatus === "failed" && (
        <Typography component="p" variant="body1" color="secondary">
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default PropertiesList;
