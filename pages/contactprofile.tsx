import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const ContactProfile: NextPage = () => {
  return (
    <Layout>
      <Link href="/newcontact">+</Link>
      <p>Contact Profile</p>
      <Link href="/editcontactprofile"> edit profile</Link>
    </Layout>
  );
};

export default ContactProfile;
