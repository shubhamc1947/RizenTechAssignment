import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuUnderOptions, setMenuUnderOptions] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/menus');
      setItems(response.data);
      console.log(items)
    } catch (error) {
      console.error('Error fetching items:', error);
      toast.error('Error fetching items');
    }
  };

  const addItem = async (item) => {
    console.log("itemm data is here"+JSON.stringify(item))
    try {
      const response = await axios.post('http://localhost:5000/add-menu', item);
      fetchItems();
      toast.success('Item added successfully');
    } catch (error) {
      console.error('Error adding item:', error);
      toast.error('Error adding item');
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-menu/${id}`);
      fetchItems();
      toast.success('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Error deleting item');
    }
  };
  console.log(items)

  const updateItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`http://localhost:5000/update-menu/${id}`, updatedItem);
      fetchItems();
      toast.success('Item updated successfully');
    } catch (error) {
      console.error('Error updating item:', error);
      toast.error('Error updating item');
    }
  };

  const toggleItem = async (menuid, enable_yn) => {
    try {
      // Toggle enable/disable value
      const newEnableYn = enable_yn === 'Y' ? 'N' : 'Y';
      
      const response = await axios.put(`http://localhost:5000/toggle-menu/${menuid}`, {
        enable_yn: newEnableYn
      });
  
      fetchItems();
      toast.success('Item toggled successfully');
    } catch (error) {
      console.error('Error toggling item:', error);
      toast.error('Error toggling item');
    }
  };

  const fetchMenuUnderOptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/menu-under-options');
      setMenuUnderOptions(response.data);
    } catch (error) {
      console.error('Error fetching menu under options:', error);
    }
  };

console.log(JSON.stringify(items))
useEffect(() => {
  fetchItems();
  fetchMenuUnderOptions();
}, []);

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem, updateItem, toggleItem,selectedItem,setSelectedItem,menuUnderOptions }}>
      {children}
    </ItemContext.Provider>
  );
};
