import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hero UI</h1>
      <p className="text-lg text-gray-600 mb-8">
        A modern UI library for building beautiful and responsive web
        applications.
      </p>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </div>
  );
}
