import { Box, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

const IssuancePage = () => {
  const location = useLocation();
  const dailyValue = new URLSearchParams(location.search).get('dailyValue');
  const guardValue = new URLSearchParams(location.search).get('guardValue');

  return (
    <Box p={4}>
      <Button as={ReactRouterLink} to="/" colorScheme="blue">На головну</Button>
    </Box>
  );
};

export default IssuancePage;