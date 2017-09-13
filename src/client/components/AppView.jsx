'use strict';

// Libraries
const _ = require('lodash');

// Utilities
import { Utils } from '../lib/Utils';
import { Character } from '../lib/Character';
import { Spells } from '../lib/Spells';

// Components
import { NormalText, View } from './core/native';
import { SpellsView } from './SpellsView';
import { CharacterView } from './CharacterView';
import { CombatView } from './CombatView';
import { WorldView } from './WorldView';
import { OptionsView } from './OptionsView';
import { TabMenu } from './TabMenu';

export class AppView extends React.Component {
  constructor(props) {
    super(props)

    const tabs = [{
      title: 'Character',
      icon: 'user',
    }, {
      title: 'World',
      icon: 'globe',
      isActive: true,
    }, {
      title: 'Combat',
      icon: 'pawn',
    }, {
      title: 'Spells',
      icon: 'flash',
    }, {
      /*title: 'Companions',
      icon: 'leaf',
    }, {
      title: 'Items',
      icon: 'apple',
    }, {*/
      title: 'Options',
      icon: 'cog',
    }];

    this.state = {
      isInitialized: false,
      tabs: tabs,
    };

    this.onSelectNewTab = this.onSelectNewTab.bind(this);
    this.onSetCharacter = this.onSetCharacter.bind(this);
  }

  componentDidMount() {
    Character.getActive().then( character => {
      this.loadCharacter(character);
    });
  }

  loadCharacter(character) {
    console.log('Loading character');
    console.log(character);
    if( ! character ) {
      // Make options the only possible tab, and go to it
      // Then we can add a character
      const tabs = [];
      this.state.tabs.forEach( tab => {
        if( tab.title === 'Options' ) {
          tab.isActive = true;
        }
        else {
          tab.isDisabled = true;
          tab.isActive = false;
        }
        tabs.push(tab);
      });

      return this.setState({
        isInitialized: true,
        spellsKnown: [],
        spellSlots: [],
        context: {},
        character: null,
        spellList: [],
        tabs: tabs,
      });
    }

    // TODO: Get character as normal
    Spells.getAll().then( spellList => {
      const isRequiredAdvancements =
        _.find(character.outstandingChoices, {isRequired: true}) ? true : false;

      const tabs = [];
      this.state.tabs.forEach( tab => {
        if( isRequiredAdvancements &&
            tab.title !== 'Character' && tab.title !== 'Options' ) {
          tab.isDisabled = true;
        }
        tabs.push(tab);
      });

      this.setState({
        isInitialized: true,
        spellsKnown: Utils.getKnownSpells(spellList, character),
        spellSlots: Utils.getAvailableSlots(character),
        context: Utils.createContext(character),
        character: character,
        spellList: spellList,
        tabs: isRequiredAdvancements ? tabs : this.state.tabs,
      });
    });

  /*Promise.all([
    Character.getByName('Pig'),
    Spells.getAll(),
  ]).then( results => {
    const character = results[0];
    const spellList = results[1];

    const isRequiredAdvancements =
      _.find(character.outstandingChoices, {isRequired: true}) ? true : false;

    const tabs = [];
    this.state.tabs.forEach( tab => {
      if( isRequiredAdvancements &&
          tab.title !== 'Character' && tab.title !== 'Options' ) {
        tab.isDisabled = true;
      }
      tabs.push(tab);
    });

    this.setState({
      isInitialized: true,
      spellsKnown: Utils.getKnownSpells(spellList, character),
      spellSlots: Utils.getAvailableSlots(character),
      context: Utils.createContext(character),
      character: character,
      spellList: spellList,
      tabs: isRequiredAdvancements ? tabs : this.state.tabs,
    });
  });*/
  }

  onSetCharacter(character) {
    console.log('Setting character in on set character');
    this.setState({
      character: character,
    });
    // Now call load character because the render isn't the
    // important bit
    this.loadCharacter(character);
  }

  getActiveTab(tabs) {
    const activeTab = _.find(tabs, {isActive: true });
    if( !activeTab ) {
      return null;
    }

    switch(activeTab.title) {
    case 'Character':
      return <CharacterView
        character={this.state.character}
      />;
    case 'World':
      return <WorldView
        character={this.state.character}
      />;
    case 'Combat':
      return <CombatView
        character={this.state.character}
      />;
    case 'Spells':
      return <SpellsView
        spellSlots={this.state.spellSlots}
        spellsKnown={this.state.spellsKnown}
        context={this.state.context}
      />;
    case 'Options':
      return <OptionsView
        onSetCharacter={this.onSetCharacter}
      />;
    }

    console.warn(`No tab content for tab ${activeTab.title}`);
    return null;
  }

  onSelectNewTab(tabTitle) {
    const activeTab = _.find(this.state.tabs, { isActive: true });
    if ( activeTab && activeTab.title === tabTitle ) {
      return false;
    }

    this.setState( prevState => {
      const activeTab = _.find(prevState.tabs, { isActive: true });
      if( activeTab ) {
        activeTab.isActive = false;
      }

      const newTabToActive = _.find(prevState.tabs, { title: tabTitle });
      newTabToActive.isActive = true;

      return {
        tabs: prevState.tabs,
      };
    });
  }

  render() {
    return (<View>
      <TabMenu
        tabs={this.state.tabs}
        onSelectNewTab={this.onSelectNewTab}
      />
      {this.state.isInitialized ?
        this.getActiveTab(this.state.tabs)
        :
        <NormalText>
          Loading...
        </NormalText>}
    </View>);
  }
}
