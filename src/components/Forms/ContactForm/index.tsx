import React from 'react';
import './styles/index.css';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';

const ContactForm = () => {
	return (
		<div className="contact-form-container">
			<h1 className="contact-h1">Contact Us</h1>
			<div className="input-group">
				<Label htmlFor="name" className="contact-form-labels">
					Name
				</Label>
				<Input
					type="text"
					placeholder="e.g. John Doe"
					className="large-input"
				/>
				<Label htmlFor="email" className="contact-form-labels">
					Email
				</Label>
			</div>
			<div className="input-group">
				<Input
					type="email"
					placeholder="e.g. johndoe@example.com"
					className="large-input"
				/>
			</div>
			<div className="input-group">
				<Label htmlFor="number" className="contact-form-labels">
					Number
				</Label>
				<Input
					type="tel"
					placeholder="e.g. 999-999-9999"
					className="large-input"
				/>
			</div>
			<Label htmlFor="msg" className="contact-form-labels">
				Message
			</Label>
			<Textarea
				placeholder="Type your message here."
				className="message-input"
			/>
			<Button variant="outline" className="contact-page-btn">
				Submit
			</Button>
		</div>
	);
};

export default ContactForm;
