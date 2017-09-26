
// Libraries
import * as _ from 'lodash';

// Utilities
import { Utils } from '../lib/Utils';
import { Character } from '../lib/Character';

// Actions
import { AppActions } from '../actions/AppActions';

// UI
import { ColumnView, RowView, View, IconButton, DropDown } from '../components/core/native';


export default class OptionsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: this.props.character,
      characterOptions: [],
    };

    this.onSelectCharacter = this.onSelectCharacter.bind(this);
  }

  componentDidMount() {
    Character.getAll().then( characters => {
      this.setState({
        characterOptions: characters,
      })
    })
  }

  onSelectCharacter(event) {
    // Get teh selected character ID and then return it
    const selectedCharacter = _.find(this.state.characterOptions, {
      id: parseInt(event.target.value)
    });
    console.log('Selected character: ', selectedCharacter);
    AppActions.dispatch('setCharacter', {
      character: selectedCharacter,
    });
    return true;
  }

  onCreateCharacter(event) {
    // TODO: Create the character
    console.log('Creating new character...');
  }

  render() {
    console.log('Redrawing');
    const currentCharacter = this.state.character;
    return (<RowView>
      <h1>Options</h1>
      <View>
        <select
          style={{
            color:'#000',
            display:'block',
            margin:8,
            padding:4
          }}
          onChange={this.onSelectCharacter}
          defaultValue={this.state.character.id}>
          { this.state.characterOptions.map( character => {
            return <option
              key={character.id}
              value={character.id}>
              {character.name}
            </option>;
          }) }
        </select>
        <IconButton
          icon='plus'
          type='default'
          size='medium'
          onClick={this.onCreateCharacter}>
          Create Character
        </IconButton>
      </View>
    </RowView>);
  }
}
