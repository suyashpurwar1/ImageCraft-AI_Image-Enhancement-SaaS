# ImageCraft - AI Image Enhancement SaaS Platform

Build an advanced AI image SaaS platform with robust image processing, secure payments, advanced search, and AI features like restoration, recoloring, object removal, generative filling and background removal.

## ⚙️ Tech Stack

- Next.js : React framework
- TypeScript
- MongoDB : Database
- Clerk : Authentication and user management platform
- Cloudinary : Cloud-based image and video management solution.
- Stripe : Payment processing platform for online transactions
- Shadcn : Library for rapid UI development
- TailwindCSS : Utility-first CSS framework

## 🔋 Features

- **Authentication and Authorization**: Secure user access with seamless registration, login, and route protection.
- **Community Image Gallery**: Explore a curated gallery of user transformations with ease, featuring intuitive pagination for effortless navigation.
- **Advanced Image Search**: Quickly find images based on content or objects present within them, powered by advanced search algorithms.
- **Image Restoration**: Bring old or damaged images back to life effortlessly with powerful restoration tools.
- **Image Enhancement**: Elevate the quality of images with enhancement features that improve clarity and detail.
- **Object Removal and Background Removal**: Clean up images by removing unwanted objects and extracting objects from backgrounds with precision.
- **Customizable Image Effects**: Add customizable effects to images, including recoloring and generative filling, to enhance their visual appeal.
- **Download Transformed Images**: Save and share AI-transformed images conveniently with downloadable options.
- **Transformation Management**: Manage transformations easily, with control over deletion and updates.
- **Credits System**: Earn or purchase credits for image transformations, ensuring seamless access to premium features.
- **Profile Dashboard**: Access transformed images and credit information conveniently from your personalized profile page.
- **Secure Credit Purchases**: Purchase credits securely via Stripe for uninterrupted access to premium features.
- **Responsive UI/UX**: Enjoy a seamless experience across devices with a user-friendly interface.

### Environment Variable
```bash
# Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Clerk Webhooks Secret
WEBHOOK_SECRET

#MongoDB
MONGODB_URL

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

#STRIPE
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

#Other
NEXT_PUBLIC_SERVER_URL
```

### Cloning the Repository
```bash
git clone https://github.com/suyashpurwar1/ImageCraft-AI_Image-Enhancement-SaaS
cd ImageCraft-AI_Image-Enhancement-SaaS
```

### Installtion
Install the project dependencies using npm:
``` bash
npm install
```

### Running the Project
``` bash
npm run dev
```

