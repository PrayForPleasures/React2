import {
  Container,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import imgs from "../imgs/limebl.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    marginBottom: "24px",
    marginTop: theme.spacing(1),
  },
  gridCont: {
    marginTop: "16px",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: { flexGrow: 1 },
  card: {
    border: "1px solid white",
    backgroundColor: "black",
    color: "whitesmoke",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.05)",
    },
  },
  buttonOne: {
    color: "whitesmoke",
    width: "80px",
    marginRight: "8px",
    "&:hover": {
      transition: "0.3s",
      border: "1px solid lime",
    },
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  iconStyle: {
    "&:hover": {
      transition: "0.5s",
      color: "lime",
    },
  },
}));

const cards = [1, 2, 3];

export const MainContent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid className={classes.gridCont} container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={imgs}
                title="Image Title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>Post # {card}</Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  size="small"
                  variant="outlined"
                  color="inherit"
                  className={classes.buttonOne}
                >
                  Click
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="inherit"
                  className={classes.buttonOne}
                >
                  Edit
                </Button>
                <LayerIcon className={classes.iconStyle} />
                <PlayCircleFilledIcon className={classes.iconStyle} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
