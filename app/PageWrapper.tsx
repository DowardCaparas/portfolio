'use client';

import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({children}:any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
