import {
  AppBar,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import Dialog from "./Dialog";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  const Select = styled("div")`
    border: 1px solid #dfdfe0;
    background: #ffffff;
    border-radius: 30px;
    padding: 5px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Actions = styled("div")`
    .action-icon {
      margin-left: 10px;
      display: inline-block;
    }
  `;

  const [open, setOpen] = useState(false);

  const accounts = useTypedSelector((state) => state.accounts);

  const { getAccounts } = useActions();

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <Container sx={{ padding: 0 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}
      >
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {router.pathname === "/" ? (
            <>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </Link>
            </>
          ) : (
            <>
              <Button
                onClick={() => router.back()}
                variant="text"
                sx={{ p: 0, minWidth: "auto" }}
              >
                <Image
                  src="/images/BackArrowIcon.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </Button>
              <Link href="/">
                <Image
                  src="/images/HomeIcon.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </Link>
            </>
          )}
          <Select>
            <Image
              src="/images/AccountIcon.svg"
              width={26}
              height={26}
              alt="account icon"
            />
            <Typography
              variant="h6"
              noWrap
              onClick={() => setOpen(true)}
              component="div"
              ml={1}
              mr={2}
              sx={{
                color: "#33373B",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "16px",
              }}
            >
              {
                accounts.data?.filter(
                  ({ isCurrentAccount }: any) => isCurrentAccount
                )[0]?.name
              }
            </Typography>
            <Dialog open={open} setOpen={setOpen} />
            <Image
              src="/images/SelectIcon.svg"
              width={12}
              height={8}
              alt="select icon"
            />
          </Select>
          <Actions>
            <div className="action-icon">
              <Image
                src="/images/Notification.svg"
                width={26}
                height={26}
                alt="notification icon"
              />
            </div>
            <div className="action-icon">
              <Image
                src="/images/Settings.svg"
                width={26}
                height={26}
                alt="setting icon"
              />
            </div>
          </Actions>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
};

export default Layout;
