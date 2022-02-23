import {
  Box,
  Button,
  Container,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/Layout";

import Image from "next/image";

import styles from "styles/Contact.module.css";

const ImportContacts: NextPage = () => {
  const Input = styled("input")({
    display: "none",
  });

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
        <Box className={styles.importBox}>
          <label htmlFor="contained-button-file">
            <Input id="contained-button-file" multiple type="file" />
            <Image
              src="/images/FileUploadIcon.svg"
              width={50}
              height={50}
              alt="download icon"
            />
          </label>
        </Box>
        <Box textAlign="center">
          <Button
            sx={{
              fontSize: "18px",
              textTransform: "inherit",
              letterSpacing: "-0.408px",
              boxShadow: "none",
              borderRadius: "10px",
              backgroundColor: "#33373B",
            }}
            startIcon={
              <Image
                src="/images/GoogleIcon.svg"
                width={20}
                height={20}
                alt="google icon1`"
              />
            }
            variant="contained"
          >
            Google contacts
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default ImportContacts;
