export default function Header({ pages, onClick, index }) {
  console.log(pages);

  return (
    <header className="fixed left-0 right-0 z-10 py-3">
      <div className="cont flex gap-5 text-white">
        {pages.map(({ id, title }) => (
          <a
            onClick={() => onClick(id)}
            className={`inline-block h-full cursor-pointer ${index === id ? `text-orange-400` : `text-white`}`}
            key={id}
          >
            {title}
          </a>
        ))}
      </div>
    </header>
  );
}
