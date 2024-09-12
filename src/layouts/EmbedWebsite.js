// src/layouts/EmbedWebsite.js
import React from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

const EmbedWebsite = () => {
  return (
    <SoftBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={3}
    >
      <SoftTypography variant="h4" mb={3}>
        Find Our Teammate
      </SoftTypography>
      <SoftBox
        component="iframe"
        src="https://innovationmatebs-thiyagu.netlify.app/"
        width="100%"
        height="90vh"
        border="none"
        style={{ maxWidth: "1200px" }}
      />
    </SoftBox>
  );
};

export default EmbedWebsite;
