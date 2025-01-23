import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Button } from '@site/src/components/ui/button';
import { Input } from '@site/src/components/ui/input';
import { Textarea } from '@site/src/components/ui/textarea';
import { Alert, AlertDescription } from '@site/src/components/ui/alert';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function HelpPage(): JSX.Element {
  const [formState, setFormState] = useState<FormState>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'technical',
    message: ''
  });

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.message.trim()) errors.push('Message is required');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setFormState('error');
      setValidationErrors(errors);
      return;
    }
    setValidationErrors([]);

    setFormState('submitting');

    try {
      // Send form data to support email
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Type: ${formData.type}
Message:
${formData.message}
      `;

      // Use mailto link to open email client
      const mailtoLink = `mailto:support@breadcrumb.ai?subject=Help Request: ${formData.type}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Set success state after email client opens
      setFormState('success');
      setFormData({ name: '', email: '', type: 'technical', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
    }
  };

  return (
    <Layout title="Get Help" description="Submit a help request to the Breadcrumb team">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1>Need Help?</h1>
            <p className="margin-bottom--lg">
              Fill out this form and our support team will get back to you as soon as possible.
            </p>

            {formState === 'success' && (
              <Alert className="margin-bottom--md" variant="default">
                <AlertDescription>
                  Thanks for reaching out! We'll get back to you soon at {formData.email}.
                </AlertDescription>
              </Alert>
            )}

            {formState === 'error' && (
              <Alert className="margin-bottom--md" variant="destructive">
                <AlertDescription>
                  {validationErrors.length > 0 ? (
                    <ul className="list-none m-0 p-0">
                      {validationErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  ) : (
                    'Something went wrong. Please try again or email us directly at support@breadcrumb.ai'
                  )}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="margin-bottom--lg help-form">
              <div className="margin-bottom--sm">
                <label htmlFor="name" className="margin-bottom--sm">Name</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="margin-bottom--sm">
                <label htmlFor="email" className="margin-bottom--sm">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="margin-bottom--sm">
                <label htmlFor="type" className="margin-bottom--sm">Request Type</label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={e => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  className="form-select"
                  required
                >
                  <option value="technical">Technical Support</option>
                  <option value="account">Account Help</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="margin-bottom--lg">
                <label htmlFor="message" className="margin-bottom--sm">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="button button--primary"
                style={{
                  backgroundColor: '#59479C',
                  color: 'white',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
