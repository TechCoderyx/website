# Setup script for SSH signed commits
# Run this script to configure SSH key with git and sign commits

Write-Host "========================================"
Write-Host "Git SSH Signed Commits Setup"
Write-Host "========================================"

# Step 1: Ensure ssh-agent is running
Write-Host "`n[Step 1] Starting SSH Agent..."
if ((Get-Service ssh-agent).Status -eq "Stopped") {
    Start-Service ssh-agent
    Write-Host "SSH Agent started"
} else {
    Write-Host "SSH Agent already running"
}

# Step 2: Add SSH key to agent
Write-Host "`n[Step 2] Adding SSH key to agent..."
Write-Host "Type your SSH key passphrase when prompted:"
ssh-add "C:\Users\hitesh.gupta\.ssh\id_hiteshgupta158"

# Step 3: Verify key is added
Write-Host "`n[Step 3] Verifying SSH key..."
ssh-add -l

# Step 4: Configure git locally
Write-Host "`n[Step 4] Configuring Git for signed commits..."
cd "c:\Hitesh\Projects\ZTSI"
git config gpg.format ssh
git config commit.gpgsign true
git config user.signingkey "C:\Users\hitesh.gupta\.ssh\id_hiteshgupta158"
Write-Host "Git configured for SSH signing"

# Step 5: Display current config
Write-Host "`n[Step 5] Current Git Configuration:"
git config --local user.email
git config --local user.name
git config --local user.signingkey
git config --local gpg.format
git config --local commit.gpgsign

Write-Host "`n========================================"
Write-Host "Setup Complete!"
Write-Host "========================================"
Write-Host "`nNext steps:"
Write-Host "1. Run: git commit --amend -S --no-edit"
Write-Host "2. Run: git push -f origin main"
Write-Host "`nYour commits will now be signed with SSH key!"
