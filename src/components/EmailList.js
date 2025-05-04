// import React from 'react';

// function EmailList({ emails, onSelect, onDelete }) {
//   return (
//     <div className="email-list">
//       <h2>Sent Emails</h2>
//       {emails.length === 0 && <p>No emails found.</p>}
//       {emails.map((email) => (
//         <div key={email.id} className="email-item">
//           <div onClick={() => onSelect(email)}>
//             <strong>{email.to}</strong> - {email.subject} ({email.date})
//           </div>
//           <button onClick={() => onDelete(email.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EmailList;
// import React from 'react';

// function EmailList({ emails, onSelect, onDelete }) {
//   return (
//     <div className="email-list mt-4">
//       <h4 className="mb-3">📨 Sent Emails</h4>
//       {emails.length === 0 && <div className="alert alert-info">No emails found.</div>}

//       <ul className="list-group">
//         {emails.map((email) => (
//           <li
//             key={email.id}
//             className="list-group-item d-flex justify-content-between align-items-center"
//           >
//             <div onClick={() => onSelect(email)} style={{ cursor: 'pointer' }}>
//               <strong>{email.to}</strong> — {email.subject} <br />
//               <small className="text-muted">{email.date}</small>
//             </div>
//             <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(email.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EmailList;
// import React from 'react';

// function EmailList({ emails, onSelect, onDelete }) {
//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">📨 Sent Emails</h4>

//       {emails.length === 0 ? (
//         <div className="alert alert-info">No emails found.</div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead className="table-light">
//               <tr>
//                 <th>#</th>
//                 <th>To</th>
//                 <th>Subject</th>
//                 <th>Date</th>
//                 <th style={{ width: '120px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {emails.map((email, index) => (
//                 <tr key={email.id}>
//                   <td>{index + 1}</td>
//                   <td>{email.to}</td>
//                   <td>{email.subject}</td>
//                   <td>{email.date}</td>
//                   <td className="d-flex justify-content-between">
//                     <button
//                       className="btn btn-sm btn-info"
//                       onClick={() => onSelect(email)}
//                       title="View/Edit"
//                     >
//                       ✏️
//                     </button>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => onDelete(email.id)}
//                       title="Delete"
//                     >
//                       🗑️
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailList;
// import React from 'react';

// function EmailList({ emails, onSelect, onDelete, onEdit }) {
//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">📨 Sent Emails</h4>

//       {emails.length === 0 ? (
//         <div className="alert alert-info">No emails found.</div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-striped table-bordered">
//             <thead className="table-light">
//               <tr>
//                 <th>#</th>
//                 <th>To</th>
//                 <th>Subject</th>
//                 <th>Date</th>
//                 <th style={{ width: '240px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {emails.map((email, index) => (
//                 <tr key={email.id}>
//                   <td>{index + 1}</td>
//                   <td>{email.to}</td>
//                   <td>{email.subject}</td>
//                   <td>{email.date}</td>
//                   <td className="d-flex justify-content-between">
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => onDelete(email.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="btn btn-sm btn-warning"
//                       onClick={() => onEdit(email)}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="btn btn-sm btn-info"
//                       onClick={() => onSelect(email)}
//                     >
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailList;
// import React from 'react';

// function EmailList({ emails, onSelect, onDelete }) {
//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">📨 Sent Emails</h4>

//       {emails.length === 0 ? (
//         <div className="alert alert-info">No emails found.</div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-striped table-bordered">
//             <thead className="table-light">
//               <tr>
//                 <th>#</th>
//                 <th>To</th>
//                 <th>Subject</th>
//                 <th>Date</th>
//                 <th style={{ width: '160px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {emails.map((email, index) => (
//                 <tr key={email.id}>
//                   <td>{index + 1}</td>
//                   <td>{email.to}</td>
//                   <td>{email.subject}</td>
//                   <td>{email.date}</td>
//                   <td className="d-flex justify-content-between">
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => onDelete(email.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="btn btn-sm btn-info"
//                       onClick={() => onSelect(email)}
//                     >
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailList;
// import React from 'react';
// import { FaTrash, FaEye } from 'react-icons/fa'; // Make sure react-icons is installed

// function EmailList({ emails, onSelect, onDelete }) {
//   return (
//     <div className="mt-4">
//       <h4 className="mb-3">📨 Sent Emails</h4>

//       {emails.length === 0 ? (
//         <div className="alert alert-info">No emails found.</div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-striped table-hover align-middle">
//             <thead className="table-light">
//               <tr>
//                 <th>ID</th>
//                 <th>To</th>
//                 <th>Subject</th>
//                 <th>Date</th>
//                 <th className="text-center" style={{ width: '120px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {emails.map((email, index) => (
//                 <tr key={email.id}>
//                   <td>{index + 1}</td>
//                   <td>{email.to}</td>
//                   <td>{email.subject}</td>
//                   <td>{email.date}</td>
//                   <td className="text-center">
//                     <div className="btn-group">
//                       <button
//                         className="btn btn-sm btn-info"
//                         onClick={() => onSelect(email)}
//                         title="View"
//                       >
//                         <FaEye />
//                       </button>
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => onDelete(email.id)}
//                         title="Delete"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EmailList;
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
                        className="btn btn-sm btn-info"
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
