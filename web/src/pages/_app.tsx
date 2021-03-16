import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/globals';
import { SidebarProvider } from '../context/SidebarContext';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <>
        <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"
        />
        </Head>
        <Provider store={store}>
          <SidebarProvider>

            <GlobalStyle/>
            <Component {...pageProps} />
          </SidebarProvider>
        </Provider>
      </>
      );
}

export default MyApp;
