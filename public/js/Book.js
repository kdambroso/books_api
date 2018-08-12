class Book extends React.Component {

    render () {
      return (
        <div>
          <div className='tile is-ancestor'>
            <div className='tile is-2'>
              <div>
                <img src={this.props.Book.image} alt={this.props.Book.name} />
              </div>
            </div>
            <div className='tile is-2'></div>
            <div className='tile'>
              <div>
                <h3 className='tile is-child box'><span>Title:</span> {this.props.Book.title} </h3>
                <p className='tile is-child box'><span>Author:</span> {this.props.Book.author} </p>
                <p className='tile is-child box'><span>Publisher:</span> {this.props.Book.publisher} </p>
                <p className='tile is-child box'><span>Genre:</span>{this.props.Book.genre} </p>
              </div>

              <div className='tile'>
              </div>
            <div className='tile'>
              <button className='button is-warning' onClick={()=> this.props.toggleState('booksListAvailable', 'BookAvailable')}>See All Books</button>
            </div>
            </div>
            </div>
            <BookForm Book={this.props.Book}   handleSubmit={this.props.handleSubmit}/>
          </div>
        )
    }
  }
