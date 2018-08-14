class Book extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.book.image} alt={this.props.book.title} />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Title:</span> {this.props.book.title} </h3>
              <p className='tile is-child box'><span>Author:</span>{this.props.book.author} </p>
              <p className='tile is-child box'><span>Summary:</span>{this.props.book.summary} </p>
              <p className='tile is-child box'><span>Genre:</span> {this.props.book.genre} </p>
              <p className='tile is-child box'><span>Publisher:</span> {this.props.book.publisher} </p>

             

            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('booksListAvailable', 'bookAvailable')}>See Full List</button>
          </div>
          </div>
        </div>
        <BookForm book={this.props.book}   handleSubmit={this.props.handleSubmit}/>
        <div><button className="button is-link" onClick={()=> this.props.toggleState('booksListAvailable', 'bookAvailable')}>Cancel</button>
        </div>
      </div>
    )
  }
}
