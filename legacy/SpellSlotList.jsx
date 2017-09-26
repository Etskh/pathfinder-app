import { View } from './core/native';
import { Utils } from '../lib/Utils';
import { SpellActions } from '../actions/SpellActions';

const _ = require('lodash');

const actionContext = 'SpellSlotList';

export class SpellSlotList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spellSlots: props.spellSlots,
      narrowSlotsBySpell: null,
    };

    SpellActions.subscribe('startSpellDrag', actionContext, (payload) => {
      this.narrowSlotsBySpell(payload);
    });
    SpellActions.subscribe('selectSpellSlot', actionContext, (payload) => {
      this.prepareSpell(payload);
    });
    SpellActions.subscribe('cancelSpellDrag', actionContext, (payload) => {
      this.setState({
        narrowSlotsBySpell: null,
      });
    });


    this.init = () => {
      const slots = this.state.spellSlots;
      $('.spell-slot').droppable({
        drop: function( event, ui ) {
          const spellId = ui.draggable.attr('id');
          const slot = _.find(slots, {id: this.id });
          const payload = {
            slot: slot,
            spellId: spellId,
          };
          SpellActions.dispatch('selectSpellSlot', payload);
        },
      });
    };
    this.init = this.init.bind(this);
  }

  componentDidUpdate() {
    this.init();
  }
  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    SpellActions.unsubscribe('startSpellDrag', actionContext);
    SpellActions.unsubscribe('selectSpellSlot', actionContext);
    SpellActions.unsubscribe('cancelSpellDrag', actionContext);
  }

  narrowSlotsBySpell(actionPayload) {
    this.setState( prevState => {
      const spell = actionPayload.spell;

      // sort the list based on filled-ness
      prevState.spellSlots.sort( (a, b) => {
        // If the active spell is being dragged around, show
        // the smallest spell slot possible at the top
        let levelOrder = a.constraints.atMost.level - b.constraints.atMost.level;

        const filledOrder = (a.spell?100:0) - (b.spell?100:0);
        return levelOrder + filledOrder;
      });

      return {
        spellSlots: prevState.spellSlots,
        narrowSlotsBySpell: spell,
      };
    });
  }

  prepareSpell(payload) {
    console.log('saving the spell X as the slot Y', payload);
    this.setState( prevState => {
      const slot = _.find(prevState.spellSlots, {id: payload.slot.id });
      slot.spell = _.find(this.props.spellsKnown, { id: payload.spellId });

      //console.log(prevState.spellSlots);
      return {
        spellSlots: prevState.spellSlots,
      };
    });
  }

  renderSlot( slot ) {
    const classes = [
      'spell-slot',
      slot.spell?'filled':null,
      slot.constraints.has.school?'school-specific':null,
    ].join(' ');

    return <li className={classes} id={slot.id} key={slot.id}>
      <div className='spell-name'>{slot.spell?<span>{slot.spell.name}</span>:<span>&nbsp;</span>}</div>
      <div className='level'>Level {slot.constraints.atMost.level }</div>
      <div className='school-restriction'>{slot.constraints.has.school?
      slot.constraints.has.school:'any school'}</div>
    </li>
  }

  render() {
    const narrowBySpell = this.state.narrowSlotsBySpell;

    return (<View title='Daily Slots'>
      <ul>{
        this.state.spellSlots.map( slot => {
          // If the spell doens't pass the constraints of the slot
          // then don't show the slot for the spell to drop into
          if( narrowBySpell !== null) {
            const hasPassed = slot.constraints.checkObject( narrowBySpell );
            if( !hasPassed ) {
              return null;
            }
          }

          return this.renderSlot(slot);
        })
      }</ul>
    </View>);
  }
}
