import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function HelpPage(): JSX.Element {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // In a real implementation, this would send to an API endpoint
      // For now, we'll simulate sending to support@breadcrumb.ai
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', {
        ...formData,
        to: 'support@breadcrumb.ai'
      });
      setFormState('success');
      setFormData({ name: '', email: '', type: '', message: '' });
    } catch (error) {
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
                  Something went wrong. Please try again or email us directly at support@breadcrumb.ai
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="margin-bottom--lg">
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
                <Select
                  value={formData.type}
                  onValueChange={value => setFormData(prev => ({ ...prev, type: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a request type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="account">Account Help</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
