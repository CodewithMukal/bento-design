"use client"
import Action from "@/components/Action";
import ActionTab from "@/components/ActionTab";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [actionOpen, setActionOpen] = useState(false);
  return (
    <div className="h-screen px-4 md:px-[10vw] py-4 flex flex-col gap-4">
      <Navbar setActionOpen={setActionOpen} />
      <div className="flex gap-[2vw] h-[80vh]">
        <Main/>
        <Action />
        <ActionTab actionOpen={actionOpen} />
      </div>
    </div>
  );
}
