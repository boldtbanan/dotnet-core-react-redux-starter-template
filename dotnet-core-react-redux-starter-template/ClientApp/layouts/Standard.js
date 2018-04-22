import * as React from 'react';
import { NavMenu } from '../containers/NavMenu';

class Layout extends React.Component {
  render() {
    return (
      <div className="application">
        <NavMenu />

        <div className="row">
          <div className="small-9 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export { Layout };
export default Layout;
