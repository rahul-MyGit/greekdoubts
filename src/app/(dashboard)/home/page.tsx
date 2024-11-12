import { SideBarMain } from "@/components/SideBarMain";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <SideBarMain session={session}/>
    </div>
  );
}
