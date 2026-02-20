import {
  Box,
  Flex,
  Input,
  InputGroup,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchQuery } from "./MovieSlice";
import CustomSelect from "../UIComponents/CustomSelect";
import { getAllGenres, getMoviesBySearch } from "@/api/moviesApi";
import { debounce } from "lodash";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, genres } = useAppSelector((state) => state.movies);

  const handleClearSearch = () => {
    dispatch(setSearchQuery(""));
  }

  const handleSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getMoviesBySearch(e.target.value));
  }, 500);

  const endElement = () => {
    return (
      <Button
        h="1.75rem"
        size="sm"
        onClick={handleClearSearch}
        variant="ghost"
        color="gray.500"
      >
        <Icon as={FiX} />
      </Button>
    );
  };

  return (
    <Box bg="white" shadow="md" py={4} px={6} my={4}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold" color="blue.800">
          MovieHub
        </Text>

        {/* Search Form and Selects */}
        <Flex align="center" gap={4} flex={2} maxW="600px" ml={8}>
          {/* Search Input */}
          <InputGroup flex={2} endElement={searchQuery && endElement()}>
            <Input
              placeholder="Search movies..."
            //   value={searchQuery}
              onChange={handleSearchChange}
              pr="4.5rem"
              w="100%"
            />
          </InputGroup>

          {/* Search Button */}
          <Button colorScheme="blue" size="md">
            Search
          </Button>

          {/* genre */}
          <CustomSelect name="genres" options={genres} placeholder="Genre" />

          {/* Year Select */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
