import React from "react";
import Input from "../common/Input";

type Props = {
  data: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const EmailForm = ({ data, handleChange }: Props) => {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Use existing email</h1>
        <h3>Enter your email address to continue</h3>
      </div>
      <form className="w-full flex flex-col gap-7">
        <Input id="email" label="E-mail" type="email" onChange={handleChange} value={data} />
      </form>
    </div>
  );
};

export default EmailForm;
