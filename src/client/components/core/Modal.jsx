import { Utils } from '../../lib/Utils';
import { FancyText } from './FancyText';
import { Button, IconButton } from './native';

let _$openModal = null;

export const closeModal = ( callback ) => {
  if( !_$openModal ) {
    return console.error('No open modal, you crazy guy!');
  }
  _$openModal.modal('hide');

  // If we were given a callback, fire it when the dialog is closed
  if( callback ) {
    _$openModal.on('hidden.bs.modal', callback);
  }
  _$openModal = null;
}

export class ButtonModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      content: props.content,
      footer: props.footer,
      modalSize: props.size=='large'?'modal-lg':'modal-sm',
      modalId: 'button-modal-' + Utils.createUuid(),
    };
  }

  render() {
    const isDisabled = this.state.disabled;
    return (<span className="ButtonModal">
      <Button
        disabled={this.state.disabled}
        className={this.state.className}
        size={this.state.buttonSize}
        onClick={()=>{
          if( !isDisabled ) {
            _$openModal = $('#' + this.state.modalId);
            _$openModal.modal('toggle');
          }
        }}>
        {this.state.text}
      </Button>
      <div
        id={this.state.modalId}
        className={["modal", "fade"].join(' ')}
        tabIndex="-1"
        role="dialog">
        <div
            className={['modal-dialog', this.modalSize].join(' ')}
            role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title">
                {this.state.title}
              </h3>
            </div>
            <div className="modal-body container">
              {this.state.content}
            </div>
            <div className="modal-footer">
              {this.state.footer}
            </div>
          </div>
        </div>
      </div>
    </span>);
  }
}
