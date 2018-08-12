class Book extends React.Component {

    render () {
      return (
        <div>
          <div className='tile is-ancestor'>
            <div className='tile is-2'>
              <div>
                <img src={this.props.book.image} alt={this.props.book.name} />
              </div>
            </div>
            <div className='tile is-2'></div>
            <div className='tile'>
              <div>
                <h3 className='tile is-child box'><span>Title:</span> {this.props.book.title} </h3>
                <p className='tile is-child box'><span>Author:</span> {this.props.book.author} </p>
                <p className='tile is-child box'><span>Publisher:</span> {this.props.book.publisher} </p>
                <p className='tile is-child box'><span>Genre:</span>{this.props.book.genre} </p>
              </div>

              <div className='tile'>
              </div>
            <div className='tile'>
              <button className='button is-warning' onClick={()=> this.props.toggleState('booksListAvailable', 'bookAvailable')}>See All Books</button>
            </div>
            </div>
            </div>
            <BookForm Book={this.props.Book}   handleSubmit={this.props.handleSubmit}/>
          </div>
        )
    }
  }
