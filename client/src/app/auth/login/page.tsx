"use client";
import EmailForm from "@/app/components/form/EmailForm";
import NameFormRegister from "@/app/components/form/NameFormRegister";
import PasswordForm from "@/app/components/form/PasswordForm";
import Link from "next/link";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loginDetails, setLoginDetails] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const res = await fetch("localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginDetails),
    });
    const data = res.json();
    alert("done");
    console.log(data);
  };
  useEffect(() => {
    console.log(loginDetails);
  }, [loginDetails]);
  const formElemnets: ReactElement[] = [
    <EmailForm data={loginDetails.email} handleChange={handleChange} />,
    <PasswordForm data={loginDetails.password} handleChange={handleChange} />,
  ];
  return (
    <div className="w-full  px-8 pt-7 space-y-5">
      {formElemnets[activeTab]}
      {activeTab === 0 && (
        <div>
          <Link href="/auth/register" className="text-blue-600">
            Don't have an account?
          </Link>
        </div>
      )}
      <div className="w-full flex justify-between">
        <button
          disabled={activeTab === 0}
          onClick={() => setActiveTab(activeTab - 1)}
          className={"bg-white text-blue-600 px-5 py-[0.4rem] rounded " + `${activeTab === 0 && "opacity-0"}`}
        >
          Back
        </button>
        <button
          onClick={() => setActiveTab(activeTab + 1)}
          disabled={activeTab === formElemnets.length - 1}
          className={
            "bg-blue-600 text-white px-5 py-[0.4rem] rounded " +
            `${activeTab === formElemnets.length - 1 && "opacity-0"}`
          }
        >
          Next
        </button>
        {activeTab === formElemnets.length - 1 ? (
          <button
            onClick={handleSubmit}
            // disabled={activeTab === formElemnets.length - 1}
            className={"bg-blue-600 text-white px-5 py-[0.4rem] rounded "}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default LoginPage;
