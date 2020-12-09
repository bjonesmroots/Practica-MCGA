import Producto from './producto'
import { connect } from 'react-redux'
import { delProducto} from '../redux/index'

const mapDispatchToProps = (dispatch) => {
    return {        
        borrarProducto: (_id) => dispatch(delProducto(_id))
    }
}

export default connect(undefined, mapDispatchToProps)(Producto)