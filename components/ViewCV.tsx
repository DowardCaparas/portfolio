import Image from "next/image"
import Link from "next/link"
import { profile } from "@/public/images"
import CustomButton from "./CustomButton"

const ViewCV = () => {
  return (
    <div className="border border-secondary_purple rounded-full">
        <Link
              href='/CAPARAS_DOUNHUWARD_RESUME.pdf' 
              className='flex gap-4 bg-primary_gray px-2 py-1 rounded-full'
            >

              <Image
                  src={profile}
                  alt='profile'
                  height={30}
                  width={30}
                  className='object-contain rounded-full border-secondary_purple border-2' 
              />

              <CustomButton
                title='View CV'
                textStyles='text-slate-900 text-[12px]'
              />
            </Link>
    </div>
  )
}

export default ViewCV