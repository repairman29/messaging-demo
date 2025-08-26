# Quick Deployment Guide

## 🚀 Deploy to GitHub Pages in 5 Minutes

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `zendesk-demo` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files
1. **Option A: Drag & Drop (Easiest)**
   - Drag all files from this folder to the GitHub repository page
   - Commit with message: "Initial commit: Zendesk demo site"

2. **Option B: Command Line**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zendesk demo site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zendesk-demo.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4: Wait for Deployment
- GitHub will build and deploy your site
- This usually takes 2-5 minutes
- You'll see a green checkmark when ready

### Step 5: Access Your Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/zendesk-demo/
```

## 🔧 Before Deploying

### 1. Update URLs in HTML
Edit `index.html` and replace:
- `https://yourusername.github.io/zendesk-demo/` with your actual URL
- Update Open Graph and Twitter Card URLs

### 2. Add Your Zendesk Widget
1. Get your widget key from Zendesk admin panel
2. Replace the placeholder script in `index.html`
3. Test locally first

### 3. Test Locally
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 🌐 Custom Domain (Optional)

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add CNAME record pointing to `YOUR_USERNAME.github.io`
4. Check "Enforce HTTPS"

## 📱 Mobile Testing

- Test on actual devices, not just browser dev tools
- Check touch interactions and scrolling
- Verify responsive breakpoints

## 🚨 Common Issues

### Site Not Loading
- Check repository is public
- Wait 5-10 minutes for initial deployment
- Verify file paths are correct

### Widget Not Working
- Check browser console for errors
- Verify widget key is correct
- Ensure script loads before configuration

### Styling Issues
- Clear browser cache
- Check CSS file paths
- Verify GitHub Pages is serving files

## 📊 Analytics Setup

Add Google Analytics after deployment:
```html
<!-- Add to <head> section in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Updates

To update your site:
1. Make changes to files
2. Commit and push to GitHub
3. GitHub Pages automatically rebuilds
4. Changes appear in 2-5 minutes

---

**Need help?** Check the main README.md or open an issue in your repository.
