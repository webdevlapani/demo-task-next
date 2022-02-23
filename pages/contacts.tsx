import {
  Avatar,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import { useState } from "react";

import styles from "styles/Contact.module.css";
import { contactList } from "constant/Contact";
import ContactDialog from "components/ContactDialog";
import { NextPage } from "next";

const Contacts: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Layout>
      <Container className={styles.container}>
        <TextField
          className={styles.searchBox}
          placeholder="Search Contact"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/images/SearchIcon.svg"
                  width={20}
                  height={20}
                  alt="search"
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  onClick={handleClickOpen}
                  src="/images/PlusIcon.svg"
                  alt="new-contact"
                  width={16}
                  height={16}
                />
              </InputAdornment>
            ),
          }}
        />

        <ContactDialog open={open} onClose={handleClose} />

        <List>
          {contactList.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={0}
                secondaryAction={
                  <Link passHref href="/contact/${key}">
                    <Image
                      src="/images/Arrow.svg"
                      alt="arrow"
                      width={25}
                      height={15}
                    />
                  </Link>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value.id)}
                  dense
                >
                  <ListItemIcon sx={{ minWidth: "auto" }}>
                    <Checkbox
                      className={styles.checkbox}
                      edge="start"
                      checked={checked.indexOf(value.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemAvatar
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar>
                      <Image
                        src="/images/AvatarIcon.svg"
                        alt="logo"
                        layout="fill"
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      marginLeft: "10px",
                    }}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "secondary",
                      fontSize: 18,
                    }}
                    primary={"Esther Howard"}
                    secondaryTypographyProps={{
                      fontSize: 15,
                    }}
                    secondary={"esther.near"}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Layout>
  );
};

export default Contacts;
