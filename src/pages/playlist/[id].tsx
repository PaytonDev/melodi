import { Box, Heading } from "@chakra-ui/react";
import { validateToken } from "../../../lib/auth";
import prisma from "../../../lib/prisma";

import { GradientPage } from "../../components";

const Playlist = ({ playlist }) => {
  return (
    <Box>
      <Heading>{playlist?.name}</Heading>
    </Box>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.MELODI_ACCESS_TOKEN); // TODO: Fix this. It returns undefined
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
