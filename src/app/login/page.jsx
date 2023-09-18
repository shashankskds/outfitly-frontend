"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { LoginForm } from "../components/LoginForm";
import { buttonVariants } from "../components/ui/button";
import { useSearchParams, redirect } from "next/navigation";
import { useLoginStatus } from "@/hooks/useLoginStatus";
import Image from "next/image";

function Login() {
  const searchParams = useSearchParams();
  const isUserLoggedIn = useLoginStatus();

  if (isUserLoggedIn === false)
    return (
      <>
        <div className="container relative h-[calc(100vh-64px)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <Link
            href={`/signup${
              searchParams.get("ref") ? `?ref=${searchParams.get("ref")}` : ""
            }`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8 uppercase text-appSecondary"
            )}
          >
            Create your account
          </Link>
          <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex items-center bg-gradient-to-t from-orange-200 to-white">
            <h2 className="text-appPrimary tracking-wider mt-12 text-3xl font-bold mx-5">
              Welcome to the world of Outfitly!
            </h2>
            <Image
              src={"https://images.bewakoof.com/web/group-19-1617704502.png"}
              alt="image"
              width={500}
              height={500}
              className="w-4/5 h-auto absolute bottom-10"
            />
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 items-center">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-appSecondary">
                  Login to your account
                </h1>
                <p className="text-muted-foreground">
                  for Latest trends, exciting offers and everything Outfitly!
                </p>
              </div>
              <div className="sm:w-[400px]">
                <LoginForm />
                <p className="px-8 mt-5 text-center text-sm text-muted-foreground">
                  By creating an account or logging in, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else if (isUserLoggedIn === true) redirect("/");
}

export default Login;
