# 🌿 Mood Rolls - AI-Powered Cannabis Concierge

A cutting-edge cannabis e-commerce platform featuring AI-powered mood detection and personalized strain recommendations.

## ✨ Features

### 🛍️ E-Commerce Store
- Browse premium pre-roll products
- Filter by strain type (Sativa, Indica, Hybrid)
- Shopping cart with persistent storage
- Product details with strain information

### 🧠 AI Mood Detection
- Real-time facial expression analysis
- Mood detection using TensorFlow.js and face-api.js
- Privacy-first: all processing happens in the browser
- No images stored or transmitted

### 💬 Intelligent Concierge
- AI-powered chat interface
- Personalized strain recommendations based on detected mood
- Interactive product suggestions
- One-click add to cart from recommendations

### 📊 Comprehensive Strain Database
- 13 premium cannabis strains
- Detailed effects, flavors, and THC/CBD content
- Mood-to-strain mapping algorithm
- Sativa, Indica, and Hybrid varieties

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd claude-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

   The AI models will automatically download from CDN on first use (~550KB total).

## 📁 Project Structure

```
claude-site/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx             # Landing page
│   │   ├── store/               # Store page
│   │   ├── cart/                # Shopping cart
│   │   ├── mood-concierge/      # AI mood detection & chat
│   │   └── api/                 # API routes
│   │       ├── recommendations/ # Mood-based recommendations
│   │       └── strains/         # Strain database API
│   ├── components/              # React components
│   │   ├── Navigation.tsx       # Main navigation
│   │   ├── ProductCard.tsx      # Product display card
│   │   ├── MoodDetector.tsx     # Face detection & mood analysis
│   │   └── ChatConcierge.tsx    # AI chat interface
│   ├── lib/                     # Core logic & utilities
│   │   ├── strains.ts          # Cannabis strains database
│   │   ├── products.ts         # Product catalog
│   │   ├── moodAnalysis.ts     # Mood detection logic
│   │   └── store.ts            # Zustand state management
│   └── types/                   # TypeScript type definitions
├── public/
│   └── models/                  # face-api.js ML models (optional, loaded from CDN)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI/ML**:
  - TensorFlow.js
  - face-api.js (facial expression recognition)
- **State Management**: Zustand
- **Icons**: Lucide React

## 🧪 How It Works

### Mood Detection Algorithm

1. **AI Model Loading**: Automatically downloads ML models from CDN on first use (with fallback to local files)
2. **Face Detection**: Uses TinyFaceDetector from face-api.js to locate faces in video stream
3. **Expression Analysis**: Analyzes 7 facial expressions (happy, sad, angry, fearful, disgusted, surprised, neutral)
4. **Mood Mapping**: Converts expressions into mood categories:
   - Happy, Energetic, Relaxed, Focused, Creative, Sleepy, Anxious, Stressed, Neutral
5. **Strain Matching**: Matches detected mood with strains tagged for those moods

### Recommendation Engine

Each strain in the database is tagged with appropriate moods:
- **Sativa strains**: Energetic, Creative, Focused, Happy
- **Indica strains**: Relaxed, Sleepy, Anxious, Stressed
- **Hybrid strains**: Balanced effects for multiple moods

## 🔒 Privacy & Security

- **No server-side processing**: All facial analysis happens in the browser
- **No image storage**: Video frames are processed in real-time and immediately discarded
- **No data transmission**: Facial data never leaves your device
- **Local state**: Shopping cart stored in browser localStorage

## 🛠️ Customization

### Adding New Strains

Edit `src/lib/strains.ts`:

```typescript
{
  id: 'your-strain-id',
  name: 'Strain Name',
  type: 'sativa' | 'indica' | 'hybrid',
  description: 'Description here',
  effects: ['Effect1', 'Effect2'],
  flavors: ['Flavor1', 'Flavor2'],
  thcContent: '15-20%',
  cbdContent: '<1%',
  bestFor: ['happy', 'energetic'],
  imageUrl: '/images/strains/strain.jpg',
}
```

### Adding Products

Edit `src/lib/products.ts`:

```typescript
{
  id: 'prod-id',
  name: 'Product Name',
  strainId: 'strain-id',
  price: 24.99,
  description: 'Product description',
  imageUrl: '/images/products/product.jpg',
  inStock: true,
  quantity: 3,
}
```

### Customizing Mood Analysis

Modify mood detection logic in `src/lib/moodAnalysis.ts`:

```typescript
function mapExpressionToMood(expressions: FacialExpression): MoodType {
  // Customize mood scoring algorithm here
}
```

## 🔌 API Endpoints

### Get Recommendations
```
GET /api/recommendations?mood=happy
POST /api/recommendations
Body: { "mood": "happy" }
```

### Get Strains
```
GET /api/strains
GET /api/strains?type=indica
GET /api/strains?search=blue
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## 🤝 Integrating Real AI Chat

The current chat uses rule-based responses. To integrate with Claude AI or OpenAI:

1. Install SDK:
   ```bash
   npm install @anthropic-ai/sdk
   # or
   npm install openai
   ```

2. Add API key to `.env.local`:
   ```
   ANTHROPIC_API_KEY=your_key_here
   # or
   OPENAI_API_KEY=your_key_here
   ```

3. Update chat logic in `src/components/ChatConcierge.tsx` to call the API

## 📝 License

This project is for educational and demonstration purposes.

## ⚠️ Disclaimer

This is a demo application. Ensure compliance with local cannabis laws and regulations before deploying. Always consume cannabis responsibly and only where legal.

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Order processing and payment integration
- [ ] Admin panel for product management
- [ ] Product images and gallery
- [ ] Reviews and ratings
- [ ] Advanced AI chat with Claude/OpenAI integration
- [ ] Mobile app version
- [ ] Strain effects tracking
- [ ] Personalized recommendations based on purchase history

## 📧 Support

For questions or issues, please open an issue in the repository.

---

Built with 💚 for the cannabis community
