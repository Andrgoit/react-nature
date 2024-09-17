import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ pages, onClick, index }) {
  const [showModal, setShowModal] = useState(false);

  const openMobMenu = () => {
    setShowModal(true);
  };

  return (
    <header className="fixed left-0 right-0 z-10 py-3">
      <div className="cont flex justify-between text-white">
        <span className="text-xl first-letter:text-orange-600">Nature</span>
        <nav className="hidden items-center gap-10 sm:flex">
          {pages.map(({ id, title }) => (
            <a
              onClick={() => onClick(id)}
              className={`inline-block h-full cursor-pointer ${index === id ? `text-orange-400` : `text-white`}`}
              key={id}
            >
              {title}
            </a>
          ))}
        </nav>
        <GiHamburgerMenu
          size={28}
          className="sm:hidden"
          onClick={openMobMenu}
        />
      </div>

      {/* modal menu */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-gradient-to-tr from-[#4b6cb7] to-[#182848] sm:hidden"
          >
            <MdClose
              size={28}
              className="absolute right-4 top-4 text-white"
              onClick={() => setShowModal(false)}
            />
            <nav className="flex flex-col items-center justify-center gap-10">
              {pages.map(({ id, title }) => (
                <a
                  onClick={() => {
                    setShowModal(false);
                    onClick(id);
                  }}
                  className={`inline-block h-full cursor-pointer ${index === id ? `text-orange-400` : `text-white`}`}
                  key={id}
                >
                  {title}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
