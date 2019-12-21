import { h, Component } from "preact";
import { connect } from "redux-zero/preact";

import { getDataChangers } from "../application-model/changers";
import { transformStoreDataToUIData } from "../application-model/transformers";
import "./style.css";

class WeatherInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredLocation: ""
    };

    this.onLocationInput = this.onLocationInput.bind(this);
    this.onSubmitLocation = this.onSubmitLocation.bind(this);
  }

  onLocationInput(ev) {
    this.setState({
      enteredLocation: ev.target.value
    })
  }

  onSubmitLocation() {
    this.props.onSetLocation(this.state.enteredLocation)
  }

  render() {
    return <div><input onChange={this.onLocationInput} placeholder="Enter city name"></input><button onClick={this.onSubmitLocation}>Show me the Weather!</button></div>
  }
}


class WeatherView extends Component {
  render({ location, doSetLocation }) {
    return (
      <div>
        <WeatherInput onSetLocation={doSetLocation} />
        <p>{location}</p>
      </div>
    );
  }
}

export default connect(
  transformStoreDataToUIData,
  getDataChangers
)(WeatherView);
 