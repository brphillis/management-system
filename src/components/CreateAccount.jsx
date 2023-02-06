import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const CreateAccount = ({ supabase, setCreateAccount }) => {
  const [email, setEmail] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [position, setPosition] = useState(null);
  const [success, setSuccess] = useState(false);

  const createUser = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        email_confirm: true,
        password: password,
        user_metadata: {
          firstname: firstname,
          lastname: lastname,
          position: position,
          role: role,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      position="absolute"
      backgroundColor="white"
      color="gray.700"
      height="max-content"
      width="max-content"
      padding="2rem 5rem 2rem 5rem"
      marginTop="-100px"
      left="0"
      right="0"
      marginLeft="auto"
      marginRight="auto"
      top="20%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src="/images/logo.svg"
        height="80px"
        width="80px"
        marginBottom="30px"
        marginLeft="-10px"
        alt="1011010"
      />
      <form onSubmit={createUser}>
        <FormControl>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <Flex flexDirection="column">
              <FormLabel textAlign="center">Role</FormLabel>
              <Select
                backgroundColor="gray.200"
                borderRadius="2px"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="authenticated">Customer</option>
                <option value="">Staff</option>
                <option value="service_role">Admin</option>
              </Select>
            </Flex>

            <Flex flexDirection="column">
              <FormLabel textAlign="center">Position</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              ></Input>
            </Flex>

            <Flex flexDirection="column">
              <FormLabel textAlign="center">Email</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </Flex>

            <Flex flexDirection="column">
              <FormLabel textAlign="center">First Name</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              ></Input>
            </Flex>
            <Flex flexDirection="column">
              <FormLabel textAlign="center">Last Name</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              ></Input>
            </Flex>
            <Flex flexDirection="column">
              <FormLabel textAlign="center">Password</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
            </Flex>
            <Button
              type="submit"
              backgroundColor="gray.600"
              width="125px"
              borderRadius="2px"
              padding="0.1rem"
              marginTop="1rem"
              fontSize="12px"
              color="white"
              _hover={{ backgroundColor: "gray.700" }}
            >
              Create Account
            </Button>
            <Button
              type="button"
              backgroundColor="gray.600"
              width="125px"
              borderRadius="2px"
              padding="0.1rem"
              marginTop="1rem"
              fontSize="12px"
              color="white"
              _hover={{ backgroundColor: "gray.700" }}
              onClick={() => {
                setCreateAccount(false);
              }}
            >
              Back
            </Button>
            {success && <Text>Account Has Been Created</Text>}
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
};

export default CreateAccount;
