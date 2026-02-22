import { NextPage } from 'next'
import { Delicious_Handrawn, Libre_Bodoni } from 'next/font/google'

interface Props {
    setActionOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const logoFont = Libre_Bodoni({
    variable: '--font-libre-bodoni',
    subsets: ['latin'],
})

const Navbar: NextPage<Props> = ({setActionOpen}:Props) => {
  return <div className='w-full mx-auto flex justify-between px-10 items-center bg-sky-300 rounded-md h-[10vh]'>
    <div className={`text-3xl text-[#f1f1f1] ${logoFont.className}`}>
        Logo
    </div>
    <div className='hidden md:block'>
        <input type="text" placeholder='Search' className='bg-white focus:outline-0 rounded xl:w-100 p-2' />
    </div>
    <div onClick={()=>setActionOpen((prev)=>!prev)} className='bg-white w-10 h-10 rounded-full'>

    </div>
  </div>
}

export default Navbar