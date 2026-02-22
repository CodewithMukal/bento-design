import { NextPage } from 'next'

interface Props {
    actionOpen: boolean
}

const ActionTab: NextPage<Props> = ({actionOpen}:Props) => {
  return actionOpen && <div className='w-[70vw] block md:hidden fixed top-1/2 -translate-y-1/2 right-4 rounded-lg bg-pink-400 mx-auto h-[80%]'>
    
  </div>
}

export default ActionTab