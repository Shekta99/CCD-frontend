import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  Input,
  VStack,
  InputLeftElement,
  HStack,
  InputGroup,
  InputRightElement,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import fondo from "../img/fondo.jpg";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const colorShowIcon = useColorModeValue("gray.500", "white");
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const { colorMode, toggleColorMode } = useColorMode();
  const colorBackground = useColorModeValue("gray.300", "gray.700");
  const colorBackgroundInputs = useColorModeValue("white", "gray.500");
  const colorText = useColorModeValue("black", "white");

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        height: "100vh",
        width: "100%",
        margin: 0,
        backgroundSize: "cover",
      }}
    >
      <Box
        maxW="sm"
        marginX="auto"
        bg={colorBackground}
        borderRadius="xl"
        p={5}
      >
        <Center>
          <VStack spacing={8}>
            <Heading size="lg">Login</Heading>
            <Box w="100%">
              <Text>Email:</Text>
              <InputGroup>
                <InputLeftElement>
                  <EmailIcon color={colorInteractiveElements} />
                </InputLeftElement>
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="email@email.com"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>

            <Box w="100%">
              <Text>Password:</Text>
              <InputGroup>
                <InputLeftElement
                  children={<LockIcon color={colorInteractiveElements} />}
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="password"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                  type={show ? "text" : "password"}
                />
                <InputRightElement onClick={handleClick}>
                  {show ? (
                    <ViewOffIcon color={colorShowIcon} />
                  ) : (
                    <ViewIcon color={colorShowIcon} />
                  )}
                </InputRightElement>
              </InputGroup>
            </Box>
            <HStack spacing={14}>
              <Button
                bg={colorInteractiveElements}
                color="white"
                _hover={{ bg: colorHover, color: "black" }}
              >
                Sign-in
              </Button>
              <Button
                bg={colorInteractiveElements}
                onClick={toggleColorMode}
                color="white"
                _hover={{ bg: colorHover, color: "black" }}
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}

export default Login;
