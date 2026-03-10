import { withFieldGroup } from "../form-setup";
import type { AddressFields } from "../types";

export const StepAddress = withFieldGroup({
	defaultValues: {
		street: "",
		city: "",
		state: "",
		zip: "",
	} as AddressFields,
	render: function Render({ group }) {
		return (
			<div className="step">
				<h2>Address</h2>

				<group.Field
					name="street"
					validators={{
						onBlur: ({ value }) => {
							if (!value.trim()) return "Street is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="street">Street</label>
							<input
								id="street"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="123 Main St"
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
					name="city"
					validators={{
						onBlur: ({ value }) => {
							if (!value.trim()) return "City is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="city">City</label>
							<input
								id="city"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="New York"
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
					name="state"
					validators={{
						onBlur: ({ value }) => {
							if (!value.trim()) return "State is required";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="state">State</label>
							<input
								id="state"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="NY"
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
					name="zip"
					validators={{
						onBlur: ({ value }) => {
							if (!value.trim()) return "ZIP code is required";
							if (!/^\d{5}$/.test(value)) return "ZIP must be exactly 5 digits";
							return undefined;
						},
					}}
					children={(field) => (
						<div className="field">
							<label htmlFor="zip">ZIP Code</label>
							<input
								id="zip"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="10001"
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
