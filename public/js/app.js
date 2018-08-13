class App extends React.Component {
    render () {
      return (
        <div className='section'>
          <h1 className='title'> Tolkien About Books </h1>
          <div className='columns'>
          <Books />
          </div>
          </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.querySelector('main')
  )
