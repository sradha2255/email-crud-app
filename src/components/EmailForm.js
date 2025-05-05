import React, { useState, useEffect } from 'react';

function EmailForm({ onSubmit, email }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (email) {
      setTo(email.to);
      setSubject(email.subject);
      setBody(email.body);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!to || !subject || !body) return;
    onSubmit({ id: email?.id, to, subject, body });
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-light rounded shadow-sm">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Enter a valid email address"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {email ? 'Update Email' : 'Send Email'}
      </button>
    </form>
  );
}

export default EmailForm;
