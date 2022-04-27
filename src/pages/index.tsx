import { Box, forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp, useMotionValue, useTransform } from 'framer-motion'



export default function Home() {
  return (

    <motion.div
      style={{width: '300px', height: '300px', background: '#babaca'}}
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        transitionEnd: {
          display: "flex",
        },
      }}
      transition={{duration: 10}}
    />
    
    )
}
