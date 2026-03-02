import { NextPage } from "next";

interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <div className="md:w-[62vw] border-[#1F7A63]/20 border w-full bg-[#FFFFFF] shadow-xl p-4 rounded-3xl h-full flex flex-col gap-4">
  <h1 className="font-semibold text-xl text-[#0F172A]">
    Dashboard Overview
  </h1>

  <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">

    {/* Card 1 */}
    <div className="rounded-2xl bg-[#1F7A63] text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-lg">Active Projects</h2>
        <p className="text-sm text-white/70">Currently running</p>
      </div>
      <p className="text-4xl font-bold">12</p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl bg-[#ECF5F1] p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-medium text-[#0F172A]">Tasks Completed</h2>
        <p className="text-xs text-[#64748B]">This week</p>
      </div>
      <p className="text-3xl font-bold text-[#1F7A63]">38</p>
    </div>

    {/* Card 3 */}
    <div className="col-span-2 rounded-2xl bg-linear-to-r from-[#1F7A63] to-[#2EA68B] text-white p-4 flex items-center justify-between">
      <div>
        <h2 className="font-medium text-lg">Productivity Score</h2>
        <p className="text-sm text-white/70">Last 7 days</p>
      </div>
      <p className="text-5xl font-bold">87%</p>
    </div>

  </div>
</div>
  );
};

export default Main;
