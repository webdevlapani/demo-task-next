import { Dialog, Divider, styled, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import styles from "styles/Contact.module.css";

interface ContactDialog {
  open: boolean;
  onClose: (value: boolean) => void;
}

const ContactDialog: FC<ContactDialog> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose(true);
  };

  const OptionDiv = styled("div")`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      className={styles.contactDialog}
      open={open}
      PaperProps={{ style: { borderRadius: 10 } }}
    >
      <Link href="/newcontact">
        <OptionDiv>
          <Image
            src="/images/PlusIcon.svg"
            width={20}
            height={20}
            alt="plus icon"
          />{" "}
          <Typography
            color="#587BE0"
            sx={{
              ml: 2,
              letterSpacing: "-0.154px",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            New Contact
          </Typography>
        </OptionDiv>
      </Link>
      <Divider />
      <Link href="/importcontact">
        <OptionDiv>
          <Image
            src="/images/DownloadIconColor.svg"
            width={25}
            height={25}
            alt="download icon"
          />{" "}
          <Typography
            color="#587BE0"
            sx={{
              ml: 2,
              letterSpacing: "-0.154px",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Import Contacts
          </Typography>
        </OptionDiv>
      </Link>
    </Dialog>
  );
};

export default ContactDialog;
