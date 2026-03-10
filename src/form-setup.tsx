import { createFormHookContexts, createFormHook } from "@tanstack/react-form";
import type { ReactNode } from "react";

export const { fieldContext, formContext, useFormContext } =
	createFormHookContexts();

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
	fieldComponents: {},
	formComponents: { FormMarkup, SubmitButton },
	fieldContext,
	formContext,
});

function FormMarkup({ children, id }: { children: ReactNode; id?: string }) {
	const form = useFormContext();
	return (
		<form
			id={id}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				if (
					!form.options.onSubmitMeta ||
					!("preventHandleSubmit" in form.options.onSubmitMeta) ||
					form.options.onSubmitMeta.preventHandleSubmit !== true
				) {
					form.handleSubmit();
				}
			}}
		>
			{children}
		</form>
	);
}

function SubmitButton({
	children = "Submit",
	onClick,
}: {
	children?: string;
	onClick?: () => void;
}) {
	const form = useFormContext();
	return (
		<form.Subscribe selector={(state) => state.isSubmitting}>
			{(isSubmitting) => {
				return (
					<button disabled={isSubmitting} onClick={onClick} type="submit">
						{isSubmitting ? "Submitting..." : children}
					</button>
				);
			}}
		</form.Subscribe>
	);
}
