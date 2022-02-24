import {
  DialogTitle,
  List,
  ListItem as MUIListItem,
  Dialog as MUIDialog,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { FC, useState } from "react";
import Image from "next/image";

import ListItem from "./AccountsListItem";
import { useTypedSelector } from "hooks/useTypedSelector";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog: FC<Props> = ({ open, setOpen }) => {
  const accounts = useTypedSelector((state) => state.accounts);
  const [selectedItem, setSelectedItem] = useState(
    accounts.data.findIndex((account) => account.isCurrentAccount)
  );

  return (
    <MUIDialog
      sx={{
        "& .MuiDialog-container": {
          height: "67%",
        },
      }}
      onClose={() => setOpen(false)}
      fullWidth={true}
      open={open}
    >
      <DialogTitle style={{ color: "#A0A0A2" }}>My Accounts</DialogTitle>
      <List>
        {accounts.data?.map(({ name, id, amount, avatar }) => (
          <ListItem
            key={id}
            isSelected={selectedItem === id}
            onClick={() => setSelectedItem(id)}
            avatar={avatar}
            primaryText={name}
            secondaryText={`${amount} NEAR`}
          />
        ))}
      </List>
      <Divider />
      <List>
        <MUIListItem>
          <ListItemButton>
            <ListItemIcon>
              <Image
                src="/images/PlusCircleIcon.svg"
                alt="create-account"
                width={22}
                height={22}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontWeight: 600,
                color: "#414047",
                fontSize: 14,
              }}
              primary="Create Account"
            />
          </ListItemButton>
        </MUIListItem>
        <MUIListItem>
          <ListItemButton>
            <ListItemIcon>
              <Image
                src="/images/DownloadIcon.svg"
                alt="import-account"
                width={22}
                height={22}
              />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: 14,
                color: "#414047",
              }}
              primary="Create Account"
            />
          </ListItemButton>
        </MUIListItem>
      </List>
    </MUIDialog>
  );
};

export default Dialog;
