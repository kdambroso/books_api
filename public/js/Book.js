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
              <h3 className='tile is-child box'><span>Name:</span> {this.props.book.title} </h3>
              <p className='tile is-child box'><span>Phone:</span> {this.props.book.publisher} </p>
              <p className='tile is-child box'><span>Key Skill:</span> {this.props.book.genre} </p>
              <p className='tile is-child box'><span>Age:</span>{this.props.book.author} </p>

            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('booksListAvailable', 'bookAvailable')}>See Full List</button>
          </div>
          </div>
        </div>
        <BookForm book={this.props.book}   handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }
}
