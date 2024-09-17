import { motion, AnimatePresence } from "framer-motion";

export default function PageItem({ item }) {
  const { title, subItems } = item;

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const desVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const letters = title.split("").map((letter, idx) => (
    <motion.span
      key={idx}
      custom={idx}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
    >
      {letter}
    </motion.span>
  ));

  const { image, description } = subItems[0];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        // key={id}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          //   zIndex: "10",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="cont flex flex-col gap-8 text-center text-white">
          <div className="flex justify-center text-4xl uppercase">
            {letters}
          </div>
          <motion.p
            variants={desVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
