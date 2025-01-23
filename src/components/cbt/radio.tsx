import React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex w-fit cursor-pointer items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
      />
      <label
        htmlFor={name}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};
