import { motion } from "framer-motion";
import arrow from "src/assets/icon/downArrow.png";

export default function ScrollIcon({ index, pagesCount }) {
  console.log(index);

  return (
    <div className="fixed bottom-10 left-0 right-0 z-10 flex items-center justify-center">
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
            className="block h-10 w-10 rotate-180 drop-shadow-[0_50px_50px_rgba(255,255,255,1)]"
            // style={{ filter: "drop-shadow(0px 25px 25px 50px white)" }}
          />
        )}
        {index < pagesCount - 1 && (
          <img
            src={arrow}
            alt="down arrow"
            className="block h-10 w-10 drop-shadow-[0_50px_50px_rgba(255,255,255,1)]"
            // style={{ filter: "drop-shadow(0px 25px 25px 50px white)" }}
          />
        )}
      </motion.div>
    </div>
  );
}
