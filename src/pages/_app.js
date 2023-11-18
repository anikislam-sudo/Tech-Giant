import Footer from '@/Components/Shared/Footer/Footer';
import Navbar from '@/Components/Shared/Navbar/Navbar';
import store from '@/Redux/store';
import '@/styles/globals.css';
import { StyleProvider } from '@ant-design/cssinjs';

import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </StyleProvider>
    </SessionProvider>
  );
}