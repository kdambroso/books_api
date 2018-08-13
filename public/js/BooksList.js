class BooksList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.books.map((book, index) => {
          return (
          <tr>
            <td  onClick={
              () => {
                this.props.toggleState('booksAvailable', 'bookAvailable');
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
            this.props.toggleState('booksAvailable', 'bookAvailable');
            this.props.getBook(book)
            }}
            >

              <button className='button is-warning is-small'
             onClick={() =>this.props.handleUpdateSubmit(book)} >Edit</button>
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
            <tr>
              <td onClick={()=>
              { this.props.getBook(book); this.props.toggleState('booksListAvailable', 'bookAvailable')}
              }>
                <img src={book.image} alt={book.title} />
              </td>
              <td className='book' onClick={()=> { this.props.getBook(book); this.props.toggleState('booksListAvailable', 'bookAvailable')}}>
                <h3> {book.title} </h3>
              </td>
              <td>
                  <button className='button is-warning is-small'
                  onClick={()=>
                  { this.props.getBook(book); this.props.toggleState('booksListAvailable', 'bookAvailable')}}
                  >Edit</button>
              </td>
              <td>
                  <button className='button is-danger is-small' onClick={() => this.props.deleteBook(book, index)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
