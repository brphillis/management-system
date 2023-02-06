import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";

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

export default function UpdateUser({ supabase }) {
  const user = useUser();

  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [role, setRole] = useState(null);
  const [success, setSuccess] = useState(false);

  const setDetails = () => {
    setEmail(user.email);
    setFirstname(user.user_metadata.firstname);
    setLastname(user.user_metadata.lastname);
    setUserId(user.id);
  };

  useEffect(() => {
    setDetails();
  }, []);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const updateUser = async () => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { firstname: firstname, lastname: lastname, role: role },
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
      <form onSubmit={updateUser}>
        <FormControl>
          <Flex flexDirection="column" alignItems="center" gap="8px">
            <Flex flexDirection="column" alignItems="center">
              <FormLabel textAlign="center">Role</FormLabel>
              <Select
                backgroundColor="gray.200"
                borderRadius="2px"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option
                  selected={
                    (user.user_metadata.role = "authenticated"
                      ? "selected"
                      : null)
                  }
                  value="authenticated"
                >
                  Customer
                </option>
                <option
                  selected={
                    (user.user_metadata.role = "staff" ? "selected" : null)
                  }
                  value=""
                >
                  Staff
                </option>
                <option
                  selected={
                    (user.user_metadata.role = "service_role"
                      ? "selected"
                      : null)
                  }
                  value="service_role"
                >
                  Admin
                </option>
              </Select>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <FormLabel textAlign="center">Email</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email || ""}
              ></Input>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <FormLabel textAlign="center">First Name</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                value={firstname || ""}
              ></Input>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <FormLabel textAlign="center">Last Name</FormLabel>
              <Input
                backgroundColor="gray.200"
                borderRadius="2px"
                border="1px"
                borderColor="gray.300"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                value={lastname || ""}
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
              Update User
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
            >
              Back
            </Button>
            {success && <p>Account Has Been Created</p>}
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
}
