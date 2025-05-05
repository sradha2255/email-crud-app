import React from 'react';
import { FaEdit, FaTrash, FaRegFileAlt } from 'react-icons/fa';

function EmailDetails({ email, onEdit, onDelete }) {
  return (
    <div className="email-details mt-4 p-4 border rounded bg-white shadow-sm">
      <h5 className="mb-3">
        <FaRegFileAlt className="me-2 text-secondary" />
        Email Details
      </h5>
      <p><strong>To:</strong> {email.to}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      <p><strong>Date:</strong> {email.date}</p>
      <hr />
      <p>{email.body}</p>
      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-sm"
          style={{ backgroundColor: '#20c997', color: 'white' }}
          title="Edit"
          onClick={() => onEdit(email)}
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-danger btn-sm"
          title="Delete"
          onClick={() => onDelete(email.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default EmailDetails;
