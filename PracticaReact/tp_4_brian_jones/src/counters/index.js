import Counters from './counters'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        counters: store.counters,
    }
}

export default connect(mapStateToProps)(Counters)