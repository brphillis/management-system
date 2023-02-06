import React from "react";
import { useState, useEffect } from "react";
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

const staffList = ({ supabase }) => {
  const [staffList, setStaffList] = useState(null);

  const fetchStaffList = async () => {
    try {
      const { data, error } = await supabase.from("profiles").select();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStaffList();
  }, []);

  return (
    <Box
      backgroundColor="white"
      maxWidth="max-content"
      maxHeight="max-content"
      borderRadius="6px"
      boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"
      padding="1.25rem"
      textAlign="center"
    ></Box>
  );
};

export default staffList;
