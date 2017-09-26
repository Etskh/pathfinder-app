'use strict';

// Libraries
import * as _ from 'lodash';

// Utilities
import { Utils } from '../lib/Utils';
import * as Fetch from '../lib/Fetch';
import { Character } from '../lib/Character';
import { Spells } from '../lib/Spells';

// Actions
import { AppActions } from '../actions/AppActions';

// Components
import { NormalText, RowView, View, Header } from '../components/core/native';
import { TabMenu } from '../components/TabMenu';
import OptionsView from './OptionsView';
import CharacterView from './CharacterView';


export class AppView extends React.Component {
  constructor(props) {
    super(props)

    const tabs = [{
      title: 'Character',
      icon: 'user',
      isDisabled: true,
      component: CharacterView,
    }, {
      title: 'World',
      icon: 'globe',
      isDisabled: true,
    }, {
      title: 'Combat',
      icon: 'pawn',
      isDisabled: true,
    }, {
      title: 'Spells',
      icon: 'flash',
      isDisabled: true,
    }, {
      title: 'Companions',
      icon: 'tint',
      isDisabled: true,
    }, {
      title: 'Items',
      icon: 'apple',
      isDisabled: true,
    }, {
      title: 'Options',
      icon: 'cog',
      isDisabled: true,
      component: OptionsView,
    }];

    this.state = {
      isInitialized: false,
      tabs: tabs,
      character: null,
    };

    const actionContext = 'AppView';
    AppActions.subscribe('begin', actionContext, (payload) => {
      Promise.all([
        Fetch.fromLocal('activeTab'),
        Character.getActive(),
      ]).then( results => {
        let activeTab = results[0];
        let activeCharacter = results[1];
        if( !activeTab ) {
          // To make a new character
          activeTab = 'Options';
        }

        AppActions.dispatch('setCharacter', {
          character: activeCharacter,
        }).then( action => {
          AppActions.dispatch('setActiveTab', {
            activeTab: activeTab,
          });
        });

        this.setState({
          isInitialized: true,
        });
      });
    });

    AppActions.subscribe('setCharacter', actionContext, (payload) => {
      // Now set the character as state
      this.setState(prevState => {
        // Change the tabs based on what they can do:
        const tabs = prevState.tabs.map( tab => {
          // This should be everything, but if they don't spells or
          // if they dont have cohorts/familiars/companions/
          if( tab.title === 'Character' || tab.title === 'Spells' || tab.title === 'Options') {
            tab.isDisabled = false;
          }
          return tab;
        });

        // If the previously selected character is the same as the current
        // one, we shouldn't draw anything - just leave
        if(_.isEqual(prevState.character, payload.character) ) {
          return;
        }

        // Now redraw everything
        return {
          tabs: tabs,
          character: payload.character,
        };
      });

      AppActions.subscribe('setActiveTab', actionContext, (payload) => {
        this.setState({
          tabs: this.activateTab(payload.activeTab),
        });
      });
    });

    // Bind functions
    this.onSelectNewTab = this.onSelectNewTab.bind(this);
  }

  activateTab( tabTitle ) {
    const tabs = Object.assign([], this.state.tabs);

    let activeTab = _.find(tabs, { isActive: true });
    if ( activeTab && activeTab.title === tabTitle ) {
      return false;
    }

    activeTab = _.find(tabs, { isActive: true });
    if( activeTab ) {
      activeTab.isActive = false;
    }

    const newTabToActive = _.find(tabs, { title: tabTitle });
    newTabToActive.isActive = true;
    newTabToActive.isDisabled = false; // the active tab can't be disabled

    return tabs;
  }

  componentDidMount() {
    AppActions.dispatch('begin', {
      // empty
    });
  }

  getActiveTabContent(tabs) {
    const activeTab = _.find( tabs, {isActive: true});
    if( !activeTab ) {
      return (<RowView>
        <View>
          <NormalText>
            <Header align='center'>Loading...</Header>
          </NormalText>
        </View>
      </RowView>);
    }

    if( !activeTab.component ) {
      console.warn(`No tab content for tab ${activeTab.title}`);
      return null;
    }

    return React.createElement(activeTab.component, {character: this.state.character}, null);
  }

  onSelectNewTab(tabTitle) {
    AppActions.dispatch('setActiveTab', {
      activeTab: tabTitle,
      // empty
    });
  }

  render() {
    return (<View>
      <TabMenu
        tabs={this.state.tabs}
        onSelectNewTab={this.onSelectNewTab}
      />
      { this.getActiveTabContent(this.state.tabs) }
    </View>);
  }
}
