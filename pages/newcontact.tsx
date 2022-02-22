import { Button } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import TextField from "../components/TextField";

const NewContact: NextPage = () => {
  return (
    <Layout>
      <div>New Contact</div>
      <TextField label="Full name" placeholder="Ex. John doe" />
      <TextField label="Email" placeholder="webdev@gmail.com" />
      <TextField label="Phone (optional)" placeholder="Ex. +123545454" />
      <TextField
        label="Near Account ID (optinal)"
        placeholder="Ex. John near"
      />
      <Button variant="contained">Save</Button>
    </Layout>
  );
};

export default NewContact;
