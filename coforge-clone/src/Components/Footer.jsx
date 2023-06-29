import { ReactNode } from 'react';
import {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} fontSize={'lg'} mb={2} >
      {children}
    </Text>
  );
};

export default function Footer() {
    const {state}=useContext(ThemeContext);
  return (
    <Box
      bg={useColorModeValue(state ? '#eee' :'#222')}
      color={useColorModeValue(state ? 'gray.700':'yellow')} textAlign={'left'}>
      <Container as={Stack} maxW={'6xl'} py={10} textAlign={'left'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={20}>
         
          <Stack align={'flex-start'}>
            <ListHeader>Useful Links</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Alliances & Partners</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Investors</Link>
            <Link href={'#'}>Resource Library</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Media Contacts </Link>
            <Link href={'#'}>Worldwide Locations</Link>
            <Link href={'#'}>Safe Harbor</Link>
            <Link href={'#'}>Privacy Statement</Link>
            <Link href={'#'}>Accessibility</Link>
            <Link href={'#'}>Terms and Conditions</Link>
            <Link href={'#'}>UK Modern Slavery Act</Link>
            <Link href={'#'}>Carbon Reduction Mandate</Link>
          </Stack>


          <Stack align={'flex-start'} textAlign={'left'} >
            <ListHeader>Industries</ListHeader>
             <Link href={'#'}>Insurance</Link>
             <Link href={'#'}>Banking & Financial Services</Link>
             <Link href={'#'}>Travel, Transportation & Hospitality</Link>
             <Link href={'#'}>Healthcare and Life Sciences</Link>
             <Link href={'#'}>Retail & CPG</Link>
             <Link href={'#'}>Public Sector</Link>   
          </Stack>




          <Stack align={'flex-start'} textAlign={'left'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Digital Services</Link>
            <Link href={'#'}>Data and Analytics</Link>
            <Link href={'#'}>Digital Process Automation</Link>
            <Link href={'#'}>Salesforce Ecosystem</Link>
            <Link href={'#'}>Cloud and Infrastructure Management Services</Link>
            <Link href={'#'}>CyberSecurity</Link>
            <Link href={'#'}>Business Process Solutions</Link>
            <Link href={'#'}>Quality Engineering Services</Link>
            <Link href={'#'}>SAP Services</Link>
            <Link href={'#'}>Metaverse</Link>
            <Link href={'#'}>Cognitive AI</Link>   
          </Stack>

          <Stack align={'flex-start'} textAlign={'left'}>
            <ListHeader>Stay Tuned</ListHeader>
            <Link href={'#'}>Linkedin</Link>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Youtube</Link>
            <Link href={'#'}>Instagram</Link>
           <br />
            <ListHeader>Our Companies</ListHeader> 
            <Link href={'#'}>AdvantageGo</Link>
          </Stack>
        </SimpleGrid>

          <br />
        <ListHeader textAlign='left'>Mortgage Licensing - NMLS ID</ListHeader> 
        <hr />
        <p>Coforge BPS America Inc. (NMLS ID 1916526)  Coforge BPS Philippines, Inc. (NMLS ID 1617487)  Coforge Business Process Solutions Private Limited</p>
        <hr />
        <p>© rahul mishra, 2023</p>
      </Container>
     
    </Box>
  );
}