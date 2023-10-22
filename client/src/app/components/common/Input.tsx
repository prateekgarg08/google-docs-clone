import React from "react";

type Props = {
  type: string;
  label: string;
  id: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ type, label, id, value, onChange }: Props) => {
  return (
    <label
      htmlFor={id}
      className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <input
        type={type}
        id={id}
        name={id}
        className="peer w-full text-lg text-[#202124] px-2 py-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={label}
        value={value}
        onChange={onChange}
      />

      <span className="pointer-events-none  absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#202124] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600">
        {label}
      </span>
    </label>
  );
};

export default Input;
