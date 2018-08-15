
class UserForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      pass_word: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='username'
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <label className='label' for='pass_word'>password</label>
          <div className='control'>
            <input className='input'
              type='text'
              id='pass_word'
              onChange={this.handleChange}
              value={this.state.pass_word}
            />
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
          <button className="button is-link" onClick={()=> this.props.toggleState('usersListIsVisible', 'addUserIsVisible')}>Cancel</button>
      </div>
    )
  }
}

class User extends React.Component {

  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Name:</span> {this.props.user.username} </h3>
              <p className='tile is-child box'><span>Key Skill:</span> {this.props.user.pass_word} </p>

            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-warning' onClick={()=> this.props.toggleState('usersListIsVisible', 'userIsVisible')}>See Full List</button>
          </div>
          </div>
        </div>
        <UserForm />
      </div>
    )
  }
}

class UsersList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.users.map((user, index) => {
          return (
            <ul>
              <li className='user' onClick={()=> { this.props.getUser(user); this.props.toggleState('usersListIsVisible', 'userIsVisible')}}>
                <h3> {user.username} </h3>
              </li>
              <li>
                  <button className='button is-danger is-small' onClick={() => this.props.deleteUser(user, index)}>Delete</button>
              </li>
            </ul>
          )
        })}
        </tbody>
      </table>
    )
  }
}


class Users extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    usersListIsVisible: true,
    addUserIsVisible: false,
    userIsVisible: false,
    users : [],
    user: {}
    }
    this.deleteUser = this.deleteUser.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getUser = this.getUser.bind(this)
    this.toggleState = this.toggleState.bind(this)

  }

  componentDidMount () {
    this.getUsers();
  }

  deleteUser (user, index) {
    fetch('users/' + user.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          users: [
            ...this.state.users.slice(0, index),
            ...this.state.users.slice(index + 1)
          ]
        })
      })
  }

  handleCreate (user) {
    console.log([user, ...this.state.users])
    this.setState({users: [user, ...this.state.users]})
  }

  handleCreateSubmit (user) {
    fetch('/users', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdUser => {
        return createdUser.json()
      })
      .then(jsonedUser => {
        this.handleCreate(jsonedUser)
        this.toggleState('addUserIsVisible', 'usersListIsVisible')
      })
      .catch(error => console.log(error))
}

  getUser( user ) {
    this.setState({user: user})
  }

  getUsers () {
    fetch('/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data
        })
      }).catch(error => console.log(error))
  }



  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }


  render () {
    return (
      <div className='users column'>
        <h2> Users </h2>
        {this.state.usersListIsVisible ? <button className='button is-success' onClick={()=>this.toggleState('addUserIsVisible', 'usersListIsVisible')}>Create A Username</button> :''}
        {
          this.state.usersListIsVisible ?
            <UsersList
             toggleState={this.toggleState}
             users={this.state.users}
             getUser={this.getUser}
             deleteUser={this.deleteUser}
            /> : ''
        }
        {
          this.state.addUserIsVisible ?
           <UserForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
           /> : ''
         }
        {
          this.state.userIsVisible ?
           <User
            toggleState={this.toggleState}
            user={this.state.user}
           /> : ''
        }
      </div>
    )
  }
}























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
          <Users />
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
