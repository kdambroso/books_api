class Header extends React.Component {
    render () {
      return (
        <div class="header">
          <div class="header-title">
            <img src="/css/ap,550x550,16x12,1,transparent,t.u1.png" alt="logo" />
            <h1 className='title'> Tolkien About Books </h1>
          </div>
          </div>
      )
    }
  }

class App extends React.Component {
    render () {
      return (
        <div className='section'>
        <Header />

          <div >
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
