import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const CreateAccount = ({ supabase, session, setCreateAccount }) => {
  const [email, setEmail] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [position, setPosition] = useState(null);
  const [success, setSuccess] = useState(false);
  const [newUserId, setNewUserId] = useState(null);

  const createUser = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            firstname: firstname,
            lastname: lastname,
            user_role: role,
            pos: position,
          },
        },
      });
      console.log("data", data);
      setSuccess(true);
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
      <form
        onSubmit={(e) => {
          createUser(), e.preventDefault();
        }}
      >
        <FormControl>
          <Heading fontSize="18px" textAlign="center" mb="5">
            Create User
          </Heading>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <Flex flexDirection="column">
              <FormLabel textAlign="center">Role</FormLabel>
              <Select
                id="Select_Role"
                backgroundColor="gray.200"
                borderRadius="2px"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="client">Client</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </Select>
            </Flex>

            <Flex flexDirection="column">
              <FormLabel textAlign="center">Position</FormLabel>
              <Input
                id="Input_Position"
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
                id="Input_Email"
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
                id="Input_Firstname"
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
                id="Input_Lastname"
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
                id="Input_Password"
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
