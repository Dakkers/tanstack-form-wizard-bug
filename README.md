# Bug with wizards (multi-step form) when using Tanstack Form

To reproduce:

1. `pnpm dev` to start the sever
2. Access http://localhost:5173/
3. Enter in whatever data you want for the "Personal Info" step and click "Next"
4. After landing on the "Address" step, **click "Next" without filling in any of the fields**
5. You should see validation errors on this step
6. Click the "Back" button to return to the "Personal Info" step
7. The validation errors should no longer be there (as expected)
8. Click "Next"
9. **You will be unable to actually go to the next step now** - this is unexpected