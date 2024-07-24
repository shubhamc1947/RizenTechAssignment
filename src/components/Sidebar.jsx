import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import { FiChevronDown } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const { items } = useContext(ItemContext);
  const [menuUnderItems, setMenuUnderItems] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const groupByMenuUnder = items.reduce((acc, item) => {
      if (item.enable_yn === "Y") {
        if (!acc[item.menu_under]) {
          acc[item.menu_under] = [];
        }
        acc[item.menu_under].push(item);
      }
      return acc;
    }, {});
    setMenuUnderItems(groupByMenuUnder);
  }, [items]);

  const handleMenuUnderClick = (menuUnder) => {
    setOpenDropdown(openDropdown === menuUnder ? null : menuUnder);
  };

  return (
    <div className="sidebar">
      <h2>Navbar</h2>
      <ul>
        {Object.keys(menuUnderItems).map(menuUnder => (
          <li key={menuUnder}>
            <span onClick={() => handleMenuUnderClick(menuUnder)}>
              {menuUnder}
              <FiChevronDown className={`arrow ${openDropdown === menuUnder ? 'up' : 'down'}`} />
            </span>
            <ul className={`dropdown ${openDropdown === menuUnder ? 'open' : ''}`}>
              {menuUnderItems[menuUnder].map(item => (
                <li key={item.menuid}>
                  <Link to={`/info/${item.menuid}`} className="nav-link">
                    {item.menu_heading}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
