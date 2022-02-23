import { Box, Container, Divider, Typography } from "@mui/material";
import Layout from "components/Layout";
import { FC } from "react";

import styles from "styles/Contact.module.css";

const importcontact: FC = () => {
  return (
    <Layout>
      <Container sx={{ p: 0 }} className={styles.container}>
        <Divider />
        <Box className={styles.heading}>
          <Typography color="#414047" className={styles.mainHeading}>
            Import Contacts
          </Typography>
        </Box>
        <Divider />
      </Container>
    </Layout>
  );
};

export default importcontact;
