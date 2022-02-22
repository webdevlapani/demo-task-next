import Link from "next/link";
import {
  Container,
  Grid,
  Card,
  Typography,
  AvatarGroup,
  Avatar,
  Button,
} from "@mui/material";
import Image from "next/image";
import Layout from "../components/Layout";
import { NextPage } from "next/types";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container sx={{ marginTop: "65px", padding: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card
              sx={{
                backgroundColor: "#EAEFFF",
                boxShadow: "none",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#414047",
                  lineHeight: "22px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "'Manrope', sans-serif",
                  justifyContent: "space-between",
                }}
              >
                Contacts
                <Link href="/contacts">
                  <Image
                    src="/images/Arrow.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </Link>
              </Typography>
              <AvatarGroup max={4} spacing={10} sx={{ marginTop: "15px" }}>
                <Avatar alt="Remy Sharp" src="images/Avatar.jpg" />
                <Avatar alt="Travis Howard" src="/images/Ellipse1.svg" />
                <Avatar alt="Cindy Baker" src="/images/Avatar.jpg" />
                <Avatar alt="Agnes Walker" src="/images/Ellipse1.svg" />
              </AvatarGroup>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                backgroundColor: "#885FFF",
                boxShadow: "none",
                borderRadius: "10px",
                padding: "10px",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  lineHeight: "22px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "'Manrope', sans-serif",
                  justifyContent: "space-between",
                }}
              >
                web3 Apps
                <Link href="/web3apps">
                  <Image
                    src="/images/ArrowWhite.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </Link>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#18D7A9",
                  bordeRadius: "10px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "16px",
                  textTransform: "inherit",
                  marginTop: "15px",
                }}
              >
                12 Connected
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <div>
        <Link href="/web3apps"> web3 Apps</Link>
        <Link href="/contacts"> web3 Apps</Link>
      </div> */}
    </Layout>
  );
};
export default Home;
