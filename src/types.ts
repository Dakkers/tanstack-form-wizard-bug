export type PersonalInfoFields = {
  firstName: string
  lastName: string
  email: string
}

export type AddressFields = {
  street: string
  city: string
  state: string
  zip: string
}

export type WizardFormValues = {
  personalInfo: PersonalInfoFields
  address: AddressFields
}
