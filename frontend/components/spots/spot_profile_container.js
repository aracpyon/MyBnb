import { fetchSpot, createSpot, updateSpot } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import SpotProfile from './spot_profile';

const mSTP = (state, ownProps) => {
  // debugger
  const spot = state.entities.spots[ownProps.match.params.spotId]
  // debugger
  return {
    spot: spot
    // host: state.entities.users[spot.host_id]
  }
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot))
  }
}

export default connect(mSTP, mDTP)(SpotProfile);