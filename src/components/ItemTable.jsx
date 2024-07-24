import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import UpdateModal from './UpdateModal';
import './ItemTable.css';

const ItemTable = () => {
  const { items, deleteItem, toggleItem, setSelectedItem, selectedItem } = useContext(ItemContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container">
      <div className="item-table">
        <h2 className="my-4">Item List</h2>
        <table className="table table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Sno</th>
              <th>Menu Heading</th>
              <th>Menu Name</th>
              <th>Menu Under</th>
              <th>Status</th>
              <th style={{textAlign:"center"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item,idx) => (
              <tr key={item.menuid}>
                <td>{idx+1}</td>
                <td>{item.menu_heading}</td>
                <td>{item.menu_name}</td>
                <td>{item.menu_under}</td>
                <td>{item.enable_yn==="Y"?"Show":"Hide"}</td>
                <td style={{textAlign:"center"}}>
                  <div className="btn-group" role="group" aria-label="Item Actions">
                    <button 
                      onClick={() => deleteItem(item.menuid)} 
                      className="btn btn-danger btn-sm mr-2">
                      Delete
                    </button>
                    <button 
                      onClick={() => handleEditClick(item)} 
                      className="btn btn-primary btn-sm mr-2">
                      Update
                    </button>
                    <button 
                      onClick={() => toggleItem(item.menuid, item.enable_yn)} 
                      className={`btn btn-sm ${item.enable_yn === 'Y' ? 'btn-warning' : 'btn-success'}`}>
                      {item.enable_yn === 'Y' ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <UpdateModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </div>
  );
};

export default ItemTable;
