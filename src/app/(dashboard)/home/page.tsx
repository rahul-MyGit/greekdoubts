import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-2">
      Home Page in Dashboard
      <Link href={'/profile/3'}>
      <Button className="ml-2">Click me</Button>
      </Link>
    </div>
  );
}
