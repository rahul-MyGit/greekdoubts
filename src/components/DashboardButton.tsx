'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function DashboardButton() {
  const router = useRouter();

  return (
    <Button 
      onClick={() => router.push('/home')} 
      className="ml-2"
    >
      Click me to go to home page of dashboard
    </Button>
  );
}