import styles from "@ui/Tabs/Tabs.module.scss";
import Icon from "@ui/Icon/Icon";
import { classNames } from "@utils/utils";

function Tabs({ categories, onChange, activeId, ariaLabel }) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={styles.tabs__list}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={classNames([styles.tabs__item, {
              [styles.tabs__item_active]: category.id === activeId
            }])}
          >
            <button
              type="button"
              className={styles.tabs__button}
              aria-current={category.id === activeId ? "true" : undefined}
              onClick={() => onChange(category.id)}
            >
              <div className={styles.tabs__icon_sm}>
                <Icon
                  name={category.image}
                  size={28}
                ></Icon>
              </div>
              <div className={styles.tabs__icon_lg}>
                <Icon
                  name={category.image}
                  size={48}
                ></Icon>
              </div>
              <span className={styles.tabs__name}>{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Tabs;
