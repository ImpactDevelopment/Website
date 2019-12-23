import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Staff from '../src/Staff';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <MuiLink href="/">Go to the main page</MuiLink>
        <Staff />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
