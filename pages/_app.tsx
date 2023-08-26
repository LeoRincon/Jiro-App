import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { lightTheme, darkTheme } from '../themes';
import { UiProvider } from '@/context/ui';
export default function App({ Component, pageProps }: AppProps) {
 return (
  <UiProvider>
   <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Component {...pageProps} />
   </ThemeProvider>
  </UiProvider>
 );
}
