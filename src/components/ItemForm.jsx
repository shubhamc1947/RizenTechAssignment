import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import './ItemForm.css';

const ItemForm = () => {
  const { addItem } = useContext(ItemContext);
  const [menu_heading, setMenuHeading] = useState('');
  const [menu_name, setMenuName] = useState('');
  const [menu_under, setMenuUnder] = useState('');
  const [enable_yn, setEnableYn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ menu_heading, menu_name, menu_under, enable_yn });
    setMenuHeading('');
    setMenuName('');
    setMenuUnder('');
    setEnableYn('Y');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="item-form">
        <h2 className="mb-2">Add Menu Item</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Menu Heading"
                value={menu_heading}
                onChange={(e) => setMenuHeading(e.target.value)}
                required
              />
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Menu Name"
                value={menu_name}
                onChange={(e) => setMenuName(e.target.value)}
                required
              />
            </div>
            
          </div>
          <div className="col-md-4">
              <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Menu Under"
                value={menu_under}
                onChange={(e) => setMenuUnder(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
            <select
              className="form-control"
              value={enable_yn}
              onChange={(e) => setEnableYn(e.target.value)}
              required
            >

              <option selected value=""  >Enable</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
