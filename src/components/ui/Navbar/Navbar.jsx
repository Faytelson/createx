import { useState } from "react";
import logo from "@images/logo.svg";
import ContactLink from "@ui/ContactLink/ContactLink";
import styles from "@ui/Navbar/Navbar.module.scss";
import { classNames } from "@utils/utils";

function Navbar({ menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const burgerClasses = classNames([
    styles.navbar__burger,
    { [styles.navbar__burger_active]: menuOpen },
  ]);

  const burgerMenuClasses = classNames([
    styles["navbar__burger-menu"],
    { [styles["navbar__burger-menu_active"]]: menuOpen },
  ]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <a
          className={styles.navbar__logo}
          href="/"
          aria-label="Go to homepage"
        >
          <img
            className={styles["navbar__logo-img"]}
            src={logo}
            alt="Main Logo Create X"
          />
        </a>

        <button
          className={burgerClasses}
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={styles["navbar__burger-line"]}></span>
        </button>

        <div
          className={burgerMenuClasses}
          id="main-navigation"
          aria-label="main-navigation"
        >
          <ul className={styles["navbar__menu-items"]}>
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={styles["navbar__menu-item"]}
                >
                  <a
                    className={styles["navbar__menu-link"]}
                    href={item.url}
                    onClick={closeMenu}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <address>
            <div className={styles.navbar__mobile}>
              <ContactLink
                href={"tel:+14055550128"}
                ariaLabel="Call Create X"
                icon="iphone"
                label="Call us"
                text="(405) 555-0128"
                theme="dark"
              ></ContactLink>

              <ContactLink
                href={"mailto:hello@createx.com"}
                ariaLabel="Email Create X"
                icon="iphone"
                label="Talk to us"
                text="hello@createx.com"
                theme="dark"
              ></ContactLink>
            </div>

            <div className={styles.navbar__desktop}>
              <ContactLink
                href={"tel:+14055550128"}
                ariaLabel="Call Create X"
                icon="iphone"
                label="Call us"
                text="(405) 555-0128"
              ></ContactLink>

              <ContactLink
                href={"mailto:hello@createx.com"}
                ariaLabel="Email Create X"
                icon="iphone"
                label="Talk to us"
                text="hello@createx.com"
              ></ContactLink>
            </div>
          </address>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
