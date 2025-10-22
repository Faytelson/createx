import styles from "@ui/SelectComponent/SelectComponent.module.scss";
import * as Select from "@radix-ui/react-select";
import Icon from "@ui/Icon/Icon";
import clsx from "clsx";

export type SelectOption = {
  id: string | number;
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectComponentProps = {
  options: SelectOption[];
  value: string;
  name: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  disabled?: boolean;
  ariaLabel?: string;
  placeholder?: string;
  error?: string;
  onValueChange: (value: string) => void;
};

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  value,
  name,
  label,
  size = "md",
  theme = "light",
  disabled,
  ariaLabel,
  placeholder,
  error,
  onValueChange,
}) => {
  const triggerClasses = clsx(
    styles.select__trigger,
    styles[`select__trigger_size_${size}`],
    styles[`select__trigger_size_${size}`],
    styles[`select__trigger_theme_${theme}`],
    { [styles.select__trigger_error]: error },
  );

  return (
    <div className={styles.select}>
      <label
        htmlFor={name}
        className={styles.select__label}
      >
        {label}
      </label>

      <Select.Root
        value={value}
        name={name}
        disabled={disabled}
        onValueChange={onValueChange}
      >
        <Select.Trigger
          aria-label={ariaLabel}
          className={triggerClasses}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <Icon
              name="downChevron"
              size={16}
            ></Icon>
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          className={styles.select__content}
          position="popper"
        >
          <Select.Viewport className={styles.select__viewport}>
            {options.map((opt) => {
              return (
                <Select.Item
                  className={styles.select__item}
                  value={opt.value}
                  key={opt.id}
                  disabled={opt.disabled}
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              );
            })}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>

      {error && (
        <span
          className={styles.error}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default SelectComponent;
