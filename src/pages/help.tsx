import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Button } from '@site/src/components/ui/button';
import { Input } from '@site/src/components/ui/input';
import { Textarea } from '@site/src/components/ui/textarea';
import { Alert, AlertDescription } from '@site/src/components/ui/alert';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function HelpPage(): JSX.Element {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Check for success parameter in URL when component mounts
    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('success')) {
            setFormSubmitted(true);
            // Remove the success parameter from URL
            const newUrl = window.location.pathname;
            window.history.replaceState({}, '', newUrl);
        }
    }, []);

    const validateForm = (data: { name: string; email: string; message: string }) => {
        const errors: string[] = [];
        if (!data.name.trim()) errors.push('Name is required');
        if (!data.email.trim()) errors.push('Email is required');
        if (!data.message.trim()) errors.push('Message is required');

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email && !emailRegex.test(data.email)) {
            errors.push('Please enter a valid email address');
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        const formElements = form.elements as HTMLFormControlsCollection;
        const name = (formElements.namedItem('name') as HTMLInputElement).value;
        const email = (formElements.namedItem('email') as HTMLInputElement).value;
        const message = (formElements.namedItem('message') as HTMLTextAreaElement).value;

        const formData = {
            name,
            email,
            type: (formElements.namedItem('type') as HTMLSelectElement).value,
            message,
        };

        const errors = validateForm(formData);
        if (errors.length > 0) {
            e.preventDefault();
            setFormState('error');
            setValidationErrors(errors);
            return;
        }

        setValidationErrors([]);

        // Update _replyto hidden field with the email
        const replyToInput = form.querySelector('input[name="_replyto"]') as HTMLInputElement;
        if (replyToInput) {
            replyToInput.value = email;
        }

        // Form will be submitted to FormSubmit.co
        setFormSubmitted(true);
    };

    return (
        <Layout title="Get Help" description="Submit a help request to the Breadcrumb team">
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--6 col--offset-3">
                        <h1>Need Help?</h1>
                        <p className="margin-bottom--lg">
                            Fill out this form and our support team will get back to you as soon as
                            possible.
                        </p>

                        {formSubmitted && (
                            <Alert
                                className="margin-bottom--md"
                                variant="default"
                                style={{ backgroundColor: '#4CAF50', color: 'white' }}
                            >
                                <AlertDescription>
                                    ✓ Thanks for reaching out! We'll get back to you soon.
                                </AlertDescription>
                            </Alert>
                        )}

                        {validationErrors.length > 0 && (
                            <Alert className="margin-bottom--md" variant="destructive">
                                <AlertDescription>
                                    <ul className="list-none m-0 p-0">
                                        {validationErrors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        )}

                        <form
                            action="https://formsubmit.co/victor@breadcrumb.ai"
                            method="POST"
                            className="margin-bottom--lg help-form"
                        >
                            {/* Hidden fields for FormSubmit configuration */}
                            <input type="hidden" name="_subject" value="Help Request Submission" />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://breadcrumb-team.github.io/docs/help?success=true"
                            />
                            <input type="hidden" name="_captcha" value="true" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_replyto" value="" />

                            <div className="margin-bottom--sm">
                                <label htmlFor="name" className="margin-bottom--sm">
                                    Name
                                </label>
                                <Input id="name" name="name" type="text" required />
                            </div>

                            <div className="margin-bottom--sm">
                                <label htmlFor="email" className="margin-bottom--sm">
                                    Email
                                </label>
                                <Input id="email" name="email" type="email" required />
                            </div>

                            <div className="margin-bottom--sm">
                                <label htmlFor="type" className="margin-bottom--sm">
                                    Request Type
                                </label>
                                <select id="type" name="type" className="form-select" required>
                                    <option value="technical">Technical Support</option>
                                    <option value="account">Account Help</option>
                                    <option value="billing">Billing Question</option>
                                    <option value="feature">Feature Request</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="margin-bottom--lg">
                                <label htmlFor="message" className="margin-bottom--sm">
                                    Message
                                </label>
                                <Textarea id="message" name="message" required rows={5} />
                            </div>

                            <Button
                                type="submit"
                                disabled={false}
                                className="button button--primary"
                                style={{
                                    backgroundColor: '#59479C',
                                    color: 'white',
                                    padding: '10px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Submit Request
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
