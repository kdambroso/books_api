class BookForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      genre: '',
      publisher: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    if(this.props.book){
      this.setState({
        title: this.props.book.title,
        author: this.props.book.author,
        genre: this.props.book.genre,
        publisher: this.props.book.publisher,
        image: this.props.book.image,
        id: this.props.book.id
      })
    }
  }
  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='title'>Title</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <label className='label' for='author'>Author</label>
          <div className='control'>
            <input
              className='input'
              type='number'
              onChange={this.handleChange}
              value={this.state.author}
              id='author'
            />
          </div>
          <label className='label' for='genre'>Genre</label>
          <div className='control'>
            <input className='input'
              type='text'
              id='genre'
              onChange={this.handleChange}
              value={this.state.genre}
            />
          </div>
          <label className='label' for='publisher'>Publisher</label>
          <div className='control'>
            <input
              className='input'
              type='tel'
              id='publisher'
              onChange={this.handleChange}
              value={this.state.publisher}
            />
          </div>
          <label className='label 'for='image'>Image</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='image'
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
          <button className="button is-link" onClick={()=> this.props.toggleState('booksListAvailable', 'addBookAvailable')}>Cancel</button>
      </div>
    )
  }
}
