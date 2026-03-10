import { useStore } from "@tanstack/react-form";
import { withForm } from "../form-setup";
import type { WizardFormValues } from "../types";

export const StepReview = withForm({
	defaultValues: {
		personalInfo: { firstName: "", lastName: "", email: "" },
		address: { street: "", city: "", state: "", zip: "" },
	} as WizardFormValues,
	render: function Render({ form }) {
		const values = useStore(form.store, (s) => s.values);
		const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

		return (
			<div className="step">
				<h2>Review & Submit</h2>

				<div className="review-section">
					<h3>Personal Information</h3>
					<dl className="review-list">
						<dt>First Name</dt>
						<dd>{values.personalInfo.firstName || "—"}</dd>
						<dt>Last Name</dt>
						<dd>{values.personalInfo.lastName || "—"}</dd>
						<dt>Email</dt>
						<dd>{values.personalInfo.email || "—"}</dd>
					</dl>
				</div>

				<div className="review-section">
					<h3>Address</h3>
					<dl className="review-list">
						<dt>Street</dt>
						<dd>{values.address.street || "—"}</dd>
						<dt>City</dt>
						<dd>{values.address.city || "—"}</dd>
						<dt>State</dt>
						<dd>{values.address.state || "—"}</dd>
						<dt>ZIP Code</dt>
						<dd>{values.address.zip || "—"}</dd>
					</dl>
				</div>

				<button
					type="button"
					className="btn btn-submit"
					disabled={isSubmitting}
					onClick={() => form.handleSubmit()}
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</div>
		);
	},
});
