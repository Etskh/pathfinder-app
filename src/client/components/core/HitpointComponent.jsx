

export class HitpointComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: props.character,
    };
  }

  showHpWindow() {
    console.log('showing window now');
  }

  render() {
    const total = this.state.character.hp.getTotal();
    const current = this.state.character.hitpoints.current;
    const nonlethal = this.state.character.hitpoints.nonlethal;
    const colours = [
      parseInt(200 * ((total - current) / total)),
      parseInt(200 * (current / total)),
      40,
    ];
    const style = {
      borderRadius: 4,
      position: 'relative',
      padding: 0,
      textShadow: '#000 0px 0px 4px',
      width: 100,
      height: 30,
      cursor: 'pointer',
      overflow: 'hidden',
      display: 'inline-block',
      border: 'solid 1px #555',
    };
    const nonlethalStyle = {
      paddingTop: 4,
      top: 0,
      position: 'absolute',
      height: '100%',
      width: ( 100 * nonlethal / total ) + '%',
      backgroundColor: 'rgba(100,100,100,0.9)',
    };
    const lethalStyle = {
      top: 0,
      backgroundColor: 'rgb('+ colours.join(',') +')',
      left: ( 100 * nonlethal / total ) + '%',
      position: 'absolute',
      height: '100%',
      width: ( 100 * (current - nonlethal) / total ) + '%',
    };
    const centerTextStyle = {
      fontSize: '140%',
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      top: 0,
    };

    return <div>
      <div style={style} onClick={()=>{ this.showHpWindow() }}>
        <div style={nonlethalStyle}>{(nonlethal/total > 0.2)?nonlethal:<span>&nbsp;</span>}</div>
        <div style={lethalStyle}>&nbsp;</div>
        <div style={centerTextStyle}>{ current - nonlethal }</div>
      </div>
      <span> /{total}</span>
    </div>;
  }
}
