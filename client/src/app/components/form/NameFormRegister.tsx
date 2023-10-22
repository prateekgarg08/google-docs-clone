import React from "react";
import Input from "../common/Input";

type Props = {};

const NameFormRegister = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Create a Docs Account</h1>
        <h3>Enter your name</h3>
      </div>
      <form className="w-full flex flex-col gap-7">
        {/* <Input id="first_name" label="First Name" type="text" />
        <Input id="last_name" label="Surname (optional)" type="text" /> */}
      </form>
    </div>
  );
};

export default NameFormRegister;
