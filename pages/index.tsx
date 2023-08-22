import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
 return (
  <Layout>
   <Typography variant='h1' color='primary'>
    tittle
   </Typography>
  </Layout>
 );
};

export default HomePage;
