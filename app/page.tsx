"use client";
import Action from "@/components/Action";
import ActionTab from "@/components/ActionTab";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [actionOpen, setActionOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-white px-4 md:px-[8vw] py-4 flex flex-col gap-4">
      <Navbar setActionOpen={setActionOpen} />
      <div className="flex gap-4 h-[80vh]">
        <Main />
        <Action />
        <ActionTab actionOpen={actionOpen} />
      </div>
    </div>
  );
}
