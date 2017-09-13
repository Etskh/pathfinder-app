
import { Button, ColumnView, RowView, View } from './native';
import { Utils } from '../../lib/Utils';

export class ExperienceBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: props.character,
    };
  }
  render() {
    // Experience 7 -> 8
    const expAtCurrentLevel = Utils.getExpByLevel( this.state.character.hd );
    const expAtNextLevel = Utils.getExpByLevel( this.state.character.hd + 1 );

    const ratio = ( this.state.character.exp - expAtCurrentLevel) / (expAtNextLevel - expAtCurrentLevel);
    const howMuchLeft = expAtNextLevel - this.state.character.exp;

    const outerStyle = {
      width: '100%',
      position: 'relative',
      background: '#000',
    };
    const innerStyle = {
      padding: 4,
      textAlign: 'right',
      width: (ratio * 100 ) + '%',
      background: 'rgba(100,100,255,0.4)',
    };
    const totalStyle = {
      top:0,
      right: 0,
      position:'absolute',
      margin: 4,
    };

    return <div>
      Level {this.state.character.hd}
      <div style={outerStyle}>
        <div style={innerStyle}>{this.state.character.exp}</div>
        <span style={totalStyle}>{expAtNextLevel}</span>
      </div>
      <div style={{textAlign: 'center'}}>
        <span style={{marginRight: 16}}>{howMuchLeft} needed to get to level {this.state.character.hd + 1}</span>
      </div>
    </div>
  }
}
