import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={`${containerStyles} | px-6 py-2 rounded-full custom__ring`}
      aria-label={title}
    >

      <div className="flex gap-2 justify-center items-center">
      <Image
          src={icon}
          alt={title}
          height={30}
          width={30}
          className="object-contain dark:bg-secondary_gray rounded-md p-1"
        />
  
      <span className='text-sm font-medium'>{title}</span>
      </div>
       
    </button>
  );
};

export default CustomButton;
