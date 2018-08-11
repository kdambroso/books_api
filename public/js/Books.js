class Books extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      booksAvailable: true,
      addBookAvailable: false,
      bookAvailable: false,
      editBookAvailable: false,
      books:[],
      book: {}
    }
      this.toggleState = this.toggleState.bind(this)
      this.getBooks = this.getBooks.bind(this)
      this.getBook = this.getBook.bind(this)
      this.deleteBook = this.deleteBook.bind(this)
      this.handleCreate = this.handleCreate.bind(this)
      this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
      this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }
  componentDidMount () {
    this.getBooks()
  }
  handleCreate (book){
    console.log([book, ...this.state.books])
    this.setState({books:[book, ...this.state.books]})
  }
  handleCreateSubmit (book) {
  fetch('/books', {
    body: JSON.stringify(book),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(createdBook => {
    return createdPerson.json()
  })
  .then(jsonedBook => {
    this.handleCreate(jsonedBook)
    this.toggleState('addBookAvailable',
     'booksAvailable')
  })
  .catch(error => console.log(error))
}
handleUpdateSubmit(book) {
  fetch('/books/' + book.id,{
    body:JSON.stringify(book),
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(updatedBook => {
    return updatedBook.json()
  })
  .then(jsonedBook => {
    this.getBooks()
    this.toggleState('booksAvailable',
     'bookAvailable')
  })
  .catch(error => console.log(error))
}

  deleteBook(book, index) {
    fetch('/books/' + book.id,
  {
    method: 'DELETE'
  })
  .then(data => {
    this.setState({
      books: [
        ...this.state.books.slice(0, index),
        ...this.state.books.slice(index + 1)
      ]
    })
  })
  }

  getBooks() {
    fetch('/books')
      .then(response => response.json())
      .then(JSONdata => {
        this.setState({
          books: JSONdata
        })
      }).catch(error => console.log(error))
  }

  getBook(book){
    this.setState({
      book: book
    })
  }

  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
}


  render () {
    console.log(this.state);
    return (
      <div className='book column'>
        <h2> Books </h2>

        <button
          className='button is-success'
            onClick={()=>this.toggleState('addBookAvailable', 'booksAvailable')}
              >Add a Book</button>
        {this.state.booksAvailable
          ? <BooksList
          toggleState={this.toggleState}
          books={this.state.books}
          getBook={this.getBook}
          deleteBook={this.deleteBook}
          /> : ''
        }
        {this.state.addBookAvailable
          ? <BookForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
          />
         : ''
       }
        {this.state.bookAvailable
          ? <Book
            toggleState={this.toggleState}
            book={this.state.book}
            handleSubmit={this.handleUpdateSubmit}
         />
         : ''
       }
    </div>

    )
  }
}
