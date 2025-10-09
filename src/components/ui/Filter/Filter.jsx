import { useState } from "react";
import { publicPath } from "@utils/utils";
import styles from "@ui/Filter/Filter.module.scss";
import Tabs from "@ui/Tabs/Tabs";
import Card from "@components/Card/Card";

function Filter({ items, categories }) {
  const [activeId, setActiveId] = useState(0);
  const filtered = activeId === 0 ? items : items.filter((item) => item.category.id === activeId);
  const resolveImg = publicPath('images/buildings/');

  return (
    <section className={styles.filter}>
      <Tabs
        categories={categories}
        activeId={activeId}
        onChange={(categoryId) => {
          setActiveId(categoryId);
        }}
        ariaLabel="Categories"
      />

      <ul className={styles.filter__list}>
        {filtered.map((item) => (
          <li
            className={styles["filter__list-item"]}
            key={item.id}
          >
            <Card
              img={{ src: resolveImg(item.img.src), alt: item.img.title }}
              title={item.title}
              subtitle={item.subtitle}
            ></Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filter;
