import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const InfoPage = () => {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const item = items.find(item => item.menuid === parseInt(id, 10));

  if (!item) return <p>Item not found</p>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-light rounded">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Item Details</h5>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-4"><strong>Menu ID:</strong></div>
                <div className="col-8">{item.menuid}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4"><strong>Menu Heading:</strong></div>
                <div className="col-8">{item.menu_heading}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4"><strong>Menu Name:</strong></div>
                <div className="col-8">{item.menu_name}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4"><strong>Menu Under:</strong></div>
                <div className="col-8">{item.menu_under}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4"><strong>Enable:</strong></div>
                <div className="col-8">{item.enable_yn === 'Y' ? 'Yes' : 'No'}</div>
              </div>
              <div className="text-center">
                <Link to="/" className="btn btn-primary">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
