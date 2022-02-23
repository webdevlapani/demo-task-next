import { TextField } from "@mui/material";
import type { NextPage } from "next";
import Layout from "components/Layout";

const Notifications: NextPage = () => {
  return (
    <Layout>
      <div>New Contact</div>
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="standard"
      />
    </Layout>
  );
};

export default Notifications;
