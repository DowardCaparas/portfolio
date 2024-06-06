'use client'

import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, textStyles, handleClick}: CustomButtonProps) => {
  return (
   <button
      type='button'
      className={containerStyles}
      onClick={handleClick}
      aria-label={title}
   >
      <span className={textStyles}>
          {title}        
      </span>

   </button>
  )
}

export default CustomButton