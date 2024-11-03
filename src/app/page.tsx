import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { githubSignInAction, userSignOutAction } from "./actions/authActions";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { DashboardButton } from "@/components/DashboardButton";

export default async function Page() {

  const session = await auth();
  console.log("the session is: ", session);

  return (
    <div className="m-2">
      Home Page
      {session && <Image src={session.user?.image || ""} alt="hehe" height={100} width={100} className="rounded-full" priority/>}
       
       <DashboardButton />

      {
        session && session.user ? 
          <form action={userSignOutAction}>
            <Button type="submit" className="ml-10">logout</Button>
          </form>
        :
          <form className="" action={githubSignInAction}>
            <Button
              variant="outline"
              className="w-full py-3 rounded-md text-sm font-semibold bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition"
              type="submit"
            >
              <GitHubLogoIcon className="h-5 w-5 mr-2" />
              Sign in with GitHub
            </Button>
          </form>
      }
    </div>
  );
}
