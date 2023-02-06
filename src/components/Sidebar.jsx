import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Image,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiUser,
  FiBriefcase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import NavItem from "../components/NavItem";

export default function Sidebar({ supabase }) {
  const [navSize, changeNavSize] = useState("small");
  const logOut = () => {
    supabase.auth.signOut();
  };
  return (
    <Flex
      background="white"
      pos="relative"
      h="95vh"
      borderRadius="6px"
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Image
          src="/images/logo.svg"
          height={10}
          width={10}
          left="0"
          right="0"
          ml="auto"
          mr="auto"
          marginTop="15px"
          marginBottom="10px"
          alt="1011010"
        />

        <IconButton
          background="none"
          mt={2}
          left="0"
          right="0"
          ml="auto"
          mr="auto"
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} icon={FiUser} title="Staff" />
        <NavItem navSize={navSize} icon={FiUser} title="Clients" />
        <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />

        <NavItem
          navSize={navSize}
          icon={FiLogOut}
          title="Log Out"
          clickFunction={() => {
            logOut();
          }}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} mb="10px" />
        <Avatar size="md" left="0" right="0" ml="auto" mr="auto" src="" />
        <Flex mt={4} align="center">
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h4" size="sm">
              George Washington
            </Heading>
            <Text color="gray" textAlign="center">
              Pharmacist
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
