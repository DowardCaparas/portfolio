'use client'

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({title, containerStyles, textStyles}: CustomButtonProps) => {
  return (
   <button
      type='button'
      className={containerStyles}
   >
      <span className={textStyles}>
          {title}        
      </span>

   </button>
  )
}

export default CustomButton