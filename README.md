# Zendesk Messaging Widget Demo Site

A professional, modern demo website showcasing Zendesk messaging widget integration. This site is optimized for GitHub Pages deployment and demonstrates best practices for implementing customer support chat functionality.

![Demo Preview](assets/demo-preview.png)

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Zendesk Integration Ready**: Clear instructions and placeholder code for widget setup
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Loading**: Optimized assets and modern CSS techniques
- **Interactive Elements**: Smooth scrolling, form validation, and notifications

## 📁 Project Structure

```
zendesk-demo/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── assets/                 # Images and assets (create this folder)
├── README.md              # This file
└── 404.html              # Custom 404 page
```

## 🛠️ Setup Instructions

### 1. Clone or Download

```bash
# Clone the repository
git clone https://github.com/yourusername/zendesk-demo.git
cd zendesk-demo

# Or download and extract the ZIP file
```

### 2. Add Your Zendesk Widget

1. **Get Your Widget Key**:
   - Log into your Zendesk admin panel
   - Go to Admin → Channels → Messaging
   - Copy your widget key

2. **Update the HTML**:
   - Open `index.html`
   - Find the section marked "ZENDESK WIDGET INTEGRATION INSTRUCTIONS"
   - Replace the placeholder script with your actual widget code:

```html
<!-- Replace this placeholder with your actual Zendesk Web Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=YOUR_ACTUAL_WIDGET_KEY"></script>
<script>
  zE('webWidget', 'configure', {
    display: {
      helpButton: {
        color: '#1f73b7'
      }
    },
    webWidget: {
      position: { horizontal: 'right', vertical: 'bottom' },
      offset: { horizontal: '20px', vertical: '20px' }
    }
  });
</script>
```

### 3. Customize the Widget

You can customize various aspects of your widget:

```javascript
zE('webWidget', 'configure', {
  // Button appearance
  display: {
    helpButton: {
      color: '#1f73b7',        // Button color
      size: 'large'            // Button size
    }
  },
  
  // Widget positioning
  webWidget: {
    position: { 
      horizontal: 'right',     // 'left' or 'right'
      vertical: 'bottom'       // 'top' or 'bottom'
    },
    offset: { 
      horizontal: '20px',      // Distance from edge
      vertical: '20px' 
    }
  },
  
  // Chat settings
  chat: {
    title: 'Customer Support', // Chat window title
    suppress: false            // Show/hide chat
  }
});
```

For more configuration options, visit the [Zendesk Developer Documentation](https://developer.zendesk.com/api-reference/widgets/chat-widget/chat-widget-api/).

## 🌐 GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Zendesk demo site"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

3. **Your site will be available at**:
   `https://yourusername.github.io/repository-name/`

### Option 2: Manual Deployment

1. **Build and Test Locally**:
   ```bash
   # Use a local server (Python 3)
   python -m http.server 8000
   
   # Or use Node.js
   npx serve .
   
   # Or use PHP
   php -S localhost:8000
   ```

2. **Upload to Web Server**:
   - Upload all files to your web server
   - Ensure the server supports static files

## 🎨 Customization

### Colors and Branding

Update the CSS variables in `styles/main.css`:

```css
:root {
  --primary-color: #1f73b7;    /* Your brand color */
  --primary-dark: #155a8a;     /* Darker shade */
  --accent-color: #28a745;     /* Accent color */
  --text-dark: #2c3e50;        /* Main text color */
  --text-light: #6c757d;       /* Secondary text */
}
```

### Content Updates

- **Company Information**: Update text in `index.html`
- **Contact Details**: Modify the contact section
- **Images**: Replace placeholder images in the `assets/` folder
- **Meta Tags**: Update Open Graph and Twitter Card URLs

### Adding New Sections

1. **HTML Structure**:
   ```html
   <section id="new-section" class="new-section">
     <div class="container">
       <div class="section-header">
         <h2>Section Title</h2>
         <p>Section description</p>
       </div>
       <!-- Your content here -->
     </div>
   </section>
   ```

2. **CSS Styling**:
   ```css
   .new-section {
     padding: 80px 0;
     background-color: var(--bg-white);
   }
   ```

3. **Navigation Link**:
   ```html
   <li class="nav-item">
     <a href="#new-section" class="nav-link">New Section</a>
   </li>
   ```

## 📱 Responsive Design

The site is built with mobile-first responsive design:

- **Mobile**: Optimized for screens 320px and up
- **Tablet**: Optimized for screens 768px and up
- **Desktop**: Optimized for screens 1200px and up

### Breakpoints

```css
@media (max-width: 768px) {
  /* Tablet and mobile styles */
}

@media (max-width: 480px) {
  /* Mobile-specific styles */
}
```

## 🔧 Advanced Features

### Form Handling

The demo includes a functional contact form with:
- Input validation
- Success/error notifications
- Form reset functionality

To connect to a real backend:
1. Update the form action URL
2. Modify the JavaScript form handler
3. Add CSRF protection if needed

### Analytics Integration

Add Google Analytics or other tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Optimization

- **Image Optimization**: Use WebP format and proper sizing
- **CSS Minification**: Minify CSS for production
- **JavaScript Bundling**: Bundle and minify JS files
- **CDN**: Use CDN for external resources

## 🐛 Troubleshooting

### Common Issues

1. **Widget Not Appearing**:
   - Check browser console for errors
   - Verify widget key is correct
   - Ensure script is loaded before configuration

2. **Styling Issues**:
   - Clear browser cache
   - Check CSS file paths
   - Verify CSS syntax

3. **Mobile Issues**:
   - Test on actual devices
   - Check viewport meta tag
   - Verify touch event handling

### Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks**: Graceful degradation for older browsers

## 📚 Resources

- [Zendesk Developer Documentation](https://developer.zendesk.com/)
- [Zendesk Widget API Reference](https://developer.zendesk.com/api-reference/widgets/chat-widget/chat-widget-api/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes. Feel free to use and modify for your own projects.

## 🆘 Support

If you need help with:
- **Zendesk Widget**: Contact Zendesk Support
- **Site Customization**: Check the customization section above
- **GitHub Pages**: Visit GitHub Pages documentation
- **General Issues**: Open an issue in this repository

---

**Happy coding! 🚀**

Built with ❤️ for the Zendesk community.
