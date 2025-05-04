// import React, { useState, useEffect } from 'react';
// import EmailForm from './components/EmailForm';
// import EmailList from './components/EmailList';
// import EmailDetails from './components/EmailDetails';
// import SearchBar from './components/SearchBar';
// import './styles.css';

// function App() {
//   const [emails, setEmails] = useState(() => {
//     const stored = localStorage.getItem('emails');
//     return stored ? JSON.parse(stored) : [];
//   });

//   const [selectedEmail, setSelectedEmail] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     localStorage.setItem('emails', JSON.stringify(emails));
//   }, [emails]);

//   const handleAddEmail = (email) => {
//     if (editing) {
//       setEmails(emails.map((e) => (e.id === email.id ? { ...email, date: e.date } : e)));
//       setEditing(false);
//       setSelectedEmail(null);
//     } else {
//       setEmails([...emails, { ...email, id: Date.now(), date: new Date().toLocaleString() }]);
//     }
//   };

//   const handleDeleteEmail = (id) => {
//     setEmails(emails.filter((email) => email.id !== id));
//     if (selectedEmail?.id === id) setSelectedEmail(null);
//   };

//   const handleSelectEmail = (email) => {
//     setSelectedEmail(email);
//     setEditing(false);
//   };

//   const handleEditEmail = (email) => {
//     setEditing(true);
//     setSelectedEmail(email);
//   };

//   const filteredEmails = emails.filter((email) =>
//     email.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     email.subject.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h1>Email CRUD Application</h1>
//       <EmailForm onSubmit={handleAddEmail} email={editing ? selectedEmail : null} />
//       <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
//       {/* <EmailList emails={filteredEmails} onSelect={handleSelectEmail} onDelete={handleDeleteEmail} /> */}
//       <EmailList
//   emails={filteredEmails}
//   onSelect={handleSelectEmail}
//   onDelete={handleDeleteEmail}
//   onEdit={handleEditEmail}
// />

//       {selectedEmail && (
//         <EmailDetails email={selectedEmail} onEdit={handleEditEmail} onDelete={handleDeleteEmail} />
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import EmailForm from './components/EmailForm';
import EmailList from './components/EmailList';
import EmailDetails from './components/EmailDetails';
import SearchBar from './components/SearchBar';
import './styles.css';

function App() {
  const [emails, setEmails] = useState(() => {
    const stored = localStorage.getItem('emails');
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [editing, setEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(emails));
  }, [emails]);

  const handleAddEmail = (email) => {
    if (editing) {
      setEmails(emails.map((e) => (e.id === email.id ? { ...email, date: e.date } : e)));
      setEditing(false);
      setSelectedEmail(null);
    } else {
      setEmails([...emails, { ...email, id: Date.now(), date: new Date().toLocaleString() }]);
    }
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
    if (selectedEmail?.id === id) setSelectedEmail(null);
  };

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
    setEditing(false);
  };

  const handleEditEmail = (email) => {
    setEditing(true);
    setSelectedEmail(email);
  };

  const filteredEmails = emails.filter((email) =>
    email.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Email CRUD Application</h1>
      <EmailForm onSubmit={handleAddEmail} email={editing ? selectedEmail : null} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <EmailList
        emails={filteredEmails}
        onSelect={handleSelectEmail}
        onDelete={handleDeleteEmail}
      />

      {selectedEmail && (
        <EmailDetails
          email={selectedEmail}
          onEdit={handleEditEmail}
          onDelete={handleDeleteEmail}
        />
      )}
    </div>
  );
}

export default App;
