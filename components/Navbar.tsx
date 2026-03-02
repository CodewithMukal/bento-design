import { NextPage } from "next";
import { Delicious_Handrawn, Libre_Bodoni } from "next/font/google";

interface Props {
  setActionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const logoFont = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
});

const Navbar: NextPage<Props> = ({ setActionOpen }: Props) => {
  return (
    <div className="w-full flex select-none justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md border border-white shadow-md rounded-3xl">
      <div className="text-2xl font-bold text-[#1F7A63]">GreenDash</div>

      <div className="hidden md:block w-[40%]">
        <input
          type="text"
          placeholder="Search projects, tasks..."
          className="w-full bg-[#F1F5F4] focus:outline-none focus:ring-2 focus:ring-[#7ED6B2] rounded-xl px-4 py-2 text-sm"
        />
      </div>

      <div
        onClick={() => setActionOpen((prev) => !prev)}
        className="bg-[#1F7A63] text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#16624F] transition"
      >
        ☰
      </div>
    </div>
  );
};

export default Navbar;
