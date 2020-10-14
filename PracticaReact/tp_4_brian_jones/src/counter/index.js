import Counter from './counter'
import { connect } from 'react-redux'
import { deleteCounter} from '../redux/index'
import { increaseCounter} from '../redux/index'
import { decreaseCounter} from '../redux/index'

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCounter: (counter_id) => dispatch(deleteCounter(counter_id)),
        increaseCounter: (counter_id) => dispatch(increaseCounter(counter_id)),
        decreaseCounter: (counter_id) => dispatch(decreaseCounter(counter_id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Counter)