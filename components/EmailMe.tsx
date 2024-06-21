import Link from "next/link"
import CustomButton from "./CustomButton"
import { gmail } from "@/public"

const EmailMe = () => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center mt-28 -mb-20'>
        <h2 className='text-2xl font-medium'>Have a questions?</h2>
        <p>Get in touch with me</p>

        <Link href='mailto:caparasdounhuward@gmail.com'>
        <CustomButton 
            title="Email"
            containerStyles="dark:hover:bg-secondary_black hover:bg-primary_gray"
            icon={gmail}
        />
        </Link>
        
    </div>
  )
}

export default EmailMe