# DW Home Solutions - Three.js Homepage

A stunning, responsive homepage for DW Home Solutions home renovation company built with Next.js, Three.js, and Tailwind CSS. Features an interactive 3D scene showcasing kitchen and bathroom spaces with smooth animations and modern UI design.

## 🌟 Features

### 3D Interactive Experience
- **Three.js Integration**: Immersive 3D scene of modern kitchen and bathroom spaces
- **Camera Controls**: Automatic rotation with mouse movement and scroll interactions
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Performance Optimized**: Lazy loading and optimized rendering for smooth performance

### Modern UI/UX
- **Responsive Design**: Perfect viewing experience across all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Components**: Hover effects on service cards and buttons
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Services Showcase
- **Bathroom Fitting**: Complete renovations with premium fixtures
- **Kitchen Renovation**: Contemporary designs and quality appliances
- **Tiling Services**: Professional floor, wall, and backsplash installation
- **Plumbing**: Expert installations, repairs, and emergency services
- **Home Upgrades**: Comprehensive improvement services

### Business Features
- **Contact Form**: Interactive form with service selection
- **Quote Requests**: Easy-to-use quote request system
- **Company Information**: About section with stats and process overview
- **Emergency Services**: 24/7 emergency contact options

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **3D Graphics**: Three.js with React Three Fiber
- **3D Helpers**: React Three Drei for components and utilities
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for modern icons
- **TypeScript**: Full type safety and better development experience

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd refine-spaces-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🛠️ Development

### Project Structure
```
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main homepage component
├── components/
│   ├── 3D/
│   │   └── KitchenBathroomScene.tsx  # Three.js 3D scene
│   ├── Header.tsx           # Navigation and theme toggle
│   ├── HeroSection.tsx      # Hero with 3D background
│   ├── ServicesSection.tsx  # Interactive services showcase
│   ├── AboutSection.tsx     # Company information
│   ├── ContactSection.tsx   # Contact form and information
│   ├── Footer.tsx           # Footer with links and contact
│   ├── LoadingSpinner.tsx   # Loading component
│   └── ThemeProvider.tsx    # Theme context provider
└── public/                  # Static assets
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### Colors and Theming
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    // Your primary brand colors
  },
  secondary: {
    // Your secondary brand colors
  }
}
```

#### 3D Scene
Modify `components/3D/KitchenBathroomScene.tsx` to:
- Add new 3D models
- Change materials and lighting
- Adjust camera positions
- Add interactive elements

#### Content
Update component content in:
- `components/ServicesSection.tsx` - Service offerings
- `components/AboutSection.tsx` - Company information
- `components/ContactSection.tsx` - Contact details

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Yellow accent (`#eab308` to `#ca8a04`)
- **Dark Mode**: Custom dark grays for better contrast

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good contrast ratios

### Components
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Cards**: Service cards with hover animations
- **Forms**: Styled inputs with focus states
- **Loading**: Custom animated loading spinner

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions and stack layouts
- **Tablet**: Adjusted grid systems and spacing
- **Desktop**: Full-width layouts with hover effects
- **Large Screens**: Maximum width containers for readability

## ⚡ Performance

### Optimizations
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Suspense boundaries for 3D components
- **Image Optimization**: Next.js Image component ready
- **Bundle Size**: Optimized Three.js imports

### 3D Performance
- **Efficient Geometries**: Simple geometries for fast rendering
- **Optimized Materials**: Standard materials with good performance
- **LOD Systems**: Ready for level-of-detail implementations
- **Memory Management**: Proper cleanup and disposal

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for:
```bash
NEXT_PUBLIC_CONTACT_EMAIL=your-email@company.com
NEXT_PUBLIC_PHONE_NUMBER=your-phone-number
NEXT_PUBLIC_COMPANY_ADDRESS=your-address
```

### SEO and Meta Tags
Configure in `app/layout.tsx`:
- Page title and description
- Open Graph tags
- Keywords and author information

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deployment Platforms
- **Vercel**: Automatic deployment with Git integration
- **Netlify**: Static site deployment
- **AWS/GCP**: Custom server deployment

## 📞 Support

For questions or support:
- **Email**: Contact through the website form
- **Documentation**: Check component files for detailed implementation
- **Issues**: Create issues for bugs or feature requests

## 📄 License

This project is proprietary software for DW Home Solutions.

---

**Built with ❤️ for DW Home Solutions - Transforming homes, one space at a time.** 