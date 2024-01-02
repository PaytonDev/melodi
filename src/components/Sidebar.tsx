import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";
import { usePlaylists } from "../../lib/hooks";

type NavItem = {
  name: string;
  icon: typeof MdHome;
  route: string;
};

const navMenu: NavItem[] = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Library", icon: MdLibraryMusic, route: "/library" },
  { name: "Playlists", icon: MdPlaylistAdd, route: "/playlists" },
  { name: "Favorites", icon: MdFavorite, route: "/favorites" },
];

const musicMenu: NavItem[] = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdFavorite, route: "/favorites" },
];

const MenuList = ({ menuItems }) => {
  return (
    <Box>
      <List spacing={1}>
        {menuItems.map((item: NavItem) => (
          <ListItem
            display="flex"
            alignItems="center"
            paddingY="4px"
            paddingX="16px"
            borderRadius="4px"
            key={item.name}
            _hover={{ backgroundColor: "gray.800" }}
          >
            <LinkBox>
              <NextLink href={item.route} passHref>
                <LinkOverlay>
                  <ListIcon as={item.icon} fontSize="16px" color="white" marginRight="20px" />

                  {item.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const Sidebar = () => {
  const { playlists } = usePlaylists();

  return (
    <Box width="100%" height="calc(100vh - 75px)" paddingX="8px" color="grey">
      <Box paddingY="20px" height="100%">
        <Box paddingY="16px" marginBottom="20px" width="120px">
          <Box height="60px" width="120px" fontSize="36px">
            Melodi
          </Box>{" "}
          {/* TODO: Replace with logo */}
        </Box>
        <MenuList menuItems={navMenu} />
        <Divider opacity="0.4" marginY="20px" />
        <MenuList menuItems={musicMenu} />
        <Divider opacity="0.4" marginY="20px" />
        <Box maxHeight="45%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((item) => (
              <ListItem
                paddingX="16px"
                paddingY="4px"
                borderRadius="4px"
                _hover={{ backgroundColor: "gray.800" }}
                key={item.id}
              >
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: item.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{item.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
