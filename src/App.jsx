import { Header, ScrollIcon, PageList } from "./components";
import { useEffect, useState } from "react";
import pages from "./data/pages";

function App() {
  const [index, setIndex] = useState(0);
  const pagesCount = pages.length;
  // const element = pages[index].page();

  // console.log(index);

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        if (index > 0) {
          console.log("Прокрутка вверх");
          setIndex(index - 1);
          return;
        }
        console.log("конец Прокрутка вверх");
        setIndex(0);
        return;
      }
      if (event.deltaY > 0) {
        if (index < pagesCount - 1) {
          setIndex(index + 1);
          console.log("Прокрутка вниз");
          return;
        }
        setIndex(pagesCount - 1);
        console.log("конец Прокрутка вниз");
        return;
      } else {
        return;
      }
    });
  }, [index, pagesCount]);

  const handleChangePage = (index) => {
    setIndex(index);
  };

  return (
    <>
      <Header pages={pages} onClick={handleChangePage} index={index} />
      <PageList pages={pages} index={index} />
      <ScrollIcon index={index} pagesCount={pagesCount} />
    </>
  );
}

export default App;
