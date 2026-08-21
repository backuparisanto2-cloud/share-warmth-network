# Import referenced project into workspace

## Goal
Check out the project referenced by the user so we can review or reuse its code/assets.

## Current blocker
The supplied link `https://lovable.dev/invite/IJ9NFUR` is a referral/signup invite (it redirects to `/signup?referral_code=IJ9NFUR`). It does not contain the project name or ID required by the cross-project checkout tool.

## Plan
1. Ask the user for the actual project name or project ID from their Lovable workspace.
2. Once provided, run the cross-project checkout tool.
3. Explore the snapshot and report what files are available to copy or review.
