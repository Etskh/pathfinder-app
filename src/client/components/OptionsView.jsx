import { ColumnView, RowView, View, IconButton, DropDown } from './core/native';
import { Utils } from '../lib/Utils';
import { Character } from '../lib/Character';


export class OptionsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: this.props.character,
      characterOptions: [],
    };
  }

  componentDidMount() {
    console.log('Check for all characters');
    Character.getAll().then( characters => {
      this.setState({
        characterOptions: characters,
      });
    });
  }

  onCreateCharacter() {
    console.log('We\'re created ');
  }

  onSetCharacter( character ) {
    Character.setActive(character).then( character => {
      this.props.onSetCharacter(character);
    });
  }

  render() {
    const characterChoices = {};
    this.state.characterOptions.forEach( character => {
      characterChoices[ character.name ] = character;
    });

    return (<RowView>
      <h1>Options</h1>
      <View>
        Current character: {this.state.character?this.state.character.name:'None'}
      </View>
      <View>
        <IconButton
          icon='plus'
          type='success'
          size='medium'
          onClick={this.onCreateCharacter}>
          Create Character
        </IconButton>
      </View>
      <View>
        <DropDown
          onSelect={(character)=>{
            this.onSetCharacter(character);
          }}
          options={characterChoices}>
          Select existing... </DropDown>
      </View>
    </RowView>);
  }
}
