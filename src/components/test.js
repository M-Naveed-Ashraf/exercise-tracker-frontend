import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/test'

function UsersContainer (props) {
    useEffect(() => {
        props.fetchUsers();
    }, [])
    console.log(props.list)
  return (
    <div>
      <h2 className="text-white">Users List</h2>
      <div className="text-white">
        {
          props.list.map(user => <p>{user.title}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list : state.reducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)