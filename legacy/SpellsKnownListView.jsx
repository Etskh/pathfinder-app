import { View } from './core/native';
import { Utils } from '../lib/Utils';
import { SpellActions } from '../actions/SpellActions';
import { SpellView } from './SpellView';

export class SpellsKnownListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spellsKnown: props.spellsKnown,
      context: props.context,
    };
  }

  componentDidMount() {
    this.state.spellsKnown.forEach( spell => {
      $('#'+spell.id ).draggable({
        cursor: 'move',
        handle: 'h4',
        revert: 'invalid',
        cursorAt: { top: 10, left: 60 },
        helper: ( event ) => {
          return $( "<div class='ui-widget-header' style='width:120px;'>" + spell.name + "</div>" );
        },
        start: () => {
          SpellActions.dispatch('startSpellDrag', {
            spell: spell
          });
        },
        stop: () => {
          SpellActions.dispatch('cancelSpellDrag', {
             // empty!
          });
        }
      });
    });
  }

  render() {
    const self = this;
    const context = self.state.context;

    return (<View title='Spells Known'>
        <ul>{
          this.state.spellsKnown.map( spell => {
            context.dc = spell.dc;
            context.caster_level = spell.caster_level;

            return <li className="known-spell" id={spell.id} key={spell.name}>
                <h4 className='drag-handle'>{spell.name}</h4>
                <SpellView
                  spell={spell}
                  context={context}
                />
              </li>;
          })
        }</ul>
      </View>);
  }
}
