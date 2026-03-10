import { withFieldGroup } from "../form-setup";
import type { PersonalInfoFields } from "../types";

export const StepPersonalInfo = withFieldGroup({
	defaultValues: {
		firstName: "",
		lastName: "",
		email: "",
	} as PersonalInfoFields,
	render: function Render({ group }) {
		return (
			<div className="step">
				<h2>Personal Information</h2>

				<group.Field
					name="firstName"
					validators={{
						onChange: ({ value }) => {
							if (!value.trim()) return "First name is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="firstName">First Name</label>
							<input
								id="firstName"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="John"
							/>
							{field.state.meta.errors.length > 0 && (
								<span className="field-error">
									{field.state.meta.errors.join(", ")}
								</span>
							)}
						</div>
					)}
				/>

				<group.Field
					name="lastName"
					validators={{
						onChange: ({ value }) => {
							if (!value.trim()) return "Last name is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="lastName">Last Name</label>
							<input
								id="lastName"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="Doe"
							/>
							{field.state.meta.errors.length > 0 && (
								<span className="field-error">
									{field.state.meta.errors.join(", ")}
								</span>
							)}
						</div>
					)}
				/>

				<group.Field
					name="email"
					validators={{
						onChange: ({ value }) => {
							if (!value.trim()) return "Email is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								type="email"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="john@example.com"
							/>
							{field.state.meta.errors.length > 0 && (
								<span className="field-error">
									{field.state.meta.errors.join(", ")}
								</span>
							)}
						</div>
					)}
				/>
			</div>
		);
	},
});
