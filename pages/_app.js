import Head from 'next/head'

import Social from './ui/Social'

import '../styles/globals.css'
import * as classes from '../styles/classes'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous" 
    />
    </Head>
    <div className={classes.flexRowContainer}>
      <p className={classes.title}>
        Anmar Hani
      </p>
      <div >
        <Social />
      </div>
    </div>
    <Component {...pageProps} />
  </>)
}

export default MyApp
