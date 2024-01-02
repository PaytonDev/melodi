import { Box, Flex, Text, Image } from "@chakra-ui/react";

type GradientPageProps = {
  color: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundImage?: boolean;
  children?: React.ReactNode;
};

export const GradientPage = ({
  color,
  image,
  subtitle,
  title,
  description,
  children,
  roundImage = false,
}: GradientPageProps) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "full" : "md"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="xs" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
      </Flex>
      <Box paddingY="40px">{children}</Box>
    </Box>
  );
};
