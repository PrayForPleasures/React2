import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Button, Container } from "@material-ui/core";

export const MainPage = () => {
  const [messages, setMessages] = useState();

  return (
    <Box>
      <Container fixed>
        <Button>click</Button>
      </Container>
    </Box>
  );
};
