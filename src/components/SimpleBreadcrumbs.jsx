import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function handleClick(event) {
  event.preventDefault();
  console.log(event.target.textContent);
}

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    color: "whitesmoke",
    "&:hover": {
      color: "Lime",
      textDecoration: "none",
    },
  },

  breadcrumbs: {
    justifyContent: "center",
  },
  underBread: {
    color: "whitesmoke",
    textAlign: "center",
  },
}));

export function SimpleBreadcrumbs() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Breadcrumbs
          style={{ display: "flex" }}
          className={classes.breadcrumbs}
          aria-label="breadcrumb"
        >
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10102; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10103; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10104; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10105; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10106; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10107; Page
          </Link>
          <Link className={classes.linkStyle} href="#" onClick={handleClick}>
            &#10108; Page
          </Link>
        </Breadcrumbs>
      </Container>
      <hr className="hr_style"></hr>
    </>
  );
}
