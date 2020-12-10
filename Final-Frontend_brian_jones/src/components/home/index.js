import Productos from './home'
import { connect } from 'react-redux'
import { fetchProductos } from '../../redux'

const mapStateToProps = (store) => {
    return {
        productos: store.productos.lista,
        isFetchingProductos: store.productos.isFetchingProductos,
        fail: store.productos.fail,
        logged: store.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductos: () => dispatch(fetchProductos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos)