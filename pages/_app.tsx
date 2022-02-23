import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
