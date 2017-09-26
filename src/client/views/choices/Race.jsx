
// Import native controls
import {
  ColumnView,
  RowView,
  View,
  Button,
  Badge,
  Header,
  IconButton
} from '../../components/core/native';

import { getstr } from '../../translations';

import * as Races from '../../lib/Races';

export default class RaceChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRace: null,
      raceList: [],
    };
  }

  componentDidMount() {
    Races.getAll().then( races => {
      this.setState({
        raceList: races,
      });
    });
  }

  render() {
    if( this.state.raceList.length === 0 ) {
      return <View>Loading races...</View>;
    }
    return <RowView>
      {this.state.raceList.map( race => {
        return <View key={race.name}>
          <Header>{race.name}</Header>
          {/* Will output something like "Goblin-troublesome" */}
          <View>{getstr([race.name, race.trait].join('-'))}</View>
          {/* Show the base changes */}
          <View>{getstr([race.name, 'description'].join('-'))}</View>
        </View>;
      })}
    </RowView>;
  }
}
