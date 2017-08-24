import { ColumnView, RowView, View } from './core/native';
import { CompositeStat } from './core/CompositeStat';
import { Utils } from '../lib/Utils';
import { Skills } from '../lib/fixtures/Skills';

export class CharacterView extends React.Component {
  constructor(props) {
    super(props);

    // How many skills to keep in the "most used"
    const TOP_SKILL_COUNT = 7;

    const skills = Skills.getCharacterSkills(props.character);
    console.log(skills);
    skills.sort( (a, b) => {
      return b.bonus.getTotal() - a.bonus.getTotal();
    });
    const topSkills = skills.splice(0, TOP_SKILL_COUNT);

    this.state = {
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

  render() {
    const stats = this.getCharacterStats();

    return (<RowView>
      <h1>{this.state.character.name}</h1>
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
    </RowView>);
  }
}
