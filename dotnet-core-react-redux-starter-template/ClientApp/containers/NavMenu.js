import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';

class NavMenuContainer extends React.Component {
  closeMobileMenu() {

  }

  toggleMobileMenu() {

  }

  render() {
    const { nav, toggleNav } = this.props;
    const { expanded } = nav;

    // TODO: load this from user data
    const me = {
      displayName: {}
    }
  

    return (
      <div className="navigation">
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area menu">
            <li className="name">
              <h1 className="logo"><Link to="/">Dotnet Core 2.0 React Redux Template</Link></h1>
            </li>
          </ul>
          
          <section className={classnames({ 'right-small small-nav-toggle': true, expanded })}>
            <a href="" onClick={this.toggleMobileMenu}>...</a>
          </section>

          <section className="top-bar-right">
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Menu 2</Link></li>
            </ul>
          </section>
        </nav>
        <aside className={classnames({ 'small-nav-menu': true, open: expanded })}>
          <nav className="small-nav">
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Menu 2</Link></li>
            </ul>
          </nav>
        </aside>
      </div>
    );

    // <div className={classNames({'main-nav': true, expanded})}>
    //   <div className="navbar navbar-inverse">
    //     <div className="top-bar">
    //       <div className="top-bar-left">
    //         <Link to="/">Dotnet Core 2.0 React Redux Template</Link>
    //       </div>
    //       <div className="top-bar-right">
    //         <ul className="menu">
    //           <li>
    //             <button type="button" className="button toggle-menu" onClick={toggleNav}>
    //               <i className="fa fa-bars"></i>
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="clearfix"></div>

    //     <div className="collapsible-menu">
    //       <ul className="vertical menu">
    //         <li>
    //           <NavLink exact to="/" activeClassName="active">
    //             <i className="fa fa-fw fa-lg fa-home"></i> Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to={'/counter'} activeClassName='active'>
    //             <i className="fa fa-fw fa-lg fa-graduation-cap"></i> Counter
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/fetchdata" activeClassName="active">
    //             <i className="fa fa-fw fa-lg fa-th-list"></i> Fetch data
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

  }
}

const NavMenu = connect(
  (state) => {
    console.log(state);

    return {
      nav: state.nav,
      routing: state.routing
    }
  }, {
    toggleNav: () => { alert('Toggle!'); }
  } // need to map action creators
)(NavMenuContainer);

export { NavMenu }
export default NavMenu;