import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    }
    else {
        console.log('Users me arha data', users)
        return (
            <div style={userStyle}>
                {users && users.length > 0 &&
                    users.map(user =>
                        <UserItem key={user.id} user={user} />
                    )}
            </div>
        )
    }
}

Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,32%)',
    gridGap: '1rem',
    marginLeft: '25px'
    // border: 'solid 3px red'
}

export default Users
