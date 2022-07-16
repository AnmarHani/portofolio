import Head from 'next/head'
import Link from 'next/link'

import * as classes from '../styles/classes'

export default function Home(props) {
  return (
    <div className='container'>
      <Head>
        <title>Anmar Hani</title>
        <meta name="description" content="Anmar Hani Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {/* <div>
            <hr className={classes.seperator} />
            <p className={classes.description}>
              {props.account.bio}
            </p>
          </div> */}
        </div>

        <div>
          <Link href="projects">
            <a className={classes.text} href="">
              &gt; Projects
            </a>
          </Link>
          <a href="https://dev.to/anmarhani" className={classes.text}>
            &gt; Articles
          </a>
          <a href="https://www.linkedin.com/in/anmar-hani-448b05224/" className={classes.text}>
            &gt; More About me
          </a>
        </div>
      </main>
    </div>
  )
}
