import {
  Badge,
  Box,
  Center,
  Heading,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const RestaurantCard = ({ name, speciality, imageUrl }) => {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size="2xl"
            src={imageUrl}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Badge borderRadius="full" px="2" colorScheme={"teal"}>
            {"Restaurante disponible"}
          </Badge>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {speciality.toString()}
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default RestaurantCard;
