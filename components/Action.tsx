import { NextPage } from "next";

interface Props {}

const Action: NextPage<Props> = ({}) => {
  return (
    <div className="w-[20vw] hidden md:flex flex-col gap-4 rounded-3xl bg-[#FFFFFF] shadow-xl p-4 h-full">
      <h2 className="font-medium text-[#0F172A]">Quick Actions</h2>

      <button className="rounded-xl bg-[#1F7A63] text-white py-2 hover:bg-[#16624F] transition">
        + New Project
      </button>

      <button className="rounded-xl bg-[#ECF5F1] text-[#1F7A63] py-2 hover:bg-[#DCEEE7] transition">
        View Reports
      </button>

      <div className="mt-auto text-xs text-[#64748B] text-center">
        Last synced · 2 mins ago
      </div>
    </div>
  );
};

export default Action;
