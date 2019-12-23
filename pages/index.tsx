import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </Layout>
  );
}
