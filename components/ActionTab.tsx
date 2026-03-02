import { NextPage } from "next";

interface Props {
  actionOpen: boolean;
}

const ActionTab: NextPage<Props> = ({ actionOpen }: Props) => {
  return (
    <div
      className={`
    fixed top-1/2 right-0 z-50
    h-[80%] w-[70vw]
    -translate-y-1/2
    border border-black/10
    flex md:hidden flex-col gap-4
    rounded-3xl bg-white shadow-xl p-4
    transition-transform duration-300 ease-in-out
    ${actionOpen ? "translate-x-0" : "translate-x-full"}
  `}
    >
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

export default ActionTab;
