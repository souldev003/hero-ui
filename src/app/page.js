import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-300 mx-auto p-4">
      <div className="flex items-center gap-4">
        <Link href="/posts">
          <Button>Posts</Button>
        </Link>{" "}
        <Link href="/signUp">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
