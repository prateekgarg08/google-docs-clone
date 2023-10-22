"use client";
import EmailForm from "@/app/components/form/EmailForm";
import NameFormRegister from "@/app/components/form/NameFormRegister";
import PasswordForm from "@/app/components/form/PasswordForm";
import React, { ReactElement, useState } from "react";
import Link from "next/link";

type Props = {};

const RegisterPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const formElemnets: ReactElement[] = [<NameFormRegister />, <EmailForm />, <PasswordForm />];
  return (
    <div className="w-full  px-8 pt-7 space-y-5">
      {/* <NameFormRegister /> */}
      {/* <EmailForm /> */}
      {/* <PasswordForm /> */}
      {formElemnets[activeTab]}
      {activeTab === 0 && (
        <div>
          <Link href="/auth/login" className="text-blue-600">
            Already have an account?
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
            onClick={() => alert("todo submit")}
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

export default RegisterPage;
