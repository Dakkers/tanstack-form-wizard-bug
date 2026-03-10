import { useState } from "react";
import { useAppForm } from "../form-setup";
import type { WizardFormValues } from "../types";
import { StepPersonalInfo } from "./StepPersonalInfo";
import { StepAddress } from "./StepAddress";
import { StepReview } from "./StepReview";
import "./Wizard.css";
import "./Steps.css";

export function Wizard() {
	const [step, setStep] = useState(0);

	const form = useAppForm({
		defaultValues: {
			personalInfo: {
				firstName: "",
				lastName: "",
				email: "",
			},
			address: {
				street: "",
				city: "",
				state: "",
				zip: "",
			},
		} as WizardFormValues,
		onSubmitMeta: {
			preventHandleSubmit: true,
			submitAction: null,
		} as SubmitMeta,
		onSubmit: async ({ value, meta }) => {
			if (meta.submitAction === "next") {
				setStep((v) => v + 1);
			}
		},
	});

	const handleBack = () => {
		setStep((s) => s - 1);
	};

	return (
		<form.AppForm>
			<div className="wizard">
				<div className="wizard-progress">
					{STEP_LABELS.map((label, i) => (
						<div
							key={label}
							className={`wizard-step-indicator ${
								i === step ? "active" : i < step ? "completed" : ""
							}`}
						>
							<div className="wizard-step-number">{i < step ? "✓" : i + 1}</div>
							<span className="wizard-step-label">{label}</span>
						</div>
					))}
				</div>

				<form.FormMarkup>
					<div className="wizard-body">
						{step === 0 && (
							<StepPersonalInfo form={form} fields="personalInfo" />
						)}
						{step === 1 && <StepAddress form={form} fields="address" />}
						{step === 2 && <StepReview form={form} />}
					</div>
				</form.FormMarkup>

				{step < 2 && (
					<div className="wizard-nav">
						<button
							type="button"
							className="btn btn-back"
							onClick={handleBack}
							disabled={step === 0}
						>
							Back
						</button>
						<form.SubmitButton
							onClick={() => {
								return form.handleSubmit({ submitAction: "next" });
							}}
						>
							Next
						</form.SubmitButton>
					</div>
				)}

				{step === 2 && (
					<div className="wizard-nav">
						<button type="button" className="btn btn-back" onClick={handleBack}>
							Back
						</button>
					</div>
				)}
			</div>
		</form.AppForm>
	);
}

const STEP_LABELS = ["Personal Info", "Address", "Review"];

type SubmitMeta = {
	preventHandleSubmit?: true;
	submitAction: "next" | null;
};
