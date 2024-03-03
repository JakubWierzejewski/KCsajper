import React, { useState } from 'react';
import Header from './Header';
import '../contact.scss'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    topic: '',
    agree: false,
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    topic: '',
    agree: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>): void => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let newErrors: any = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.topic) {
      newErrors.topic = 'Topic is required';
    }
    if (!formData.agree) {
      newErrors.agree = 'You must agree to process your personal data';
    }
    if (!formData.message || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form data:', formData);
      // Przygotuj kod do wysłania formularza
      alert('Your message has been sent');
    }
  };

  return (
    <div>
      <Header title="Contact" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Topic</label>
          <select name="topic" value={formData.topic} onChange={handleChange}>
            <option value="">Select topic</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Billing">Billing</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.topic && <p>{errors.topic}</p>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            I agree to process my personal data
          </label>
          {errors.agree && <p>{errors.agree}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;