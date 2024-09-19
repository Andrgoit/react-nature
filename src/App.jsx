import { ToastContainer } from "react-toastify";
import { Header, PageList, ScrollIcon } from "./components";
import { useEffect, useState } from "react";
import pages from "./data/pages";

function App() {
  const [index, setIndex] = useState(0);
  const pagesCount = pages.length;

  const handlerScroll = (e, index, pagesCount) => {
    if (e.deltaY < 0) {
      if (index > 0) {
        // console.log("Прокрутка вверх");
        setIndex(index - 1);
        return;
      }
      // console.log("конец Прокрутка вверх");
      setIndex(0);
      return;
    }
    if (e.deltaY > 0) {
      if (index < pagesCount - 1) {
        setIndex(index + 1);
        // console.log("Прокрутка вниз");
        return;
      }
      setIndex(pagesCount - 1);
      // console.log("конец Прокрутка вниз");
      return;
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", (e) =>
      handlerScroll(e, index, pagesCount),
    );
  }, [index, pagesCount]);

  const handleChangePage = (index) => {
    setIndex(index);
  };

  const handlerSwipeDown = () => {
    if (index > 0) {
      // console.log("Свайп вниз");
      setIndex(index - 1);
      return;
    }
    // console.log("конец свайпа вниз");
    setIndex(0);
    return;
  };

  const handlerSwipeUp = () => {
    if (index < pagesCount - 1) {
      setIndex(index + 1);
      // console.log("свайп вверх");
      return;
    }
    setIndex(pagesCount - 1);
    // console.log("конец свайпа вверх");
    return;
  };

  return (
    <>
      <Header pages={pages} onClick={handleChangePage} index={index} />
      <PageList
        pages={pages}
        index={index}
        handlerSwipeUp={handlerSwipeUp}
        handlerSwipeDown={handlerSwipeDown}
      />
      <ScrollIcon index={index} pagesCount={pagesCount} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default App;
