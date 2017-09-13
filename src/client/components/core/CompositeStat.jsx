import { ButtonModal } from './ButtonModal';

export class CompositeStat extends React.Component {
  constructor(props) {
    super(props);

    if( ! props.stat ){
      throw new Error(JSON.stringify({
        error: 'No stat field in CompositeStat',
        props: props,
      }));
    }

    this.state = {
      showPlusMinus: props.showPlusMinus,
      contextName: props.contextName || props.name,
      stat: props.stat,
    };
  }

  render() {
    const getTotal = this.state.stat.getTotal;
    const number = getTotal ? getTotal() : this.state.stat;
    if( !getTotal) {
      return <span className='composite-stat muted'>{number}</span>;
    }

    const title = this.state.contextName + ' ' + number;
    const stats = this.state.stat.getStats();
    var content = <ul>{
      Object.keys(stats).map( stat => {
        return <li key={stat}>{stat}: {stats[stat]}</li>
      })
    }</ul>;
    const plusMinus = (number===0 || !this.state.showPlusMinus) ? '' : number > 0 ? '+' : '-';
    const text = <span>
      <span style={{fontSize:'80%',}}>{plusMinus}</span>
      <span>{Math.abs(number)}</span>
    </span>;

    return <ButtonModal
      className='composite-stat'
      text={text}
      content={content}
      title={title}
      footer={this.state.contextName}
    />;
  }
}
