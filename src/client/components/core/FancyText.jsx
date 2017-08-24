import { NormalText } from './native';
import { CompositeStat } from './CompositeStat';

export class FancyText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      context: props.context,
      text: props.text,
    };
  }

  render() {
    const uniqueFlag = ':::';
    const text = this.props.text.replace(/\{[a-zA-Z_]+\}/g, (matched) => {
      return uniqueFlag + matched + uniqueFlag;
    });
    const components = text.split(uniqueFlag);
    const context = this.props.context;
    let keyId = 1;
    return (<div>{
        components.map( text => {
          // It's a special thing, strip the braces and send with context
          if( text.indexOf('{') === 0 ) {
            const contextName = text.substring(1, text.length - 1);
            return <CompositeStat
               key={++keyId}
               contextName={contextName}
               stat={context[contextName]}/>
          }
          return <NormalText key={++keyId} text={text}/>
        })
      }</div>);
  }
}
