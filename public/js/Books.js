class Books extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    booksListAvailable: true,
    addBookAvailable: false,
    bookAvailable: false,
    editBookAvailable: false,
    books : [],
    book: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getBook = this.getBook.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.handleUpdateSubmit= this.handleUpdateSubmit.bind(this)



  }

  componentDidMount () {
    this.getBooks();
  }

  deleteBook (book, index) {
    fetch('books/' + book.id,
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

  handleCreate (book) {
    console.log([book, ...this.state.books])
    this.setState({books: [book, ...this.state.books]})
  }
  handleUpdateSubmit (book) {
      fetch('/books/'+ book.id, {
        body: JSON.stringify(book),
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
          this.toggleState('booksListAvailable', 'bookAvailable')
        })
        .catch(error => console.log(error))

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
        return createdBook.json()
      })
      .then(jsonedBook => {
        this.handleCreate(jsonedBook)
        this.toggleState('addBookAvailable', 'booksListAvailable')
      })
      .catch(error => console.log(error))
}

  getBook( book ) {
    this.setState({book: book})
  }

  getBooks () {
    fetch('/books')
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data
        })
      }).catch(error => console.log(error))
  }



  toggleState (st1, st2) {
    console.log('toggleState function is running')
    console.log(st1, st2)
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }


  render () {
    return (
      <div className='books column'>
        {this.state.booksListAvailable ? <button className='button is-success' onClick={()=>this.toggleState('addBookAvailable', 'booksListAvailable')}>Add a Book</button> :''}
        {
          this.state.booksListAvailable ?
            <BooksList
             toggleState={this.toggleState}
             books={this.state.books}
             getBook={this.getBook}
             deleteBook={this.deleteBook}
            /> : ''
        }
        {
          this.state.bookAvailable ?
           <BookForm
           test={'test'}
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            test2={'test'}
           /> : ''
         }
         {
   this.state.bookAvailable ?
    <Book
     toggleState={this.toggleState}
     book={this.state.book}
     handleSubmit={this.handleUpdateSubmit}
    /> : ''
 }
      </div>
    )
  }
}
