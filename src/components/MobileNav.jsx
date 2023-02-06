import React from "react";

import { useDisclosure, Button } from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleDrawerRef = React.useRef();
  return (
    <>
      <Button
        position="relative"
        size="sm"
        ref={toggleDrawerRef}
        colorScheme="blue"
        onClick={onOpen}
      >
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={toggleDrawerRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard Home</DrawerHeader>

          <DrawerBody>
            <p>Profile</p>
            <p>Stock Management</p>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="gray">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
