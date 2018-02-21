import * as React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div className="application">
          <div className="small-3 columns">
            Nav Menu
          </div>
          <div className="small-9 columns">
            {this.props.children}
          </div>
      </div>
    )
  }
}

export { Layout };
export default Layout;
