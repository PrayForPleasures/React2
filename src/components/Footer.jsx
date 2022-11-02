import { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "../index";

const useStyles = makeStyles((theme) => ({
  bmNav: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  navAction: {
    color: "whitesmoke",
    "&.Mui-selected": {
      color: "whitesmoke",
      border: "1px solid lime",
      transition: "0.3s",
      transform: "scale(0.9)",
      borderRadius: "4px",
    },
  },
  allRights: {
    color: "whitesmoke",
    fontSize: "11px",
    opacity: "0.8",
    margin: "8px 0",
  },
  contain: {
    marginBottom: "8px",
  },
  typogr: {
    color: "whitesmoke",
    marginTop: "8px",
  },
}));

export const Footer = () => {
  const [value, setValue] = useState("recents");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container className={classes.contain}>
        <Typography variant="h6" align="center" className={classes.typogr}>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          className={classes.bmNav}
          onChange={handleChange}
        >
          <BottomNavigationAction
            className={classes.navAction}
            label="Recents"
            value="recents"
            icon={<RestoreIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            className={classes.navAction}
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            className={classes.navAction}
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon className={classes.icons} />}
          />
          <BottomNavigationAction
            className={classes.navAction}
            label="Folder"
            value="folder"
            icon={<FolderIcon className={classes.icons} />}
          />
        </BottomNavigation>
      </Container>
      <hr className="hr_style"></hr>
      <Container>
        <Typography className={classes.allRights} align="left">
          &copy; All Right Reserved{" "}
          <span style={{ color: "lime" }}>"Dmitriy Yarchuck"</span> corp.
        </Typography>
        <Typography></Typography>
      </Container>
    </>
  );
};
