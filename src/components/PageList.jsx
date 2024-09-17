import { PageItem } from ".";
// import ContactUs from "src/pages/ContactUs";

export default function PageList({ pages, index }) {
  //   console.log(pages);
  //   const contact = { id: 4, key: 4, ContactUs };

  const elements = pages.map((item) => <PageItem item={item} key={item.id} />);
  //   console.log(elements);
  //   const newElements = [...elements, contact];
  //   console.log("newElements", newElements);

  return <main className="">{elements[index]}</main>;
}
