import Book from "./Book"

export default function Min({books}) {
  return (
          <main id="min">
            {books.map(book => (
              <Book 
                key={book.id}
                title={book.title}
                imgSrc={book.imgSrc}
                text={book.text} 
              />
            ))}
          </main>
  )
}
