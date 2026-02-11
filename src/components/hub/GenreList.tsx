import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading size="3xl" marginY={5}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontWeight={
                  genre.id === selectedGenre?.id ? "bolder" : "normal"
                }
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Link>
            </HStack>{" "}
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
