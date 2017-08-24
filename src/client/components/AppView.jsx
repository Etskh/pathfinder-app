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
import { TopSectionMenu } from './TopSectionMenu';

export class AppView extends React.Component {
  constructor(props) {
    super(props)

    const tabs = [{
      title: 'Character',
      icon: 'user',
      isActive: true,
    }, {
      title: 'World',
      icon: 'globe',
    }, {
      title: 'Combat',
      icon: 'pawn',
    }, {
      title: 'Spells',
      icon: 'flash',
    }, {
      title: 'Items',
      icon: 'piggy-bank',
    }, {
      title: 'Options',
      icon: 'cog',
    }];

    this.state = {
      isInitialized: false,
      tabs: tabs,
    };

    this.onSelectNewTab = this.onSelectNewTab.bind(this);
  }

  componentDidMount() {
    Promise.all([
      Character.getByName('pig'),
      Spells.getAll(),
    ]).then( results => {
      const character = results[0];
      const spellList = results[1];

      this.setState({
        isInitialized: true,
        spellsKnown: Utils.getKnownSpells(spellList, character),
        spellSlots: Utils.getAvailableSlots(character),
        context: Utils.createContext(character),
        character: character,
        spellList: spellList,
      });
    });
  }

  getActiveTab(tabs) {
    const activeTab = _.find(tabs, {isActive: true });
    if( !activeTab ) {
      return null;
    }

    switch(activeTab.title) {
    case 'Spells':
      return <SpellsView
        spellSlots={this.state.spellSlots}
        spellsKnown={this.state.spellsKnown}
        context={this.state.context}
      />;
    case 'Character':
      return <CharacterView
        character={this.state.character}
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
      <TopSectionMenu
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
