import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="">Login</Link>
      <Link href="/auth/register">Register</Link>
    </main>
  );
}
