# Portfolio Customization Guide

## Adding Your Avatar/Profile Image

To add your own profile image:

1. **Add your image to the `public` folder:**
   - Place your image as `public/avatar.jpg` (or `.png`, `.webp`)
   - Recommended size: 400x400px or larger (square format)
   - Formats: JPG, PNG, or WebP (WebP recommended for best performance)

2. **Update `components/hero.tsx`:**
   - Find the avatar section (around line 180-190)
   - Replace the placeholder div with:
   
   ```tsx
   <Image
     src="/avatar.jpg"
     alt="Your Name - Full Stack Developer"
     fill
     className="object-cover"
     priority
     sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
   />
   ```

3. **Make sure to import Image at the top:**
   ```tsx
   import Image from "next/image";
   ```

## Performance Optimization Tips

- Use WebP format for images (smaller file size)
- Keep avatar image under 200KB
- Use Next.js Image component for automatic optimization
- The `priority` prop ensures the avatar loads immediately

## Customization Checklist

- [ ] Add your avatar image
- [ ] Update contact information in `components/contact.tsx`
- [ ] Add your GitHub/LinkedIn URLs
- [ ] Update email addresses
- [ ] Add project links (GitHub repos and live demos)
- [ ] Customize colors in `tailwind.config.ts` if desired
- [ ] Update meta tags in `app/layout.tsx` with your info

## Tech Stack Used

- Next.js 14 (App Router) - Server Components by default
- TypeScript - Type safety
- Tailwind CSS - Utility-first styling
- Framer Motion - Smooth animations
- Lucide React - Modern icons
- next-themes - Dark/Light mode

## Performance Features

✅ Server Components (default)
✅ Optimized images with next/image
✅ Lazy-loaded animations
✅ SEO-friendly metadata
✅ Fast page loads
✅ Smooth scroll behavior

