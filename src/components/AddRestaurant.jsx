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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ChatIcon,
  AddIcon,
  LinkIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import fondo from "../img/fondo.jpg";

function AddRestaurant() {
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
            <Heading size="lg">AddRestaurant</Heading>
            <Box w="100%">
              <Text>Name:</Text>
              <InputGroup>
                <InputLeftElement>
                  <ChatIcon color={colorInteractiveElements} />
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
              <Text>Speciality:</Text>
              <InputGroup>
                <InputLeftElement
                  children={
                    <ChevronRightIcon color={colorInteractiveElements} />
                  }
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="Mexican food"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>
            <Box w="100%">
              <Text>Image Url:</Text>
              <InputGroup>
                <InputLeftElement
                  children={<LinkIcon color={colorInteractiveElements} />}
                />
                <Input
                  color={colorText}
                  bg={colorBackgroundInputs}
                  placeholder="url.com"
                  borderColor="black"
                  _hover={{ borderColor: colorHover }}
                />
              </InputGroup>
            </Box>
            <HStack spacing={14}>
              <Button
                bg={colorInteractiveElements}
                color="white"
                leftIcon={<AddIcon color={colorHover} />}
                _hover={{ bg: colorHover, color: "black" }}
              >
                Add
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

export default AddRestaurant;
