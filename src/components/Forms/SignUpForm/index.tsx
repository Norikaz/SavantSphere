import React from 'react';
import './styles/index.css';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import { Textarea } from 'src/components/ui/textarea';
import { Label } from 'src/components/ui/label';

const SignUpForm = () => {
	return (
		<div className="sign-up-container">
			<h1 className="sign-up-h1">Login</h1>
			<div className="input-group">
				<Label htmlFor="email" className="sign-up-labels">
					Email
				</Label>
				<Input
					type="text"
					placeholder="e.g. johndoe@email.com"
					className="large-input"
				/>
				<Label htmlFor="password" className="sign-up-labels">
					Password
				</Label>
			</div>
			<div className="input-group">
				<Input
					type="password"
					placeholder="password123"
					className="large-input"
				/>
			</div>
			<Button variant="outline" className="sign-up-btn">
				Login
			</Button>
		</div>
	);
};

export default SignUpForm;
