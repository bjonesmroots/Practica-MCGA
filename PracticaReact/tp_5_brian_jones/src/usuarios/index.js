import Usuarios from './usuarios'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const mapStateToProps = (store) => {
    return {
        users: store.users.lista,
        isFetchingUsers: store.users.isFetchingUsers,
        fail: store.users.fail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)