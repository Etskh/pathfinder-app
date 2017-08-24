import { Utils } from '../../lib/Utils';

/* React native shim */
export class View extends React.Component {
  render () {
    return (<div>
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
      type='default'
      style={{marginRight:8}}
      onClick={this.props.onClick}>
      <span
        style={{fontSize:'175%',}}
        className={'icon glyphicon glyphicon-' + this.props.icon}
        aria-hidden='true'></span>
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
      <h2>{this.props.children}</h2>
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
