# OG Image Creation Instructions

## Required Images

You need to create the following Open Graph images for optimal social media sharing:

### Main OG Image
**File**: `/public/og-image.png`
- **Size**: 1200 x 630 pixels
- **Format**: PNG (or JPG)
- **Purpose**: Default social media share image

### Page-Specific OG Images (Optional but Recommended)

Create these in `/public/og-images/` folder:

1. **pricing.png** - Pricing page
2. **features.png** - Features page
3. **customers.png** - Customers/References page
4. **about.png** - About Us page
5. **contact.png** - Contact page

## Design Guidelines

### Layout
- **Safe Zone**: Keep important content within 1200x600px center area
- **Text**: Large, bold, readable fonts (60pt+)
- **Logo**: Include Bravioo logo
- **Background**: Use brand colors (#3A9355 green, #F7F5F0 cream)

### Content Template

```
[Bravioo Logo - Top Left]

[Main Heading]
Large, bold text (2-3 words max)

[Subheading/Description]
Supporting text (1 short sentence)

[Visual Element]
Icon, illustration, or screenshot

[Website URL - Bottom]
bravioo.com
```

### Brand Elements

**Colors**:
- Primary Green: `#3A9355`
- Cream Background: `#F7F5F0`
- Dark Text: `#1F2937`
- White: `#FFFFFF`

**Fonts**:
- Heading: Reddit Sans Bold
- Body: Reddit Sans Regular

**Logo Location**:
- Use: `/public/Bravioo_logo.png` or `/public/Bravioo_logotype-green.png`

## Example Content for Each Page

### Home (og-image.png)
```
Headline: "Transform Your Workplace Culture"
Subtext: "Employee recognition & rewards platform"
Visual: Mascot dolphin or team illustration
```

### Pricing (pricing.png)
```
Headline: "Simple, Transparent Pricing"
Subtext: "Starting at $5 per user/month"
Visual: Pricing tiers or money icon
```

### Features (features.png)
```
Headline: "Powerful Recognition Platform"
Subtext: "Everything you need in one place"
Visual: Feature icons or dashboard preview
```

### Customers (customers.png)
```
Headline: "Trusted by 500+ Companies"
Subtext: "Join leading organizations worldwide"
Visual: Customer logos or testimonial
```

### About (about.png)
```
Headline: "Building Better Workplaces"
Subtext: "Our mission & story"
Visual: Team photo or company vision
```

### Contact (contact.png)
```
Headline: "Let's Talk"
Subtext: "Get in touch with our team"
Visual: Contact illustration or office
```

## Tools for Creation

### Design Tools
1. **Figma** (Recommended) - https://figma.com
   - Professional, collaborative
   - Templates available

2. **Canva** - https://canva.com
   - Easy to use
   - OG image templates

3. **Adobe Photoshop**
   - Professional tool
   - Full control

### Quick Options
1. **Social Image Maker** - https://testimonial.to/social-image-maker
2. **OG Image Generator** - https://www.opengraph.xyz/
3. **Bannerbear** - https://www.bannerbear.com/

### AI Tools
1. **Midjourney** - For background images
2. **DALL-E** - For illustrations
3. **Stable Diffusion** - For custom graphics

## Testing OG Images

After creating and uploading:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **OpenGraph.xyz**: https://www.opengraph.xyz/url/{your-url}

## Quick Template Using Figma

1. Create 1200x630px frame
2. Add Bravioo brand colors as background
3. Place logo (top-left, 60px margin)
4. Add main heading (center, 72pt Reddit Sans Bold)
5. Add subheading (below heading, 36pt Reddit Sans Regular)
6. Add visual element (icon, illustration, or screenshot)
7. Add website URL (bottom-right, 24pt)
8. Export as PNG (2x resolution for retina)

## File Placement

Once created, place files here:
```
/public/
  ├── og-image.png                 (Main/default)
  └── og-images/
      ├── pricing.png
      ├── features.png
      ├── customers.png
      ├── about.png
      └── contact.png
```

## Updating Code

Images are already configured in the code. Just create and upload them to the locations above.

Current configuration in:
- `app/layout.tsx` - Main OG image
- `lib/metadata-helpers.ts` - Page-specific images
- Individual page metadata

## Checklist

- [ ] Main og-image.png created (1200x630)
- [ ] Pricing OG image
- [ ] Features OG image
- [ ] Customers OG image
- [ ] About OG image
- [ ] Contact OG image
- [ ] All images uploaded to correct location
- [ ] Tested with Facebook Debugger
- [ ] Tested with Twitter Card Validator
- [ ] Tested with LinkedIn Inspector
- [ ] Images appear correctly when sharing

## Need Help?

If you need design assistance:
- **Fiverr**: Hire a designer for $20-50
- **Upwork**: Professional designers
- **99designs**: Design contest
- **Contact**: design@bravioo.com

---

**Note**: Until custom OG images are created, the system will use a fallback image. Creating these images should be a priority for better social media presence.


