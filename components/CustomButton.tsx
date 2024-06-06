'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, textStyles, handleClick}: CustomButtonProps) => {
  return (
   <button
      type='button'
      className={containerStyles}
      onClick={handleClick}
   >
      <span className={textStyles}>
          {title}        
      </span>

   </button>
  )
}

export default CustomButton