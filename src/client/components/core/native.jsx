import { Utils } from '../../lib/Utils';

/* React native shim */
export class View extends React.Component {
  render () {
    const style = {
      textAlign: this.props.align ? this.props.align : 'left',
    };

    return (<div style={style}>
        {this.props.title?<h4>{this.props.title}</h4>:null}
        {this.props.children}
     </div>);
  }
}

export class NormalText extends React.Component {
  render() {
    return (<span>
        {this.props.text}
        {this.props.children}
      </span>);
  }
}

export class Button extends React.Component {

  getColourClass() {
    switch(this.props.type) {
    case 'default':
      return 'btn-default';
    case 'success':
      return 'btn-success';
    }
    return 'btn-primary';
  }

  getSizeClass() {
    switch(this.props.size) {
    case 'large':
      return 'btn-lg';
    case 'small':
      return 'btn-xs';
    }

    return 'btn-sm';
  }

  getButtonClasses() {
    return [
      this.props.disabled?'disabled':'',
      this.props.className,
      'btn',
      this.getColourClass(),
      this.getSizeClass(),
    ].join(' ');
  }

  render() {
    return <div
      style={this.props.style}
      className={this.getButtonClasses()}
      onClick={this.props.onClick}>
      {this.props.children}
    </div>;
  }
}

export class IconButton extends React.Component {
  render() {
    return <Button
      disabled={this.props.disabled || false }
      type={this.props.type || 'default' }
      size={this.props.size || 'small' }
      style={{marginRight:8}}
      onClick={this.props.onClick}>
      <span
        style={{marginRight:8}}
        className={'icon glyphicon glyphicon-' + this.props.icon}
        aria-hidden='true'></span>
      {this.props.children}
    </Button>;
  }
}

export class Badge extends React.Component {
  render() {
    return <span className='badge' style={{marginLeft:6,}}>{this.props.children}</span>
  }
}

export class Header extends React.Component {
  render () {
    return (<div className='col-xs-12'>
      <h2
        style={{textAlign:this.props.align || 'left'}}
        className={this.props.className}>
        {this.props.children}
      </h2>
    </div>);
  }
}


export class ColumnView extends React.Component {
  render () {
    let children = this.props.children;
    if( !this.props.children.length ) {
      children = [this.props.children];
    }

    let style = {
      display: 'inline-block',
    };
    let className = '';
    if( this.props.isPadded === false) {
      style.width = ( 100 / children.length) + '%';
    }
    else {
      className = 'col-xs-' + parseInt(12 / children.length);
    }

    return (<div className={this.props.container===false?'':'container'}>
        {this.props.title?
          <Header>{this.props.title}</Header>
          :null}
        {children.map( child => {
          return <div
            key={Utils.createUuid()}
            className={className}
            style={style}
            >{child}
          </div>;
        })}
      </div>);
  }
}




export class RowView extends React.Component {
  render() {
    let children = this.props.children;
    if( !this.props.children.length ) {
      children = [this.props.children];
    }

    return (<div className='container'>
        {children.map( child => {
          return <div
            key={Utils.createUuid()}
            className='col-xs-12'>
            {child}
          </div>;
        })}
      </div>);
  }
}

export class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownId: Utils.createUuid(),
    };
  }
  componentDidMount() {
    // Because we can't pass this into React
    $('#' + this.state.dropDownId).data('toggle', 'dropdown');
    $('.dropdown-toggle').dropdown()
  }

  render() {

    const onSelect = this.props.onSelect;
    const children = [];
    for( let name in this.props.options) {
      children.push({
        name: name,
        value: this.props.options[name],
      });
    }

    // <li role='separator' class='divider'></li>

    return <div className='dropdown'>
      <button
        className='btn btn-default dropdown-toggle' type='button' id={this.state.dropDownId}>
        {this.props.children}
        <span className='caret'></span>
      </button>
      <ul className='dropdown-menu' ariaLabelledby={this.state.dropDownId}>
        {children.map( child => {
          return <li
              key={Utils.createUuid()}>
              <a href='#' onClick={()=>{ onSelect(child.value); }}>
                {child.name}
              </a>
            </li>;
        })}
      </ul>
    </div>;
  }
}
