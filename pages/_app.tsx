import '../styles/app.scss'
import Layout from "../loyout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}: any) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )

}