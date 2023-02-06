import React from "react";
import { FiUserPlus, FiUserX, FiUserCheck } from "react-icons/fi";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Icon,
  Button,
} from "@chakra-ui/react";

const AdminPanel = ({ setCreateAccount, setUpdateUser }) => {
  return (
    <Box
      backgroundColor="white"
      maxWidth="max-content"
      maxHeight="max-content"
      borderRadius="6px"
      boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"
      padding="1.25rem"
      textAlign="center"
    >
      <Heading size="sm" color="gray.700" fontWeight="700" marginTop="-10px">
        Admin Panel
      </Heading>

      <Flex
        flexDirection="row"
        flexWrap
        justifyContent="start"
        alignItems="center"
        gap="0.75rem"
        marginTop="0.75rem"
      >
        <Card width="140px" height="150px" border="1px solid #cbd5e1">
          <CardBody>
            <Flex flexDirection="column" alignItems="center">
              <Center
                backgroundColor="gray.400"
                height="4.1rem"
                width="4.1rem"
                borderRadius="100%"
                marginBottom="0.75rem"
                marginTop="-0.3rem"
                border="2px"
                borderColor="gray.200"
              >
                <Icon
                  color="white"
                  marginRight="-5px"
                  width="1.75rem"
                  height="1.75rem"
                  as={FiUserPlus}
                />
              </Center>

              <Button
                variant="solid"
                color="#4b4f56"
                fontWeight="400"
                fontSize="0.9rem"
                backgroundColor="#e5e5e5"
                _hover={{ bg: "#cbd5e1" }}
                border="1px solid #f1f5f9"
                onClick={() => {
                  setCreateAccount(true);
                }}
              >
                Add User
              </Button>
            </Flex>
          </CardBody>
        </Card>

        <Card width="140px" height="150px" border="1px solid #cbd5e1">
          <CardBody>
            <Flex flexDirection="column" alignItems="center">
              <Center
                backgroundColor="gray.400"
                height="4.1rem"
                width="4.1rem"
                borderRadius="100%"
                marginBottom="0.75rem"
                marginTop="-0.3rem"
                border="2px"
                borderColor="gray.200"
              >
                <Icon
                  color="white"
                  marginRight="-5px"
                  width="1.75rem"
                  height="1.75rem"
                  as={FiUserCheck}
                />
              </Center>
              <Button
                variant="solid"
                color="#4b4f56"
                fontWeight="400"
                fontSize="0.9rem"
                backgroundColor="#e5e5e5"
                _hover={{ bg: "#cbd5e1" }}
                border="1px solid #f1f5f9"
                onClick={() => {
                  setUpdateUser(true);
                }}
              >
                Update User
              </Button>
            </Flex>
          </CardBody>
        </Card>

        <Card width="140px" height="150px" border="1px solid #cbd5e1">
          <CardBody>
            <Flex flexDirection="column" alignItems="center">
              <Center
                backgroundColor="gray.400"
                height="4.1rem"
                width="4.1rem"
                borderRadius="100%"
                marginBottom="0.75rem"
                marginTop="-0.3rem"
                border="2px"
                borderColor="gray.200"
              >
                <Icon
                  color="white"
                  marginRight="-5px"
                  width="1.75rem"
                  height="1.75rem"
                  as={FiUserX}
                />
              </Center>
              <Button
                variant="solid"
                color="#4b4f56"
                fontWeight="400"
                fontSize="0.9rem"
                backgroundColor="#e5e5e5"
                _hover={{ bg: "#cbd5e1" }}
                border="1px"
                borderColor="gray.200"
              >
                Delete User
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default AdminPanel;
