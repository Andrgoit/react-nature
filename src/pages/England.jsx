import { motion, AnimatePresence } from "framer-motion";
import desert from "src/assets/img/England/England1.jpg";

export default function England() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={1}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${desert})`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: "10",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="cont flex flex-col gap-8 text-center text-white">
          <h2 className="text-4xl">England</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            tempore vero quam praesentium cupiditate doloribus, numquam eos
            eius? Aliquam cum illum perspiciatis sint voluptates sapiente neque
            temporibus magni cupiditate molestias!
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
