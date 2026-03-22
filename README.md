# Personal Website - Annus Zulfiqar

A modern, clean personal website built with Next.js and Chakra UI, inspired by the Gamma.site template. This site is optimized for deployment on Vercel.

## 🚀 Tech Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Type safety
- **Chakra UI** - Component library for beautiful, accessible UI
- **Vercel** - Hosting and deployment platform

## 📋 Features

- **Hero Section** - Prominent name display
- **Bio Section** - Introduction and research interests
- **Links Section** - Academic and social profile links with emoji icons
- **Publications Section** - Grid layout showcasing research work
- **Responsive Design** - Works seamlessly on all devices
- **Cream/Beige Theme** - Elegant, professional color scheme

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Your Information

Edit `/app/page.tsx` to customize:

1. **Name** - Update the Hero section headings
2. **Bio** - Modify the bio text and links
3. **Social Links** - Update URLs in the Links section
4. **Publications** - Add/edit publications in the Publications section

### Add Publication Images

1. Place your images in the `/public` folder
2. Update the `src` prop in the Image components
3. Example: `src="/your-image.png"`

### Change Colors

Edit `/app/providers.tsx` to modify the theme:

```typescript
const theme = extendTheme({
  colors: {
    cream: '#fef5e7',      // Background color
    darkBorder: '#151617',  // Border color
    accent: '#204C8E',      // Link/accent color
  },
  // ... rest of theme
})
```

### Update Metadata

Edit `/app/layout.tsx` to change:
- Page title
- Meta description
- Other SEO settings

## 🚀 Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Done!** Your site will be live in minutes at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch
- Create preview deployments for pull requests
- Provide deployment URLs for each commit

## 📁 Project Structure

```
personal-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   ├── providers.tsx       # Chakra UI theme provider
│   └── globals.css         # Global styles
├── public/                 # Static assets (images, etc.)
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Adding More Sections

To add new sections, edit `/app/page.tsx`:

```tsx
{/* New Section */}
<VStack spacing={8} align="stretch">
  <Heading as="h2" size="xl">
    New Section Title
  </Heading>
  <Text>Your content here</Text>
</VStack>
```

## 📦 Build for Production

To create a production build locally:

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and Chakra UI
