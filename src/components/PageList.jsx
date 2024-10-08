import { PageItem } from ".";

export default function PageList({
  pages,
  index,
  handlerSwipeDown,
  handlerSwipeUp,
}) {
  let xDown = null;
  let yDown = null;

  const handleTouchStart = (e) => {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!xDown || !yDown) {
      return;
    }
    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // console.log("левый свайп");
      } else {
        // console.log("правый свайп");
      }
    } else {
      if (yDiff > 0) {
        // up swipe
        handlerSwipeUp();
      } else {
        //  down swipe
        handlerSwipeDown();
      }
    }
    // reset values
    xDown = null;
    yDown = null;
  };

  const elements = pages.map((item) => <PageItem item={item} key={item.id} />);

  return (
    <main onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {elements[index]}
    </main>
  );
}
