"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div >
      <Button variant="default" onClick={() => {router.push("/login")}} >Login</Button>
      <Button variant="outline" onClick={() => {router.push("/register")}} >Register</Button>
    </div>
  );
}
