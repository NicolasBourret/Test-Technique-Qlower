import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    borderRadius: "1rem",
  },
  cardMedia: {
    flex: 1,
  },
  cardText: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
  },
  subtitle: {
    marginBottom: "30px",
  },
});

const CardItem = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContent}>
      <CardMedia
        image="https://source.unsplash.com/random"
        title="random image"
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardText}>
        <Typography
          component="h3"
          variant="subtitle2"
          className={classes.subtitle}
        >
          {title}
        </Typography>
        <CardActions className={classes.cardAction}>
          <NotificationsIcon />
          <Button
            size="small"
            color="primary"
            variant="outlined"
            endIcon={<EditIcon />}
          >
            Modifier
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardItem;
