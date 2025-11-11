# Admin Dashboard Guide

## 🔐 Accessing the Admin Dashboard

The admin dashboard allows you to manage your cannabis store products and strains.

**Admin URL:** `/admin/login`

### Default Credentials
- **Password:** `changeme123` (set in `.env.local`)

### Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Set your admin password in `.env.local`:
```env
ADMIN_PASSWORD=your-secure-password-here
SESSION_SECRET=your-secret-key-here
```

3. Generate a secure session secret:
```bash
openssl rand -base64 32
```

## 📊 Dashboard Features

### Main Dashboard
- View overview statistics (total products, strains, inventory status)
- Quick access to add new products or strains
- Recent activity summary

### Products Management (`/admin/dashboard/products`)

**Features:**
- View all products in a table format
- See product details: name, strain, price, stock status
- Edit existing products
- Delete products (coming soon)
- Add new products (coming soon)

**Product Fields:**
- Name (e.g., "Awaken Etched Disposable - Durban Poison")
- Strain ID (must match a strain from the strains database)
- Price (in dollars)
- Description
- Image URL (path to product image)
- Quantity (ml)
- In Stock (checkbox)

### Strains Management (`/admin/dashboard/strains`)

**Features:**
- View all cannabis strains
- Filter by type (sativa, indica, hybrid)
- See strain details: effects, flavors, THC content, mood mappings
- Edit existing strains (coming soon)
- Delete strains (coming soon)
- Add new strains (coming soon)

**Strain Fields:**
- Name (e.g., "Durban Poison")
- Type (sativa, indica, or hybrid)
- Description
- Effects (array of effect strings)
- Flavors (array of flavor strings)
- THC Content (e.g., "17-24%")
- CBD Content (e.g., "<1%")
- Best For (mood categories for AI recommendations)
- Image URL

## 🎨 Image Management

### Product Images
Images are stored in `public/images/products/`:
- `awaken-disposable.webp`
- `awaken-cartridge.webp`
- `travelers-disposable.webp`
- `travelers-cartridge.webp`
- `gobbles-gummies.webp`

### Strain Images
Images are stored in `public/images/strains/`:
- One image per strain (e.g., `durban-poison.webp`)

**To add new images:**
1. Place image files in the appropriate directory
2. Reference them using `/images/products/filename.webp` or `/images/strains/filename.webp`

## 🔒 Security

### Session Management
- Sessions last 24 hours
- Logout required to end session early
- Sessions stored in secure HTTP-only cookies

### Password Security
**IMPORTANT:** Change the default password immediately!

1. Edit `.env.local`
2. Set `ADMIN_PASSWORD` to a strong password
3. Restart your development server

### Production Deployment
For production, ensure:
1. Strong admin password
2. Unique session secret
3. HTTPS enabled
4. Consider adding two-factor authentication

## 🚀 Future Enhancements

Coming soon:
- [ ] Create new products via UI
- [ ] Create new strains via UI
- [ ] Image upload functionality
- [ ] Bulk import/export (CSV)
- [ ] Order management
- [ ] Analytics dashboard
- [ ] Multi-user support with roles
- [ ] Product variants
- [ ] Inventory tracking

## 📝 Editing Data Manually

Currently, products and strains are stored in TypeScript files:
- Products: `src/lib/products.ts`
- Strains: `src/lib/strains.ts`

You can edit these files directly if needed, or use the admin dashboard's edit functionality.

## 🐛 Troubleshooting

### Can't login
- Check `.env.local` has correct `ADMIN_PASSWORD`
- Clear browser cookies
- Restart dev server after changing environment variables

### Changes not appearing
- Check if files were saved correctly
- Restart Next.js dev server
- Clear browser cache

### Images not loading
- Verify image files exist in `public/images/`
- Check image paths in product/strain data
- Ensure image format is supported (webp, jpg, png)

## 💡 Tips

1. **Backup before editing**: Always backup your data files before making changes
2. **Test in development**: Test changes in dev environment before deploying
3. **Consistent naming**: Use kebab-case for IDs (e.g., `durban-poison`)
4. **Image optimization**: Use WebP format for better performance
5. **Mood mappings**: Ensure strain mood mappings align with your AI concierge recommendations

## 🆘 Support

For issues or questions:
1. Check the main README.md
2. Review code comments in admin components
3. Check browser console for errors
4. Review server logs for API errors
