class BooksList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <table>
        <tbody>
        {this.props.books.map((book, index) => {
          return (
          <tr>
            <td onClick={() =>
              { this.props.toggleState('booksListAvailable', 'bookAvailable');
                this.props.getBook(book)
                }}
                >
              <img src={book.image} alt={book.name}/>
            </td>

              <h3> {book.title} </h3>
              <h3> {book.author} </h3>
              <h3> {book.publisher} </h3>
              <h3> {book.genre} </h3>


            <td onClick={
              () => {
            this.props.toggleState('booksListAvailable', 'bookAvailable');
            this.props.getBook(book)
            }}
            >

              <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
              <button className='button is-danger is-small'
              onClick={()=>this.props.deleteBook(book, index)}
              >
              Delete
              </button>
            </td>
          </tr>
        )
        })}
        </tbody>
      </table>
    )
  }
}
