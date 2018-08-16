class Header extends React.Component {
    render () {
      return (
        <div class="header">

          <div class="header-title">
            <img src="/css/ap,550x550,16x12,1,transparent,t.u1.png" alt="logo" />
            <h1 className='title'> Tolkien About Books </h1>
            <Users />
          </div>
          </div>
      )
    }
  }

  class Footer extends React.Component {
      render () {
        return (


          <footer>
          <a href="https://novel12.com/the-fellowship-of-the-ring/book-i-prologue-128520.htm">
          <img src="/css/Screen Shot 2018-08-12 at 1.24.45 PM.png"  /></a>
            <div id="footBlack">
              <div id="creators">
                Created by Austin Harris, Kellie Dambroso, and Jon Bonnet
              </div>
              </div>
            </footer>
          
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
  <Footer />
          </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.querySelector('main')
  )
