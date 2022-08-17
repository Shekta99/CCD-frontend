import { HStack, Button, Center } from "@chakra-ui/react";
import { lazy, useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import fondo from "../img/fondo.jpg";

const RestaurantCard = lazy(() => import("./RestaurantCard"));

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const history = useNavigate();

  useEffect(() => {
    fetch("https://lighthearted-beignet-0eb9c3.netlify.app/api/restaurants", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants));
  }, []);

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
      <Center>
        <HStack>
          <Suspense fallback={<h1>Loading...</h1>}>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                speciality={restaurant.speciality}
                imageUrl={restaurant.imageURL}
              />
            ))}
          </Suspense>
        </HStack>
        <Button
          bg={colorInteractiveElements}
          onClick={() => {
            history("/restaurants");
          }}
          color="white"
          _hover={{ bg: colorHover, color: "black" }}
        >
          Add
        </Button>
        <Button
          bg={colorInteractiveElements}
          onClick={() => {
            history("/ingredients-list");
          }}
          color="white"
          _hover={{ bg: colorHover, color: "black" }}
        >
          Ingredients
        </Button>
      </Center>
    </div>
  );
}

export default RestaurantList;
