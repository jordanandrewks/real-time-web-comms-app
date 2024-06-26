import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import './globals.css';
import AppShellParent from '../components/AppShell/AppShellParent';

export const metadata = {
  title: 'Web Comms Playground',
  description: 'Web communication area for testing protocols!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* todo - Change favicon later. */}
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      {/* Move the page into here - then Have {children} in <AppShell.Main> */}
      <body>
        <MantineProvider theme={theme}>
          <AppShellParent>{children}</AppShellParent>
        </MantineProvider>
      </body>
    </html>
  );
}
