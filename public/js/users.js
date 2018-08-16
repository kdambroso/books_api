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
      <div >
        <form onSubmit={this.handleSubmit}>
          <label  for='name'>Username</label>
          <div >
            <input

              type='text'
              id='username'
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <label  for='pass_word'>password</label>
          <div >
            <input
              type='text'
              id='pass_word'
              onChange={this.handleChange}
              value={this.state.pass_word}
            />
          </div>
          <div >
            <input className='button is-danger is-small' type='submit' />
          </div>
        </form>
          <button className='button is-danger is-small'  onClick={()=> this.props.toggleState('usersListIsVisible', 'addUserIsVisible')}>Cancel</button>
      </div>
    )
  }
}

class User extends React.Component {

  render () {
    return (
      <div>
        <div >
          <div ></div>
          <div >
            <div>
              <h3 ><span>userame:</span> {this.props.user.username} </h3>
              <p ><span>password</span> {this.props.user.pass_word} </p>

            </div>
            <div >
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
              <li  onClick={()=> { this.props.getUser(user); this.props.toggleState('usersListIsVisible', 'userIsVisible')}}>
                <h3> {user.username} </h3>
              </li>
              <li>
                  <button className='button is-danger is-small'  onClick={() => this.props.deleteUser(user, index)}>Delete</button>
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
      <div >

        {this.state.usersListIsVisible ? <p className='username' onClick={()=>this.toggleState('addUserIsVisible', 'usersListIsVisible')}>Create A Username</p> :''}
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
