import { motion } from "framer-motion";
import arrow from "src/assets/icon/downArrow.png";

export default function ScrollIcon({ index, pagesCount }) {
  // console.log(index);

  return (
    <div className="fixed bottom-3 left-0 right-0 z-[1] flex items-center justify-center sm:bottom-5">
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="flex flex-col items-center gap-1"
      >
        {" "}
        {index > 0 && (
          <img
            src={arrow}
            alt="down arrow"
            className="block h-5 w-5 rotate-180 drop-shadow-[0_50px_50px_rgba(255,255,255,1)] sm:h-10 sm:w-10"
            // style={{ filter: "drop-shadow(0px 25px 25px 50px white)" }}
          />
        )}
        {index < pagesCount - 1 && (
          <img
            src={arrow}
            alt="down arrow"
            className="block h-5 w-5 drop-shadow-[0_50px_50px_rgba(255,255,255,1)] sm:h-10 sm:w-10"
            // style={{ filter: "drop-shadow(0px 25px 25px 50px white)" }}
          />
        )}
      </motion.div>
    </div>
  );
}
