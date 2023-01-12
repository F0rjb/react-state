import "./App.css";
import React, { Component } from "react";

import {
  ChakraProvider,
  Text,
  Stack,
  Image,
  Heading,
  Divider,
  Card,
  CardBody,
  Center,
  Button,
} from "@chakra-ui/react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: { date: new Date() },
      Person: {
        fullName: "John Doe",
        bio: "Enigma",
        imgSrc: "/pp.jpg",
        profession: "Professional Paint Drying Watcher ",
      },
      shows: true,
      mountTime: 0,
    };
  }

  componentDidMount() {
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      this.setState({ mountTime: (Date.now() - this.startTime) / 1000 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      Count: this.Count + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <ChakraProvider>
          <Center>
            {this.state.shows ? (
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={this.state.Person.imgSrc}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{this.state.Person.fullName}</Heading>
                    <Text>{this.state.Person.bio}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {this.state.Person.profession}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            ) : (
              ""
            )}
          </Center>
          <Button
            marginTop="8"
            align="center"
            onClick={() => this.setState({ shows: !this.state.shows })}
          >
            {" "}
            Click Me{" "}
          </Button>
          <h2>
            {" "}
            It is ✍️ {this.state.mountTime} ⏱️ seconds since we've been mounted
          </h2>
        </ChakraProvider>
      </div>
    );
  }
}

export default App;
