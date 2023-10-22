import React from "react";
import Input from "../common/Input";

type Props = {
  data: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const PasswordForm = ({ data, handleChange }: Props) => {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Create a strong password</h1>
        <h3>Create a strong password to keep your docs secured</h3>
      </div>
      <form className="w-full flex flex-col gap-7">
        <Input id="password" label="Password" type="password" value={data} onChange={handleChange} />
      </form>
    </div>
  );
};

export default PasswordForm;
