import { Utils } from '../../lib/Utils';
import { FancyText } from './FancyText';
import { ButtonModal } from './ButtonModal'

export class UnitModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: props.unit,
      text: props.text,
      context: props.context,
    };
  }

  render() {
    const title = this.state.unit.getType() +': ' + this.state.unit.toString();
    const content = <div>{
      this.state.unit.getAll().map(unit => {
        return (<FancyText
          key={unit[1]}
          text={unit[0] + ' ' + unit[1]}
          context={this.state.context}
        />);
      })
    }</div>;
    const footer = 'Parsed from "' + this.state.unit.getOriginalString() + '"';
    const modalTarget = "modal-unit-" + Utils.createUUID();

    return <ButtonModal
      className='unit-stat'
      text={this.state.unit.toString()}
      title={title}
      content={content}
      footer={footer}
    />
  }
}
