import { motion } from "framer-motion";
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" p-6 w-full max-w-sm relative"
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4"
        >
          ❌
        </motion.button>
        {children}
      </motion.div>
    </div>
  );
}
