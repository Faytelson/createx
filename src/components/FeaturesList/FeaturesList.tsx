import Text from "@ui/Text";
import Icon from "@ui/Icon";
import clsx from "clsx";
import styles from "./FeaturesList.module.scss";

export type FeatureProps = {
  image: string;
  title: string;
  description: string;
};

export type FeatureListProps = {
  features: FeatureProps[];
  className?: string;
};

const FeaturesList = ({ features, className }: FeatureListProps) => {
  return (
    <ul className={clsx(className, styles["feature-list"])}>
      {features.map((f) => {
        return (
          <li className={styles["feature-list__item"]}>
            <Icon
              name={f.image}
              size={48}
              color="var(--color-primary)"
              className={styles["feature-list__item-icon"]}
            ></Icon>
            <Text
              tag="h3"
              view="p-20"
              weight="bold"
              className={styles["feature-list__item-title"]}
            >
              {f.title}
            </Text>
            <Text
              tag="p"
              view="p-16"
              className={styles["feature-list__item-description"]}
            >
              {f.description}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export default FeaturesList;
