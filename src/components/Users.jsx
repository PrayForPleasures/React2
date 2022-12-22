import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  users: {
    color: "whitesmoke",
    textAlign: "center",
  },
  cont: {
    padding: "1% 0",
  },
  liStyle: {
    listStyleType: "none",
  },
}));

export function Users() {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setUsers(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <>Error: {error.message}</>;
  } else if (!loaded) {
    return <>Loading...</>;
  } else
    return (
      <>
        <Container className={classes.cont}>
          <ul className={classes.users}>
            {users.map((user) => (
              <li className={classes.liStyle} key={user.id}>
                &#10155; NAME: {user.name}, USERNAME: {user.username}, E-MAIL:{" "}
                {user.email}
              </li>
            ))}
          </ul>
        </Container>
      </>
    );
}
