import {
  ColumnView,
  RowView,
  View,
  Button,
  Badge,
  NormalText,
  IconButton,
  Header,
} from './core/native';
import { ButtonModal, closeModal } from './core/ButtonModal';
import { Utils } from '../lib/Utils';
import { SpellsKnownListView } from './SpellsKnownListView';
import { SpellSlotList } from './SpellSlotList';
import { SpellView } from './SpellView';

export class SpellsView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      spellsKnown: props.spellsKnown,
      spellSlots: props.spellSlots,
      context: props.context,
      page: props.page?props.page:'menu',
    };

    this.renderMenu = this.renderMenu.bind(this);
    this.setPage = this.setPage.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({
      page: page,
    });
  }

  renderBackButton(title) {
    return <Header>
        <IconButton
          icon='chevron-left'
          onClick={()=>{this.setPage('menu')}}
        />
        {title}
      </Header>;
  }

  castSlot(slot) {
    console.log('Casting spell: ', slot.spell);

    // TODO: close the dialog
    closeModal(() => {
      // 0 level spells are not exhausted
      if( slot.spell.level === 0 ) {
        return; // do nothing!
      }

      this.setState( prevState => {
        const foundSlot = _.find(prevState.spellSlots, { id: slot.id });
        if( ! foundSlot ) {
          console.log('Couldnt find spell slot with id: ', slot.id);
          console.log(slot);
        }
        console.log('Setting spell slot to used');
        foundSlot.isUsed = true;

        return {
          spellSlots: prevState.spellSlots,
        };
      });
    });
  }

  renderCastSpells() {
    const spellLevels = [];
    this.state.spellSlots.forEach( slot => {
      // No spell? NO CARE!
      if( !slot.spell ) {
        return;
      }

      // If we don't have an array for that level, create one
      if( typeof spellLevels[slot.spell.level] === 'undefined') {
        spellLevels[slot.spell.level] = [];
      }

      spellLevels[slot.spell.level].push(slot);
    });

    return (<RowView>
      {this.renderBackButton('Cast Spells')}
      {spellLevels.map( spellLevel => {
        // Make sure we have at least one
        if( !spellLevel[0] ) {
          return null;
        }

        const level = spellLevel[0].spell.level;
        return <View key={'level-'+level}>
          <Header>Level {level}</Header>
          {spellLevel.map( slot => {
            const spell = slot.spell;

            const spellView = <SpellView
              spell={spell}
              context={this.state.context}
            />
            const castButton = <Button
              size='large'
              type={spell.level==0?'success':'primary'}
              onClick={()=>{this.castSlot(slot)}}
            >Cast</Button>;

            console.log('Rendering prepared slot ', slot);

            return <ButtonModal
              disabled={slot.isUsed}
              key={Utils.createUuid()}
              text={spell.name}
              title={spell.name}
              content={spellView}
              footer={castButton}
            />;
          })}
        </View>
      })}
    </RowView>);
  }

  renderPrepareSpells() {
    return (<RowView>
      {this.renderBackButton('Prepare Spells')}
      <ColumnView container={false}>
        <SpellSlotList
          spellSlots={this.state.spellSlots}
          spellsKnown={this.state.spellsKnown}
        />
        <SpellsKnownListView
          context={this.state.context}
          spellsKnown={this.state.spellsKnown}
        />
      </ColumnView>
    </RowView>);
  }

  renderMenu() {
    let unpreparedSlotCount = 0;
    let unusedSpellsCount = 0;
    let spellsToLearn = 0;
    this.state.spellSlots.forEach(slot => {
      if( !slot.spell ) {
        // If there isn't a spell, it's unprepared
        unpreparedSlotCount++;
      }
      else if( !slot.isUsed ) {
        // Otherwise, there is a spell, increment unused spells
        // if we haven't used it yet!
        unusedSpellsCount++;
      }
    });

    return (<RowView>
      <h1>Spells</h1>
      <Button size='large' onClick={()=>{this.setPage('prepare')}}>
        <NormalText>Prepare spells</NormalText>
        <Badge>{unpreparedSlotCount} open slots</Badge>
      </Button>
      <Button size='large' onClick={()=>{this.setPage('cast')}}>
        <NormalText>Cast Spells</NormalText>
        <Badge>{unusedSpellsCount} ready</Badge>
      </Button>
      {/* RE-enable when... you know. We're making it
        <Button size='large'>
        <NormalText>Learn Spells</NormalText>
        <Badge></Badge>
      </Button>
      */}
    </RowView>);
  }

  render() {
    switch(this.state.page) {
    case 'prepare':
      return this.renderPrepareSpells();
    case 'cast':
      return this.renderCastSpells();
    case 'menu':
      return this.renderMenu();
    }
    return this.renderMenu();
  }
}
