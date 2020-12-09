import Productos from './productos'
import { connect } from 'react-redux'
import { fetchProductos } from '../redux'

const mapStateToProps = (store) => {
    return {
        productos: store.productos.lista,
        isFetchingProductos: store.productos.isFetchingProductos,
        fail: store.productos.fail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductos: () => dispatch(fetchProductos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos)