// pages/_app.js

import '../styles/globals.css'; // Ensure this import is present

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
