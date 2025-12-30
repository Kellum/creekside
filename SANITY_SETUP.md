# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS so you can manage all the content on your Creekside RV Park website - including text and images - without touching any code.

## What is Sanity CMS?

Sanity is a content management system (CMS) that provides a visual interface for editing your website content. Think of it like managing an MLS dashboard - it's intuitive and user-friendly.

**What you can do:**
- Edit any text on the website
- Upload and replace any photo
- Add new amenities, FAQs, pricing tiers
- Manage all 7 pages of content
- See changes instantly in the preview

## 🚀 Initial Setup

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Get Started" or "Sign Up"
3. Sign up with GitHub, Google, or email
4. Choose the **FREE plan** (includes everything you need)

### Step 2: Create a New Project

1. Once logged in, click "Create Project"
2. Name your project: **Creekside RV Park**
3. Choose **Production** as the dataset name
4. Note your **Project ID** - you'll need this later

### Step 3: Install Sanity Globally (Optional)

Open your terminal and install the Sanity CLI:

```bash
npm install -g @sanity/cli
```

Login to Sanity:

```bash
sanity login
```

### Step 4: Link Your Project

In the `creekside-site/sanity-studio` directory, update `sanity.config.ts`:

```typescript
export default defineConfig({
  name: 'default',
  title: 'Creekside RV Park',
  projectId: 'YOUR_PROJECT_ID_HERE',  // ← Replace with your actual project ID
  dataset: 'production',
  // ... rest of config
})
```

Also update `/creekside-site/.env`:

```env
PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID_HERE
PUBLIC_SANITY_DATASET=production
PUBLIC_BOOKING_URL=https://your-booking-url.com
```

### Step 5: Deploy Sanity Studio

You have two options:

#### Option A: Deploy to Sanity Cloud (Recommended - Easier)

```bash
cd sanity-studio
npm run deploy
```

This will give you a URL like: `https://creekside-rv.sanity.studio`

You can access this from anywhere to manage your content!

#### Option B: Run Locally

```bash
cd sanity-studio
npm run dev
```

Visit `http://localhost:3333` to access the studio.

## 📝 Using Sanity Studio

### Overview of the Interface

When you open Sanity Studio, you'll see a sidebar with all your content types:

**Site-Wide Settings:**
- **Site Settings** - Phone, email, address, booking URL, social media

**Pages:**
- **Home Page** - Hero, features, gallery, testimonials
- **About Page** - About content and FAQs
- **Accommodations Page** - Different accommodation types
- **Amenities Page** - List of amenities
- **Things to Do Page** - Activities and attractions
- **Rates Page** - Pricing tiers and policies
- **Contact Page** - Contact info and directions

**Content Items:**
- **FAQ Items** - Individual questions and answers
- **Amenity Items** - Individual amenities
- **Pricing Tiers** - Different pricing options
- **Activity Sections** - Things to do sections

### How to Edit Content

#### Editing Text

1. Click on the page or content item in the sidebar
2. Click into any text field
3. Type your changes
4. Click **Publish** button in the bottom right

#### Uploading/Changing Images

1. Find the image field you want to update
2. Click "Upload" or click the existing image
3. Either:
   - Drag and drop a new image
   - Click "Select" to choose from your computer
   - Use the "Hotspot" tool to reposition the focal point
4. Add alt text (important for SEO and accessibility)
5. Click **Publish**

**Image Tips:**
- Use high-quality images (at least 1920px wide for hero images)
- Compress images before uploading (use tinypng.com)
- Always add alt text describing the image

#### Managing Lists

For things like amenities, FAQs, or activities:

1. Click the "+Add" button
2. Fill in the required fields
3. Use the drag handle (⋮⋮) to reorder items
4. Click Publish

### Common Editing Tasks

#### Update the Hero Image on Homepage

1. Click **Home Page** in sidebar
2. Scroll to "Hero Background Image"
3. Click the image → Select new image
4. Publish

#### Add a New Amenity

1. Click **Amenity Item** in sidebar
2. Click "+ Create new Amenity Item"
3. Fill in:
   - Amenity Name
   - Optional icon/image
   - Category
4. Publish
5. Go to **Amenities Page** and add it to the list

#### Update Pricing

1. Click **Pricing Tier** in sidebar
2. Select the tier you want to edit
3. Update price, features, etc.
4. Publish

#### Add/Edit FAQs

1. Click **FAQ Item** in sidebar
2. Create new or edit existing
3. Enter question and answer
4. Set display order (lower numbers appear first)
5. Publish
6. Make sure it's added to the About Page

## 🔄 Publishing Flow

**Important**: Changes are not live until you click **Publish**!

1. Make your edits
2. Click "Review changes" to see what changed
3. Click **Publish** button
4. Changes will appear on the website within 1-2 minutes

If your site is set up with webhooks (recommended), it will automatically rebuild when you publish. Otherwise, you may need to manually trigger a redeploy.

## 🖼️ Image Best Practices

### Image Sizes

- **Hero Images**: 1920x1080px or larger
- **Feature Cards**: 800x600px
- **Gallery Images**: 1200x800px
- **Icons**: 512x512px (square)

### File Formats

- **Photos**: JPG (smaller file size)
- **Graphics/Logos**: PNG (transparent backgrounds)
- **Icons**: SVG (scalable) or PNG

### Optimization

Before uploading images:
1. Resize to appropriate dimensions
2. Compress at tinypng.com or similar
3. Keep file sizes under 500KB when possible

## 🎨 Content Guidelines

### Writing Best Practices

- Keep headings clear and concise
- Use short paragraphs (2-3 sentences)
- Write in a friendly, welcoming tone
- Avoid industry jargon
- Include clear calls-to-action

### SEO Tips

- Add descriptive alt text to all images
- Use relevant keywords naturally in text
- Keep page titles under 60 characters
- Write unique descriptions for each page

## 🔐 User Management

Need to give someone else access?

1. Go to your Sanity project dashboard
2. Click "Settings" → "Members"
3. Click "Invite members"
4. Enter their email
5. Choose their role:
   - **Administrator**: Full access
   - **Editor**: Can edit but not change settings
   - **Viewer**: Read-only access

Free tier allows up to **3 users**.

## 🆘 Troubleshooting

### Changes not appearing on website

1. Make sure you clicked **Publish** (not just Save)
2. Wait 2-3 minutes for the site to rebuild
3. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
4. Check if webhooks are configured correctly

### Can't upload images

1. Check image file size (should be under 10MB)
2. Make sure you're using supported format (JPG, PNG, WebP)
3. Try a different browser
4. Clear your browser cache

### Lost access to Sanity Studio

1. Check your bookmarks for the studio URL
2. Go to sanity.io and log in
3. Find your project in the dashboard
4. Click "Open Studio"

## 📞 Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Support](https://www.sanity.io/contact/support)
- [Community Slack](https://slack.sanity.io/)

## 🎯 Quick Reference

| Task | Steps |
|------|-------|
| Edit text | Click page → Edit field → Publish |
| Change image | Click image → Upload → Publish |
| Add FAQ | FAQ Item → Create new → Publish |
| Update pricing | Pricing Tier → Edit → Publish |
| Reorder items | Use drag handle (⋮⋮) → Publish |

---

**Remember**: You have complete control over all text and images on the site. Don't be afraid to experiment - you can always undo changes or revert to previous versions!
