import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import { BsGrid1X2Fill, BsMenuButtonWideFill } from 'react-icons/bs';



function Sidebar({ openSidebarToggle }) {
  return (
    <aside id="sidebar" className="sidebar">
      {/* <div className='sidebar-title'> */}
      {/*   <div className='sidebar-brand'>MIDAS</div> */}
      {/* </div> */}
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'><Link to="/news"><FaNewspaper className='icon' /> News</Link></li>
        <li className='sidebar-list-item'><Link to="/market"><FaChartLine className='icon' /> Market</Link></li>
        <li className='sidebar-list-item'><Link to="/backtest"><BsGrid1X2Fill className='icon' /> Backtest</Link></li>
        <li className='sidebar-list-item'><Link to="/live"><BsMenuButtonWideFill className='icon' /> Live</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
