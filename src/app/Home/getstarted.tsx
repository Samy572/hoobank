import Image from "next/image"

export const Getstarted = () => {
  return (
    <div className="cursor-pointer flex justify-center text-gradient  mt-10 text-gray-400 ">
    <div className=" h-32 border-2 border-secondary flex items-center flex-col justify-center w-32  rounded-full">
      <span className="flex">
        Get
        <Image
          className="hover:scale-110 transition-all"
          src={'/asset/svg/arrow.svg'}
          width={30}
          height={30}
          alt="arrow"
        />{' '}
      </span>
      <span>Started</span>
    </div>
  </div>
  )
}