import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'

const HembergetModel = () => {
    const {state}=useContext(ThemeContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top')


    return (
        <>
          <HamburgerIcon boxSize={8} onClick={onOpen} color={state ? "white" :"yellow"} />

          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent style={{marginTop:"80px"}} >
              {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
              <DrawerBody onClick={onClose} >
                <br />
                <Link to='/about'><p>About Us</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/industries'><p>Industries</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/resources'><p>Resources</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/investors'><p>Investors</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/newsroom'><p>Newsroom</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/careers'><p>Careers</p></Link>
                <br />
                <hr />
                <br />
                <Link to='/contact'><p>Contact Us</p></Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )
}

export default HembergetModel
