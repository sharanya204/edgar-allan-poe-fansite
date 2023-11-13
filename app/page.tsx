import Image from 'next/image'
import styles from './page.module.css'
import poe from './images/headshot.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Quoth the raven, &quot;Nevermore&quot;</code>
        </p>

      </div>

      <div>
        <div>
            <a
              href="https://en.wikipedia.org/wiki/Edgar_Allan_Poe"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <Image
                src={poe}
                alt="Edgar Allan Poe"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <div>
          <h2>
            Edgar Allan Poe, GOAT
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            POE-tastic Recipes
          </h2>
          <p>Ghastlye recipes straight from by gouathe cuisine</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Fanmail
          </h2>
          <p>Written by Poe, himself, pinky promise</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Riddles
          </h2>
          <p>...?</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            How to name your baby properly
          </h2>
          <p>
            We know what we&quot;re on about.
          </p>
        </a>
      </div>
    </main>
  )
}
