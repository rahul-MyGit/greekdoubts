import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default async function Page() {

  const session = await auth();

  return (
    <div>
      <Navbar session={session}/>
      Home Page
      <Link href={'/home'}>
        <Button>Click here</Button>
      </Link>
    </div>
  );
}
