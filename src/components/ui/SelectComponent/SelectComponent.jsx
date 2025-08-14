import styles from "@ui/SelectComponent/SelectComponent.module.scss";
import { Select } from "radix-ui";
import Icon from "@ui/Icon/Icon";
import { classNames } from "@utils/utils";

function SelectComponent({
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
}) {
  const triggerClasses = classNames([
    styles.select__trigger,
    styles[`select__trigger_size_${size}`],
    styles[`select__trigger_size_${size}`],
    styles[`select__trigger_theme_${theme}`],
    { [styles.select__trigger_error]: error },
  ]);

  return (
    <div className={styles.select}>
      <label
        htmlFor={name}
        className={styles.select__label}
      >
        {label}
      </label>

      <Select.Root
        id={name}
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
}

export default SelectComponent;
