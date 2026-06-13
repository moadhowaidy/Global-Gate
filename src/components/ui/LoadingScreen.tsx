import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#040A2C]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            // after exit animation, unmount is handled by AnimatePresence
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              // trigger exit after logo settles
              setTimeout(() => setVisible(false), 300)
            }}
          >
            <Logo size="hero" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
