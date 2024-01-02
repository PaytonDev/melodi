import { GradientPage } from "../components";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useUser } from "../../lib/hooks";
import prisma from "../../lib/prisma";

export default function Home({ artists }) {
  const { user, isError } = useUser();

  console.log(isError);

  const imageUrl =
    "https://images.unsplash.com/photo-1612833609248-5b7bce5b9b0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <GradientPage
      color="red"
      image={imageUrl}
      subtitle="subtitle"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user.playlistCount} public playlists`}
      roundImage={true}
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">Only visible to you.</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box padding="16px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" padding="16px" width="100%">
                <Image
                  boxSize="160px"
                  boxShadow="2xl"
                  src="http://placekitten.com/g/300/300"
                  borderRadius="100%"
                />
                <Box paddingY="16px">
                  <Text>{artist.name}</Text>
                  <Text>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientPage>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: {
      artists,
    },
  };
};
