import styled from "@emotion/styled";
import {
  Checkbox,
  IconButton,
  InputAdornment,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState } from "react";

const Contacts: any = () => {
  // const [checked, setChecked] = useState([0]);

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <Layout>
      <TextField
        sx={{
          marginTop: "65px",
          padding: "1px 10px",
          backgroundColor: "#F5F5F5",
        }}
        placeholder="Search Contact"
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image
                src="/images/SearchIcon.svg"
                width={16}
                height={16}
                alt="search"
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Link passHref href="/newcontact">
                <Image
                  src="/images/PlusIcon.svg"
                  alt="new-contact"
                  width={13}
                  height={13}
                />
              </Link>
            </InputAdornment>
          ),
        }}
      />

      {/* <ListItem
        key={0}
        secondaryAction={
          <IconButton edge="end" aria-label="comments"></IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={handleToggle(0)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(0) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": "checkbox-list-label-0" }}
            />
          </ListItemIcon>
          <ListItemText
            id={"checkbox-list-label-0"}
            primary={`Line item ${0 + 1}`}
          />
        </ListItemButton>
      </ListItem> */}

      <Link href="/contactprofile">Shiva Mahadev</Link>
    </Layout>
  );
};

export default Contacts;
