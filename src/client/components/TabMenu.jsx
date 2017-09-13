import { View, ColumnView } from './core/native';
import { getstr } from '../translations';

class TabButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.tab.title,
      icon: props.tab.icon,
      isActive: props.tab.isActive,
      isDisabled: props.tab.isDisabled ? true : false,
    }
  }

  render() {
    return <div
      className={[
        'tab-button',
        (this.state.isActive ? 'active' : 'inactive' ),
        (this.state.isDisabled ? 'disabled' : ''),
      ].join(' ')}
      onClick={()=>{
        if ( ! this.state.isDisabled ) {
          this.props.onSelect(this.state.title);
        }
      }}>
      {this.state.icon?<div>
        <span
          className={'icon glyphicon glyphicon-' + this.state.icon}
          aria-hidden='true'></span>
      </div>:null}
      <View align='center'>{getstr(this.state.title)}</View>
    </div>
  }
}

export class TabMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: props.tabs,
    };
  }

  render () {
    const onSelectNewTab = this.props.onSelectNewTab;
    return (<ColumnView isPadded={false}>
      {this.state.tabs.map( tab => {
        return <TabButton
          key={tab.title}
          tab={tab}
          onSelect={onSelectNewTab}
        />;
      })}
    </ColumnView>);
  }
}
