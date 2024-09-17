import { motion, AnimatePresence } from "framer-motion";

export default function PageItem({ item }) {
  const { title, subItems } = item;

  //   console.log(subItems);

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
          <h2 className="text-4xl">{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
