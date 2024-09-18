import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// const letterVariants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: (i) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//     },
//   }),
// };

const desVariants = {
  hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0)" },
};

export default function PageItem({ item }) {
  const [index, setIndex] = useState(0);
  const { title, page, subItems } = item;

  console.log(index);

  if (page) {
    return page();
  }

  // const { itemTitle, image, description } = subItems[index];
  const { image, description } = subItems[index];
  const ArrayLenght = subItems.length;

  console.log("ArrayLenght", ArrayLenght);

  const handlerClickNextBtn = () => {
    if (index < ArrayLenght - 1) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };
  const handlerClickPrevBtn = () => {
    if (index > 0) {
      setIndex(index - 1);
      return;
    }
    setIndex(ArrayLenght - 1);
  };

  // const letters = itemTitle.split("").map((letter, idx) => (
  //   <motion.span
  //     key={idx}
  //     custom={idx}
  //     variants={letterVariants}
  //     initial="hidden"
  //     animate="visible"
  //   >
  //     {letter}
  //   </motion.span>
  // ));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        // key={index}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="cont flex flex-col items-center gap-8 text-center text-white">
          <div className="flex max-w-[1024px] flex-col gap-20 text-white">
            <motion.h2
              initial={{ y: -50, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4 }}
              className="text-4xl uppercase sm:text-6xl"
            >
              {title}
            </motion.h2>
            {/* <div className="flex justify-center text-2xl uppercase">
              {letters}
            </div> */}
            <motion.p
              variants={desVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-5 flex items-center gap-4"
          >
            <button
              className="cursor-pointer rounded-xl bg-white/30 px-3 py-1 transition-all duration-300 hover:scale-110"
              onClick={handlerClickPrevBtn}
            >
              Prev
            </button>
            <button
              className="cursor-pointer rounded-xl bg-white/30 px-3 py-1 transition-all duration-300 hover:scale-110"
              onClick={handlerClickNextBtn}
            >
              Next
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
