'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, textStyles, handleClick}: CustomButtonProps) => {
  return (
   <button
      type='button'
      className={`${containerStyles} | px-5 py-2 rounded-full`}
      onClick={handleClick}
      aria-label={title}
   >
      <span className={`${textStyles} && text-sm`}>
        
          {title}        
      </span>

   </button>
  )
}

export default CustomButton