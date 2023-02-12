import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import profilePic from 'assets/images/flick/contact/karin-stenwall.jpeg';

const Contact = () => {
  return (
    <Layout>
      <main className={styles.flick}>
        <section className={styles.contact}>
          <figure className={styles['profile-pic']}>
            <Image
              src={profilePic}
              alt="Karin in black and white."
              placeholder="blur"
              fill
            />
          </figure>
          <div className={styles.info}>
            <h2>get in touch?</h2>
            <p>I am based in Stockholm, fluent in Swedish and English.</p>
            <p>You want to talk? Send an e-mail or say hello on LinkedIn:</p>
            <div className={styles.links}>
              {/* <motion.a
                href="mailto:hello@karinstenwall.se"
                aria-label="Mailadress"
                whileHover={{ scale: 1.3 }}
                whileFocus={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </motion.a> */}
              <motion.a
                href="mailto:hello@karinstenwall.se"
                aria-label="Mailadress"
                whileHover={{
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 0.4
                  }
                }}
                whileFocus={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/karin-stenwall/"
                aria-label="LinkedIn profile"
                target="_blank"
                whileHover={{
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 0.4
                  }
                }}
                whileFocus={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </motion.a>
            </div>
            <p>
              PS. I am also a{' '}
              <Link href="/dev" className={styles.link}>
                full-stack developer
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
