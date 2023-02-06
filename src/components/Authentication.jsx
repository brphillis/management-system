import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Authentication = ({ supabase }) => {
  return (
    <Box
      position="absolute"
      backgroundColor="white"
      color="gray.700"
      height="max-content"
      width="max-content"
      padding="2rem 5rem 2rem 5rem"
      marginTop="-100px"
    >
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image
          src="/images/logo.svg"
          height="80px"
          width="80px"
          marginBottom="30px"
          alt="1011010"
        />

        <Auth
          supabaseClient={supabase}
          localization={{
            variables: {
              sign_in: {
                email_label: "Email",
                password_label: "Password",
                email_input_placeholder: " ",
                password_input_placeholder: " ",
              },
              sign_up: {
                email_label: "Email",
                password_label: "Password",
                email_input_placeholder: " ",
                password_input_placeholder: " ",
              },
              forgotten_password: {
                email_label: "Email address",
                password_label: "Your Password",
                email_input_placeholder: " ",
                button_label: "Reset",
                link_text: "Forgot your password?",
              },
              update_password: {
                password_label: "New password",
                password_input_placeholder: " ",
                button_label: "Update password",
              },
              magic_link: {
                email_input_label: "Email address",
                email_input_placeholder: " ",
                button_label: "Send Magic Link",
                link_text: "Send Email",
              },
            },
          }}
          appearance={{
            style: {
              button: {
                display: "block",
                margin: "0 auto",
                background: "#4A5568",
                color: "white",
                border: "none",
                borderRadius: "2px",
                padding: "0.25rem",
                width: "125px",
                fontSize: "14px",
              },
              input: {
                background: "#E2E8F0",
                border: "1px solid #CBD5E0",
                borderRadius: "2px",
              },
              anchor: {
                fontSize: "14px",
              },
            },
          }}
        />
      </Flex>
    </Box>
  );
};

export default Authentication;
