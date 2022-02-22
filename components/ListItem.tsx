import {
  ListItem as MUIListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";

interface Props {
  isSelected: boolean;
  onClick: () => void;
  avatar: string;
  primaryText: string;
  secondaryText: string;
}

const ListItem: FC<Props> = ({
  isSelected,
  onClick,
  avatar,
  primaryText,
  secondaryText,
}) => {
  return (
    <MUIListItem
      onClick={onClick}
      {...(isSelected && {
        secondaryAction: (
          <Image
            src="/images/CheckIcon.svg"
            alt="check-icon"
            height={14}
            width={14}
          />
        ),
      })}
    >
      <ListItemAvatar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            ...(isSelected && {
              border: "2px solid black",
              padding: "2px",
              backgroundColor: "white !important",
              width: "50px",
              height: "50px",

              "& > span": {
                margin: "3px !important",
              },
            }),
          }}
        >
          <Image src={avatar} alt="logo" layout="fill" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{
          marginLeft: "10px",
        }}
        primaryTypographyProps={{
          fontWeight: 600,
        }}
        primary={primaryText}
        secondaryTypographyProps={{
          fontSize: 14,
        }}
        secondary={secondaryText}
      />
    </MUIListItem>
  );
};

export default ListItem;
