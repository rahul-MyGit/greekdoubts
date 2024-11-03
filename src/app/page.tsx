import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-2">
      Home Page
      <Link href={'/home'}>
      <Button className="ml-2">Click me to go to home page of dashboard</Button>
      </Link>
    </div>
  );
}
