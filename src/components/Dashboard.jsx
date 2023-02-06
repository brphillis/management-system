import React from "react";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import MobileNav from "./MobileNav.jsx";
import Sidebar from "../components/Sidebar";
import AdminPanel from "./AdminPanel.jsx";
import CreateAccount from "./CreateAccount.jsx";
import UpdateUser from "./UpdateUser.jsx";

const Dashboard = ({ supabase, session }) => {
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <Box position="absolute" height="100vh" width="100vw" padding="0.25rem">
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="start"
        gap="1rem"
      >
        <Sidebar supabase={supabase} />
        {/* <div className="bg-white p-1 rounded-md">
          <MobileNav />
        </div> */}

        <AdminPanel setCreateAccount={setCreateAccount} />

        {createAccount && (
          <CreateAccount
            supabase={supabase}
            session={session}
            setCreateAccount={setCreateAccount}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Dashboard;
