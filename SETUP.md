# 🚀 Quick Setup Guide

Get your Cannabis Mood Concierge up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- TensorFlow.js
- face-api.js
- Tailwind CSS
- Zustand (state management)

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: AI models (~550KB) will automatically download from CDN when you first use the mood detection feature. No manual setup required!

## Step 3: Test Features

### 🏠 Home Page
Visit `/` to see the landing page with hero section.

### 🛍️ Store
Visit `/store` to browse products and add items to cart.

### 🧠 AI Mood Concierge
Visit `/mood-concierge` to:
1. Click "Start Camera" (allow camera permissions)
2. Position your face in view
3. Wait for mood detection
4. Get personalized recommendations
5. Chat with the AI concierge

### 🛒 Shopping Cart
Click the cart icon in navigation to view your cart.

## Troubleshooting

### Camera Not Working
- Ensure you've granted camera permissions
- Try using HTTPS (required by some browsers)
- Check browser console for errors

### Models Not Loading
- Models automatically load from CDN (requires internet connection)
- Check browser console for network errors
- Check if firewall is blocking CDN access (cdn.jsdelivr.net)
- Optional: Download models locally with `npm run download-models` for offline development

### Build Errors
- Delete `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

## Browser Compatibility

Works best on:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Brave (latest)

## Development Tips

### Hot Reload
Next.js automatically reloads when you edit files. No restart needed!

### Adding Strains
Edit `src/lib/strains.ts` to add more cannabis strains.

### Adding Products
Edit `src/lib/products.ts` to add more pre-roll products.

### Customizing Mood Detection
Edit `src/lib/moodAnalysis.ts` to adjust mood detection logic.

### Styling
Tailwind CSS classes are used throughout. Edit `tailwind.config.js` to customize colors and themes.

## Next Steps

1. ✨ Customize the strain database
2. 🎨 Add product images
3. 🔐 Set up authentication (optional)
4. 💳 Integrate payment processing (optional)
5. 🤖 Connect real AI API (Claude/OpenAI) for advanced chat
6. 🚀 Deploy to Vercel

## Optional: Local Model Setup

By default, AI models load from CDN. For offline development or faster loading, you can download models locally:

```bash
npm run download-models
```

This creates `public/models/` with:
- TinyFaceDetector model (~200KB)
- Face Expression model (~350KB)

The app will automatically use local models if available, falling back to CDN if not.

## Production Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

Need help? Check the [README.md](README.md) for detailed documentation!
