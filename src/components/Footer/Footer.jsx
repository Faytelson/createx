import logo from "@images/logo_white.svg";
import Icon from "@ui/Icon/Icon";
import Input from "@ui/Input/Input";
import styles from "@components/Footer/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles["footer__info-block"]}>
          <a
            className={styles.footer__logo}
            href="/"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Main Logo Create X"
              className={styles["footer__logo - img"]}
            />
          </a>

          <ul className={styles.footer__socials}>
            <li className={styles.footer__social}>
              <a
                href="#"
                className={styles["footer__social-link"]}
              >
                <Icon
                  name="whatsapp"
                  size={24}
                  color="var(--color-gray-400)"
                />
              </a>
            </li>
            <li className={styles.footer__social}>
              <a
                href="#"
                className={styles["footer__social-link"]}
              >
                <Icon
                  name="facebook"
                  size={24}
                  color="var(--color-gray-400)"
                />
              </a>
            </li>
            <li className={styles.footer__social}>
              <a
                href="#"
                className={styles["footer__social-link"]}
              >
                <Icon
                  name="youtube"
                  size={24}
                  color="var(--color-gray-400)"
                />
              </a>
            </li>
            <li className={styles.footer__social}>
              <a
                href="#"
                className={styles["footer__social-link"]}
              >
                <Icon
                  name="twitter"
                  size={24}
                  color="var(--color-gray-400)"
                />
              </a>
            </li>
          </ul>

          <p className={styles["footer__info-text"]}>
            Createx Construction Bureau has been successfully operating in the USA construction
            market since 2000. We are proud to offer you quality construction and exemplary service.
            Our mission is to set the highest standards for construction sphere.
          </p>
        </div>

        <div className={styles["footer__form-block"]}>
          <h4 className={styles["footer__form-title"]}>Let’s stay in touch</h4>
          <form className={styles.footer__form}>
            <Input
              value="value"
              placeholder="placeholder"
              name="name"
              id="id-1"
            />
          </form>
          <p className={styles["footer__form-description"]}>
            *Subscribe to our newsletter to receive communications and early updates from Createx
            Construction Bureau.
          </p>
        </div>

        <div className={styles["footer__column-block"]}>
          <div className={styles["footer__info-column"]}>
            <h5 className={styles["footer__column-title"]}>HEAD OFFICE</h5>

            <div className={styles["footer__group-container"]}>
              <span className={styles["footer__contact-label"]}>Address:</span>
              <span className={styles["footer__contact-info"]}>
                <address>
                  <a
                    href="https://maps.google.com/?q=8502+Preston+Rd.+Inglewood,+New+York"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    8502 Preston Rd. Inglewood, New York
                  </a>
                </address>
              </span>
            </div>
            <div className={styles["footer__group-container"]}>
              <span className={styles["footer__contact-label"]}>Call:</span>
              <span className={styles["footer__contact-info"]}>
                <a href="tel:+14055550128">(405) 555-0128</a>
              </span>
            </div>
            <div className={styles["footer__group-container"]}>
              <span className={styles["footer__contact-label"]}>Email:</span>
              <span className={styles["footer__contact-info"]}>
                <a href="mailto:hello@createx.com">hello@createx.com</a>
              </span>
            </div>
          </div>

          <div className={styles["footer__info-column"]}>
            <h5 className={styles["footer__column-title"]}>WHO WE ARE</h5>
            <ul className={styles["footer__column-list"]}>
              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  Available Positions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["footer__info-column"]}>
            <h5 className={styles["footer__column-title"]}>OUR EXPERIENCE</h5>
            <ul className={styles["footer__column-list"]}>
              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.footer__link}
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__copyright}>
          © All rights reserved. Made with love by Createx Studio
        </div>
      </div>
    </footer>
  );
}

export default Footer;
