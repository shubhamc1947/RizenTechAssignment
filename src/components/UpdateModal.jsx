import React, { useState, useContext, useEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './UpdateModal.css';
import { FaTimes } from 'react-icons/fa'; // Import the close icon

const UpdateModal = ({ isOpen, onClose, selectedItem }) => {
  const { updateItem } = useContext(ItemContext);
  const [menu_heading, setMenuHeading] = useState('');
  const [menuid, setMenuId] = useState('');
  const [menu_name, setMenuName] = useState('');
  const [menu_under, setMenuUnder] = useState('');
  const [enable_yn, setEnableYn] = useState('Y');

  useEffect(() => {
    if (selectedItem) {
      setMenuId(selectedItem.menuid);
      setMenuHeading(selectedItem.menu_heading);
      setMenuName(selectedItem.menu_name);
      setMenuUnder(selectedItem.menu_under);
      setEnableYn(selectedItem.enable_yn);
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(menuid,{ ...selectedItem, menu_heading, menu_name, menu_under, enable_yn });
    onClose(); // Close the modal after updating
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay d-flex align-items-center justify-content-center">
      <div className="modal-content p-4 rounded bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5">Update Menu Item</h2>
          <button onClick={onClose} className="btn btn-close">
            
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Menu Heading"
              value={menu_heading}
              onChange={(e) => setMenuHeading(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Menu Name"
              value={menu_name}
              onChange={(e) => setMenuName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Menu Under"
              value={menu_under}
              onChange={(e) => setMenuUnder(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              value={enable_yn}
              onChange={(e) => setEnableYn(e.target.value)}
              required
            >
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          <button className="btn btn-primary">Update Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
