import { ColumnView, RowView, View } from './core/native';
import { CompositeStat } from './core/CompositeStat';
import { HitpointComponent } from './core/HitpointComponent';
import { Utils } from '../lib/Utils';
import { Skills } from '../lib/fixtures/Skills';

export class CombatView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: props.character,
    };
  }

  render() {
    return (<RowView>
      <h1>Combat</h1>
      <ColumnView container={false}>
        <h3>Defenses</h3>
        <View>
          <h4>Armour Check</h4>
          AC <CompositeStat
            name='Armour Check'
            stat={this.state.character.ac}
          />
          <h4>Hitpoints</h4>
          <HitpointComponent
            character={this.state.character}/>
        </View>
        <View>
          <h4>Saves</h4>
          <View>Fortitude <CompositeStat
            name='Fortitude Save'
            stat={this.state.character.saves.fort}
            showPlusMinus={true}
          /></View>
          <View>Reflex <CompositeStat
            name='Reflex Save'
            stat={this.state.character.saves.ref}
            showPlusMinus={true}
          /></View>
          <View>Will <CompositeStat
            name='Will Save'
            stat={this.state.character.saves.will}
            showPlusMinus={true}
          /></View>
        </View>
      </ColumnView>
      <ColumnView container={false}>
        <h3>Offenses</h3>
        <View>
          <h4>Touch attacks</h4>
          Melee <CompositeStat
            name='Melee touch attack'
            stat={this.state.character.melee_touch_attack.getTotal()}
          />
          Ranged <CompositeStat
            name='Ranged touch attack'
            stat={this.state.character.ranged_touch_attack.getTotal()}
          />
        </View>
      </ColumnView>
    </RowView>);
  }
}
