import Formulario from './formulario'
import { connect } from 'react-redux'
import { addProducto} from '../../redux/index'
import { editProducto} from '../../redux/index'
import {reduxForm} from 'redux-form'


const onSubmit = (values, dispatch) => {
    if (!values._id) {
        dispatch(addProducto(values.nombre, values.descripcion, values.precio))
    } else {
        dispatch(editProducto(values._id, values.nombre, values.descripcion, values.precio))
    }
}

const reduxFormConfig = {
    form: 'formProducto',
    onSubmit
}

export default connect(undefined)(reduxForm(reduxFormConfig)(Formulario))