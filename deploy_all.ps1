# Deploy script for Prehistoric Earth (GitHub + Vercel)
$ErrorActionPreference = "Continue"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "1. PREPARING REPO & CONFIGS" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

# Ensure index.html and prototype.html are synced
Copy-Item -Path "prototype.html" -Destination "index.html" -Force
Write-Host "[OK] Synced prototype.html -> index.html" -ForegroundColor Green

# Create .vercelignore to exclude heavy archives and scratch files
@"
assets/models_archive/
.git/
scratch_*
*.log
*.tmp
__pycache__/
build_prep.py
generate_v4.py
generate_v5.py
prototype_v5_backup.html
"@ | Set-Content -Path ".vercelignore" -Encoding UTF8
Write-Host "[OK] Created .vercelignore" -ForegroundColor Green

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "2. COMMITTING & PUSHING TO GITHUB" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

if (-not (Test-Path ".git")) {
    git init
    Write-Host "[OK] Initialized new git repo" -ForegroundColor Green
}

git remote remove origin 2>$null
git remote add origin https://github.com/nghiavu2011/prehistoric-earth.git
git branch -M main

Write-Host "Adding tracked files to git (excluding models_archive)..." -ForegroundColor Yellow
git add .
git status -s

git commit -m "feat: Complete 3D Dinosaur Museum with 1080p ecology videos, 2K field guide posters, realistic T-Rex PBR texture and 2K Lightbox"
Write-Host "[OK] Committed changes" -ForegroundColor Green

Write-Host "Pushing to GitHub (nghiavu2011/prehistoric-earth)..." -ForegroundColor Yellow
git push -u origin main --force
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Pushed to GitHub successfully!" -ForegroundColor Green
} else {
    Write-Host "[WARN] Git push exited with code $LASTEXITCODE" -ForegroundColor Red
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "3. DEPLOYING TO VERCEL PRODUCTION" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan

vercel deploy --prod --yes
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Deployed to Vercel successfully!" -ForegroundColor Green
} else {
    Write-Host "[WARN] Vercel deploy exited with code $LASTEXITCODE" -ForegroundColor Red
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "ALL DEPLOYMENT STEPS FINISHED!" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
