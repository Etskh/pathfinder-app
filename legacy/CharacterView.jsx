import { ColumnView, RowView, View, Button, Badge, Header, IconButton } from './core/native';
import { CompositeStat } from './core/CompositeStat';
import { ExperienceBar } from './core/ExperienceBar';
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

  renderStat(key, score) {
    return (<tr key={key}>
        <td>{key}</td>
        <td>{Utils.getMod(score)}</td>
      </tr>);
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

  // TODO: generalise this
  renderBackButton(title) {
    return <Header>
        <IconButton
          icon='chevron-left'
          onClick={()=>{
            this.setState({ screen: null })
          }}
        />
        {title}
      </Header>;
  }

  renderInfo() {
    const stats = this.getCharacterStats();

    let advancement = null;
    /*if( this.state.character.outstandingChoices.length > 0 ) {
      let choices = this.state.character.outstandingChoices;
      advancement = <View align='center'>
        <Button
          size='large'
          onClick={()=>{ this.setState({ screen: 'advancement'})}}
          type='success'>
          Advancement Choices
          <Badge>{choices.length}</Badge>
        </Button>
      </View>;
    }*/

    return (<RowView>
      <h1>{this.state.character.name}</h1>
      {advancement}
      {/*<ExperienceBar character={this.state.character}/>*/}
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
              {stats.map( stat => {
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

  renderChoice( choice ) {
    return <View>
      <Header className={[
        'advancement',
        choice.isRequired?'required':'',
      ].join(' ')}>{choice.type}</Header>
      <div>{choice.choices}</div>
    </View>;
  }

  renderAdvancements() {

    const choices = this.state.character.outstandingChoices;
    const choiceRenderer = this.renderChoice;
    return <RowView>
      {this.renderBackButton('Advancement Choices')}
      <View>
        {choices.map( choice => {
          return choiceRenderer(choice);
        })}
      </View>
    </RowView>
  }

  render() {
    switch( this.state.screen) {
    case 'advancement':
      return this.renderAdvancements(this.state.advacement);
    }
    return this.renderInfo();
  }
}
