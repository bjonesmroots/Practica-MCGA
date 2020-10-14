import Home from './home'
import { connect } from 'react-redux'
import { addCounter} from '../redux/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addCounter: () => dispatch(addCounter()),
    }
}

export default connect(undefined, mapDispatchToProps)(Home)