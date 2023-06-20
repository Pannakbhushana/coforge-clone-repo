import React from 'react';
import { SearchIcon,CloseIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure ,

  } from '@chakra-ui/react'


export default function SearchModel() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['full']
  
    return (
      <>
        {sizes.map((size) => (
          <SearchIcon
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
            boxSize={6}
          />
        ))}
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>

            <ModalHeader>
                {/* model title */}
                    
                <div style={{display:"flex",
                             marginTop:"2%",
                             alignItems:"center",
                             marginLeft:"15%"
                             }} >
                    <SearchIcon boxSize={6}/>

                    <div style={{width:"1%"}}></div>

                    <Input 
                    placeholder='what are you looking for ?' 
                    size='lg' 
                    w='70%'
                    variant='unstyled' />

                    <div style={{width:"5%"}}></div>

                    <CloseIcon boxSize={10} onClick={onClose} style={{cursor:"pointer"}} />
                </div>
              
                
            </ModalHeader>

            <ModalBody> </ModalBody>

            {/* <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter> */}

          </ModalContent>
        </Modal>
      </>
    )
  }