import { Box, Button, Card, Flex, Icon, Image, Tag, Text } from "@chakra-ui/react";
import { HiHeart, HiStar } from "react-icons/hi";

interface MovieCardProps {
  title: string;
  description: string;
  writer: string;
  releaseDate: string;
  image: string;
  voteAverage: number;
  genres: string[]; 
}
const MovieCard = ({
  title,
  description,
  writer,
  releaseDate,
  image,
  voteAverage,
  genres,
}: MovieCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={image || "https://picsum.photos/id/237/200/300"}
        alt={title}
        height="200px"
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {releaseDate && (
            <Text fontWeight={"bolder"}>Release Date: {releaseDate}</Text>
          )}
          {description}
        </Card.Description>

        <Flex direction="column" gap="8" justifyContent="space-between">
          <Flex gap="4" justify="space-between">
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              By: {writer}
            </Text>
            <Icon size="lg" color="pink.700">
              <HiHeart />
            </Icon>

            <Text display="flex" alignItems="center" gap="1">
              {voteAverage}
              <Icon size="sm" color="yellow.500">
                <HiStar />
              </Icon>
            </Text>
          </Flex>
        </Flex>
        <Tag.Root gap="2">
          {genres && genres.map((genre: string) => (
            <Tag.Label key={genre}>{genre}</Tag.Label>
          ))}
        </Tag.Root>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default MovieCard;
