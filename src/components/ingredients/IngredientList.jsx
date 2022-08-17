import { HStack, Button, Center } from "@chakra-ui/react";
import { lazy, useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import fondo from "../../img/fondo.jpg";

const IngredientCard = lazy(() => import("./IngredientCard"));

function IngredientList() {
  const [ingredients, setIngredients] = useState([]);
  const colorInteractiveElements = "blue.600";
  const colorHover = "blue.300";
  const history = useNavigate();

  useEffect(() => {
    fetch("https://lighthearted-beignet-0eb9c3.netlify.app/api/ingredients", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setIngredients(data.ingredients));
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
            {ingredients.map((ingredient) => (
              <IngredientCard
                key={ingredient.id}
                name={ingredient.name}
                kind={ingredient.kind}
                imageUrl={ingredient.imageURL}
              />
            ))}
          </Suspense>
        </HStack>
        <Button
          bg={colorInteractiveElements}
          onClick={() => {
            history("/ingredients");
          }}
          color="white"
          _hover={{ bg: colorHover, color: "black" }}
        >
          Add
        </Button>
      </Center>
    </div>
  );
}

export default IngredientList;
