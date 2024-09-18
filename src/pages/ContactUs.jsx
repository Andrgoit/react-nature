import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={4}
        id="contact"
        className="flex h-screen w-full items-center justify-center bg-zinc-600 text-white"
      >
        contact us form
      </motion.div>
    </AnimatePresence>
  );
}
