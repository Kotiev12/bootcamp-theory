import BooktItem from "./BookItem"


const BookList = (props) => {
  const {books} = props

  return(
    <div>
      {books.map((book, index) => {
        return(
          <BooktItem
          key={index}
          title={book.title}
          author={book.author}
          />
        )
      })}
    </div>
  )

}

export default BookList