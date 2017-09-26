import { ColumnView, RowView, View, Button, Badge } from './core/native';
import { CompositeStat } from './core/CompositeStat';
import { HitpointComponent } from './core/HitpointComponent';
import { Utils } from '../lib/Utils';
import { Skills } from '../lib/fixtures/Skills';
import * as _ from 'lodash';

export class WorldView extends React.Component {
  constructor(props) {
    super(props);

    const skills = Skills.getCharacterSkills(props.character);
    let actions = [];
    skills.forEach( skill => {
      if( skill.actions ) {
        actions = actions.concat(_.filter(skill.actions, { isWorld: true }));
      }
    });

    this.state = {
      character: props.character,
      skills: Skills.getCharacterSkills(props.character),
    };
  }

  render() {
    return (<RowView>
      <h1>World</h1>
      <h2>Skill Abilities</h2>
      <div>{ this.state.skills.map( skill => {
        if( !skill.actions ) {
          return null;
        }
        return <div key={Utils.createUuid()}>
          <h4>{skill.name}</h4>
          {
            skill.actions.map( action => {
              return <Button key={Utils.createUuid()}>{action.name} <Badge>DC {action.checkDc}</Badge></Button>;
            })
          }
        </div>
      })}</div>
    </RowView>);
  }
}
