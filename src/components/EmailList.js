import React from 'react';
import { FaTrash, FaEye } from 'react-icons/fa';

function EmailList({ emails, onSelect, onDelete }) {
  return (
    <div className="mt-4">
      <h4 className="mb-3">📨 Sent Emails</h4>

      {emails.length === 0 ? (
        <div className="alert alert-info">No emails found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>To</th>
                <th>Subject</th>
                <th>Date</th>
                <th className="text-center" style={{ width: '120px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <tr key={email.id}>
                  <td>{index + 1}</td>
                  <td>{email.to}</td>
                  <td>{email.subject}</td>
                  <td>{email.date}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-sm"
                        style={{ backgroundColor: '#6f42c1', color: 'white' }}
                        onClick={() => onSelect(email)}
                        title="View"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(email.id)}
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmailList;
