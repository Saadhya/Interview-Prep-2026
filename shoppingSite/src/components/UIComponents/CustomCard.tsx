import { Button, Card, Icon, Image, Text } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

interface MovieCardProps {
  title: string;
  description: string;
  price: string;
  releaseDate: string;
  image: string;
}
const CustomCard = ({
  title,
  description,
  price,
  releaseDate,
  image,
}: MovieCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={image} alt={title} />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {releaseDate && (
            <Text fontWeight={"bolder"}>Release Date: {releaseDate}</Text>
          )}
          {description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {price}
        </Text>
        <Icon size="lg" color="pink.700">
          <HiHeart />
        </Icon>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CustomCard;
