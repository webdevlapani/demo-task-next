import Link from 'next/link';
import {
  Container,
  Grid,
  Typography,
  AvatarGroup,
  Avatar,
  Button,
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import Layout from 'components/LayOut';
import { NextPage } from 'next/types';
import Image from 'next/image';

import styles from 'styles/Home.module.css';
import Card from 'components/Card';
import { useState } from 'react';
import TabPane from 'components/TabPane';

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Container className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card className={styles.contactCard}>
              <Typography className={styles.contactCardHeading}>
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
              <AvatarGroup max={4} spacing={10} sx={{ marginTop: '15px' }}>
                <Avatar alt="Remy Sharp" src="images/Avatar.jpg" />
                <Avatar alt="Travis Howard" src="/images/Ellipse1.svg" />
                <Avatar alt="Cindy Baker" src="/images/Avatar.jpg" />
                <Avatar alt="Agnes Walker" src="/images/Ellipse1.svg" />
              </AvatarGroup>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={styles.webCard}>
              <Typography className={styles.webCardHeading}>
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
              <Button className={styles.webCardButton} variant="contained">
                12 Connected
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={styles.nftCard}>
              <Typography className={styles.nftHeading}>
                Start <br /> Creating your
                <br /> NFT Today
              </Typography>
              <Button className={styles.nftCardButton} variant="contained">
                Create NFT
                <Link href="/web3apps">
                  <Image
                    src="/images/ArrowWhite.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                  />
                </Link>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <TabPane />
    </Layout>
  );
};
export default Home;
