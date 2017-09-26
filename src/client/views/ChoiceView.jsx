
// Import native controls
import {
  ColumnView,
  RowView,
  View,
  Button,
  Badge,
  Header,
  IconButton
} from '../components/core/native';

// Library functions
import { Utils } from '../lib/Utils';

// Import child views
import RaceChoice from './choices/Race';


export default class ChoiceView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choiceIndex: props.choiceIndex || 0,
      character: props.character,
      // TODO: If we don't have any other choices, then disable skip
      isSkipDisabled: true,
      isNextDisabled: true,
    };
  }

  getActiveChoice(choice) {
    // This maps the 'type' with the component
    // which we use to pick which type to draw with
    const choiceComponentMap = {
      'Race': RaceChoice,
    };

    if ( typeof choiceComponentMap[choice.type] === 'undefined' ) {
      let error = 'No known component for type ' + choice.type
      console.error(error);
      return <View>{error}</View>;
    }

    return React.createElement(choiceComponentMap[choice.type], {
      character: this.state.character
    }, null);
  }

  render() {
    const choices = _.filter(this.state.character.choices, { outcome: null });
    const choice = choices[this.state.choiceIndex];

    return <RowView>
      <ColumnView align='center'>
        <IconButton
          icon='chevron-left'
          onClick={this.props.onBack}
        >Back</IconButton>
        <Header align='center'>{choice.type}</Header>
        <IconButton
          disabled={this.state.isNextDisabled}
          icon='chevron-right'
          onClick={()=>{
            // empty
          }}
        > Next {
          choices.length > 1 ?
            <Badge>{choices.length-1}</Badge>
            : null
        }</IconButton>
      </ColumnView>
      {this.getActiveChoice(choice)}
    </RowView>
  }
}
