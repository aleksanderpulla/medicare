import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";

import * as Sentry from "@sentry/nextjs";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Link href="/">
            <Image
              src="/assets/icons/logo-medicare.png"
              height={150}
              width={150}
              alt="patient"
              className="h-fit w-fit relative left-[-1.7rem]"
            />
          </Link>

          <RegisterForm user={user} />
          <p className="copyright my-10">© 2024 Medicare</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
