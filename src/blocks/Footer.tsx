import { Box, Link } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box p={3}>
      <footer>
        <Link href="https://zakon.rada.gov.ua/laws/show/426-2002-%D0%BF#n23" color='blue.600' isExternal>
          Норма №1 харчування військовослужбовців Збройних Сил та інших військових формувань
        </Link>
      </footer>
    </Box>
  );
};

export default Footer;