import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  InputBase,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/Layout";

import styles from "styles/Contact.module.css";
import Image from "next/image";

const NewContact: NextPage = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: 20,
    },
    position: "relative",
    border: "1px solid #BEBEC2",
    fontSize: 16,
    borderRadius: 8,
    padding: "5px 10px",
    background: "#fcfcfc",
    "&:focus": {
      borderColor: "red",
    },
  }));

  return (
    <Layout>
      <Container sx={{ p: 0 }} className={styles.container}>
        <Divider />
        <Box className={styles.heading}>
          <Typography color="#414047" className={styles.mainHeading}>
            New Contact
          </Typography>
        </Box>
        <Divider />
        <Box className={styles.formBox}>
          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
            <InputLabel shrink htmlFor="fullname" className={styles.inputLabel}>
              Full Name
            </InputLabel>
            <BootstrapInput placeholder="Ex. John doe" id="fullname" />
          </FormControl>
          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
            <InputLabel shrink htmlFor="email" className={styles.inputLabel}>
              Email
            </InputLabel>
            <BootstrapInput
              typeof="email"
              placeholder="Ex. johndoe@gmail.com"
              id="email"
            />
          </FormControl>
          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
            <InputLabel shrink htmlFor="phone" className={styles.inputLabel}>
              Phone (optional)
            </InputLabel>
            <BootstrapInput
              typeof="number"
              placeholder="Ex +13673888893"
              id="phone"
            />
          </FormControl>
          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
            <InputLabel shrink htmlFor="account" className={styles.inputLabel}>
              Near Account ID (optional)
            </InputLabel>
            <BootstrapInput
              typeof="number"
              placeholder="Ex. johndoe.near"
              id="account"
            />
          </FormControl>
          <Box textAlign="center">
            <Button
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "10px",
                boxShadow: "none",
                maxWidth: "150px",
              }}
              endIcon={
                <Image
                  src="/images/ArrowWhite.svg"
                  width={18}
                  height={18}
                  alt="arrow icon"
                />
              }
            >
              Save
            </Button>
          </Box>
        </Box>

        {/* <TextField label="Full name" placeholder="Ex. John doe" /> */}
        {/* <TextField label="Email" placeholder="webdev@gmail.com" />
        <TextField label="Phone (optional)" placeholder="Ex. +123545454" />
        <TextField
          label="Near Account ID (optinal)"
          placeholder="Ex. John near"
        /> */}
      </Container>
    </Layout>
  );
};

export default NewContact;
