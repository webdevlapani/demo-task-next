import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#F5F5F5",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    width: "100%",
  },
}));

const Contacts: any = () => {
  return (
    <Layout>
      <Search>
        <SearchIconWrapper></SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Link href="/newcontact">+</Link>
      <p>Contact List</p>
      <Link href="/contactprofile">Shiva Mahadev</Link>
    </Layout>
  );
};

export default Contacts;
