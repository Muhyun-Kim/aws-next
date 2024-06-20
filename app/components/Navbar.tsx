'use client';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component="a" href="/sign-in">
          Sign-In
        </Button>
        <Button color="inherit" component="a" href="/sign-up">
          Sign-Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
