import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, editCart } = useCart();
  const [editingName, setEditingName] = useState(null);
  const [editValue, setEditValue] = useState('');

  const startEdit = (item) => {
    setEditingName(item.name);
    setEditValue(item.name);
  };

  const saveEdit = (oldName) => {
    if (editValue.trim()) {
      editCart(oldName, { name: editValue.trim() });
    }
    setEditingName(null);
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No courses added yet.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.name} className="cart-item">
              <div className="cart-item-info">
                {editingName === item.name ? (
                  <input
                    className="cart-edit-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.name)}
                    autoFocus
                  />
                ) : (
                  <span className="cart-course-name">{item.name}</span>
                )}
                <span className="cart-category">{item.category}</span>
              </div>
              <div className="cart-actions">
                {editingName === item.name ? (
                  <button className="btn-save" onClick={() => saveEdit(item.name)}>Save</button>
                ) : (
                  <button className="btn-edit" onClick={() => startEdit(item)}>✏️ Edit</button>
                )}
                <button className="btn-delete" onClick={() => removeFromCart(item.name)}>🗑️ Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
