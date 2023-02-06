import React from "react";
import Lottie from "lottie-react";
import animation404 from "../../public/images/PageNotFoundAnimation.json";

const PageNotFoundAnimation = () => {
  return (
    <Lottie
      animationData={animation404}
      loop={true}
      width="200px"
      margin="auto"
      display="block"
      zIndex="10"
      position="relative"
    />
  );
};

export default PageNotFoundAnimation;
