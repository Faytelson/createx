import React, { useState } from "react";
import { publicPath } from "@/utils";
import styles from "@ui/Filter/Filter.module.scss";
import { type ImageProps } from "../Image";
import Tabs from "@ui/Tabs/Tabs";
import Card from "@/components/Card/Card";

export type FilterItem = {
  id: number;
  title: string;
  subtitle: string;
  category: { id: number; name?: string };
  img: ImageProps;
};

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type FilterProps = {
  items: FilterItem[];
  categories: Category[];
};

const Filter: React.FC<FilterProps> = ({ items, categories }) => {
  const [activeId, setActiveId] = useState(0);
  const filtered = activeId === 0 ? items : items.filter((item) => item.category.id === activeId);
  const resolveImg = publicPath("images/buildings/");

  return (
    <section className={styles.filter}>
      <Tabs
        categories={categories}
        activeId={activeId}
        onChange={(categoryId: number) => {
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
              img={{
                src: resolveImg(item.img.src),
                alt: item.img.title || "Project under construction",
              }}
              title={item.title}
              subtitle={item.subtitle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
