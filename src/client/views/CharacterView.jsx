
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

// Core components
import { CompositeStat } from '../components/core/CompositeStat';

// Subviews
import ChoiceView from './ChoiceView';

// Library functions
import { Utils } from '../lib/Utils';
import { Skills } from '../lib/fixtures/Skills';

export default class CharacterView extends React.Component {
  constructor(props) {
    super(props);

    // How many skills to keep in the "most used"
    const TOP_SKILL_COUNT = 7;

    const skills = Skills.getCharacterSkills(props.character);
    skills.sort( (a, b) => {
      return b.bonus.getTotal() - a.bonus.getTotal();
    });
    const topSkills = skills.splice(0, TOP_SKILL_COUNT);

    this.state = {
      screen: null,
      character: props.character,
      topSkills: topSkills,
      skills: skills,
    };
  }

  getCharacterStats() {
    const stats = [];
    const statNames = {
      'str': 'Strength',
      'dex': 'Dexterity',
      'con': 'Constitution',
      'int': 'Intelligence',
      'wis': 'Wisdom',
      'cha': 'Charisma',
    };
    for( const stat in this.state.character.stats) {
      stats.push({
        name: statNames[stat],
        value: this.state.character.stats[stat],
      });
    }
    return stats;
  }

  renderInfo() {
    let advancement = null;
    let outstandingChoices = _.filter(this.state.character.choices, { outcome: null });
    if( outstandingChoices.length > 0 ) {
      advancement = (<View align='center'>
        <Button
          size='large'
          onClick={()=>{ this.setState({ screen: 'advancement'})}}
          type='success'>
          Advancement Choices
          <Badge>{outstandingChoices.length}</Badge>
        </Button>
      </View>);
    }

    return (<RowView>
      <h1>{this.state.character.name}</h1>
      {advancement}
      <ColumnView container={false}>
        <View>
          <h2>Stats</h2>
          <table>
            <tbody>
              <tr>
                <td>Base attack bonus:</td><td><CompositeStat
                  contextName='Base attack bonus'
                  stat={this.state.character.base_attack_bonus}
                /></td>
              </tr>
              {this.getCharacterStats().map( stat => {
                return <tr key={Utils.createUuid()}>
                    <td>{stat.name}</td>
                    <td><CompositeStat
                      contextName={stat.name}
                      stat={stat.value}
                    /></td>
                  </tr>;
              })}
            </tbody>
          </table>
        </View>
        <View>
          <h2>Important Skills</h2>
          <table>
            <tbody>{
              this.state.topSkills.map( skill => {
                return <tr key={Utils.createUuid()}>
                  <td>{skill.name}</td>
                  <td><CompositeStat
                    showPlusMinus={true}
                    contextName={skill.name}
                    stat={skill.bonus}
                  /></td>
                </tr>
              })
            }</tbody>
          </table>
        </View>
      </ColumnView>
      <View>
        <h2>Other Skills</h2>
        <table>
          <tbody>{
            this.state.skills.map( skill => {
              return <tr key={Utils.createUuid()}>
                <td>{skill.name}</td>
                <td><CompositeStat
                  showPlusMinus={true}
                  contextName={skill.name}
                  stat={skill.bonus}
                /></td>
              </tr>
            })
          }</tbody>
        </table>
      </View>
    </RowView>);
  }

  render() {
    switch( this.state.screen) {
    case 'advancement':
      return <ChoiceView
        character={this.state.character}
        onBack={()=> {
          this.setState({ screen: null });
        }}
      />
    }
    return this.renderInfo();
  }
}
