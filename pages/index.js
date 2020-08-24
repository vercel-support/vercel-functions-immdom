import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic API Examples with Vercel Functions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Working examples with Vercel Functions
        </h1>

        <div className={styles.grid}>
          <a href="/api/js/basic" className={styles.card}>
            <h3>Javascript - Basic API Example &rarr;</h3>
            <p>Available at /api/js/basic</p>
          </a>

          <a href="/api/js/files" className={styles.card}>
            <h3>Javascript - demonstrate using file system &rarr;</h3>
            <p>You can read from files in the _files directory.</p>
          </a>

          <a href="/api/js/param?basicThing=Prada" className={styles.card}>
            <h3>Javascript - parameters example &rarr;</h3>
            <p>Pass parameters to an API endpoint. What fun!</p>
          </a>

          <a href="/api/python/basic" className={styles.card}>
            <h3>Python - Basic API Example &rarr;</h3>
            <p>Available at /api/python/basic</p>
          </a>

          <a href="/api/python/param?basicThing=Prada" className={styles.card}>
            <h3>Python - parameters example &rarr;</h3>
            <p>
              Shows how you can pass parameters to an API endpoint. What fun!
            </p>
          </a>

          <a href="/api/python/param?basicThing=Prada" className={styles.card}>
            <h3>Python - WSGI example using Flask &rarr;</h3>
            <p>
              {" "}
              This was somewhat more complicated. You have to create an
              /api/index.py but you can do all your routing here quite nicely.
              This example shows only 1 route, however, based on a cool example
              by Juan Olvera found
              <a href="https://jolvera.dev/posts/deploy-a-python-serverless-function-on-zeit-now">
                here
              </a>
            </p>
          </a>
        </div>
        <section className={utilStyles.headingMd}>
          <p>[More Information]</p>
          <p>... that you can shake a stick at</p>
        </section>

        <div className={styles.grid}>
          <a
            href="https://vercel.com/docs/serverless-functions/introduction"
            className={styles.card}
          >
            <h3>Vercel Official Docs - general &rarr;</h3>
            <p>
              Supports Python, Node.js, Ruby, and Golang. There are even more
              community Runtimes, too!
            </p>
          </a>

          <a
            href="https://vercel.com/docs/runtimes#official-runtimes/python"
            className={styles.card}
          >
            <h3>Vercel Official Docs - important Python details &rarr;</h3>
          </a>

          <a
            href="https://github.com/paulkarayan/vercel-functions-immdom/blob/master/README.md"
            className={styles.card}
          >
            <h3>Unofficial Readme from this redo &rarr;</h3>
            <p>More details, gotchas, and caveats.</p>
          </a>

          <a
            href="https://github.com/paulkarayan/immdom-examples"
            className={styles.card}
          >
            <h3>More Immdom Fun &rarr;</h3>
            <p>General catalogue and such. The fun starts here!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>
          Made with &lt;3 by the Dark Baron von Tessier-Ashpool and his Imminent
          Domain pals
        </h3>
      </footer>
    </div>
  );
}
