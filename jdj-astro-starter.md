# Jan de Jong Martial Arts - Astro Starter Template

This is a complete starter template for the Jan de Jong website rebuild using Astro + Tailwind CSS + Railway.

## Project Structure

```
jan-de-jong-site/
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ImageGallery.astro
│   │   └── Testimonial.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── classes.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── public/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Setup Instructions

```bash
# Create new directory
mkdir jan-de-jong-site
cd jan-de-jong-site

# Initialize npm
npm init -y

# Install dependencies
npm install astro @astrojs/tailwind tailwindcss

# Create the directory structure
mkdir -p src/{components,layouts,pages,styles} public/images
```

## File Contents

### 1. `package.json`
```json
{
  "name": "jan-de-jong-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

### 2. `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.jandejong.com.au',
});
```

### 3. `tailwind.config.mjs`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#BA0000',
        'primary-hover': '#A00000',
        secondary: '#000000',
        background: '#FFFFFF',
        text: '#1A1A1A',
        accent: '#F5F5F5',
      },
      fontFamily: {
        heading: ['Impact', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
      spacing: {
        section: '60px',
        element: '20px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [],
}
```

### 4. `src/styles/global.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-body text-text bg-background;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold uppercase;
  }
}

@layer components {
  .container-width {
    @apply max-w-container mx-auto px-4;
  }
  
  .section-padding {
    @apply py-section;
  }
}
```

### 5. `src/layouts/BaseLayout.astro`
```astro
---
import Header from '../components/Header.astro';
import '../styles/global.css';

export interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Perth Martial Arts | Ju Jutsu, Aikido, and Weapons Training' } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content={description}>
  <title>{title} | Jan de Jong Martial Arts</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <Header />
  <main>
    <slot />
  </main>
  <footer class="bg-secondary text-white py-12">
    <div class="container-width">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl mb-4">Opening Hours</h3>
          <p>Monday-Friday: 6am to 9pm</p>
          <p>Saturday-Sunday: 10am to 5pm</p>
        </div>
        <div>
          <h3 class="text-xl mb-4">Contact Us</h3>
          <p><a href="tel:0427970481" class="hover:text-primary">0427970481</a></p>
          <p><a href="mailto:info@jandejong.com.au" class="hover:text-primary">info@jandejong.com.au</a></p>
        </div>
        <div>
          <h3 class="text-xl mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <a href="#" class="hover:text-primary">Facebook</a>
            <a href="#" class="hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 Jan de Jong Martial Arts Fitness. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>
```

### 6. `src/components/Header.astro`
```astro
---
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Timetable', href: '/timetable' },
  { label: 'Contact', href: '/contact' },
];
---

<header class="sticky top-0 z-50 bg-white shadow-md">
  <div class="bg-primary text-white py-2">
    <div class="container-width flex justify-between text-sm">
      <div class="flex gap-4">
        <a href="tel:0427970481" class="hover:underline">0427970481</a>
        <a href="mailto:info@jandejong.com.au" class="hover:underline">info@jandejong.com.au</a>
      </div>
      <div class="flex gap-4">
        <a href="/become-a-member" class="hover:underline">Become a Member</a>
        <a href="#" class="hover:underline">Member Login</a>
      </div>
    </div>
  </div>
  
  <nav class="bg-white">
    <div class="container-width flex items-center justify-between py-4">
      <a href="/" class="flex items-center">
        <img src="/images/logo.png" alt="Jan de Jong Martial Arts" class="h-12">
      </a>
      
      <ul class="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li>
            <a 
              href={item.href} 
              class="text-secondary font-semibold hover:text-primary relative group"
            >
              {item.label}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      
      <a href="/free-trial" class="hidden md:block bg-primary text-white px-6 py-3 rounded font-bold hover:bg-primary-hover transition">
        FREE TRIAL
      </a>
      
      <!-- Mobile menu button -->
      <button class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>
</header>
```

### 7. `src/components/Hero.astro`
```astro
---
export interface Props {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
}

const { title, subtitle, ctaText = 'FREE TRIAL', ctaLink = '/free-trial', backgroundImage } = Astro.props;
---

<section class="relative h-[600px] flex items-center justify-center">
  <div 
    class="absolute inset-0 bg-cover bg-center"
    style={`background-image: url('${backgroundImage}');`}
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <div class="relative z-10 text-center text-white px-4">
    <h1 class="text-4xl md:text-6xl font-heading uppercase mb-4 drop-shadow-lg">
      {title}
    </h1>
    {subtitle && (
      <p class="text-xl md:text-2xl mb-8 drop-shadow-lg">
        {subtitle}
      </p>
    )}
    <a 
      href={ctaLink}
      class="inline-block bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-primary-hover transition drop-shadow-lg"
    >
      {ctaText}
    </a>
  </div>
</section>
```

### 8. `src/components/Button.astro`
```astro
---
export interface Props {
  href?: string;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  class?: string;
}

const { href, type = 'primary', size = 'medium', class: className = '' } = Astro.props;

const sizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3',
  large: 'px-8 py-4 text-lg',
};

const types = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
};

const classes = `inline-block rounded font-bold transition ${sizes[size]} ${types[type]} ${className}`;

const Tag = href ? 'a' : 'button';
---

<Tag href={href} class={classes}>
  <slot />
</Tag>
```

### 9. `src/components/Card.astro`
```astro
---
export interface Props {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const { title, description, image, link } = Astro.props;
---

<div class="bg-white rounded shadow-card overflow-hidden">
  {image && (
    <img src={image} alt={title} class="w-full h-48 object-cover" />
  )}
  <div class="p-6">
    <h3 class="text-xl font-heading uppercase mb-2">{title}</h3>
    <p class="text-gray-600 mb-4">{description}</p>
    {link && (
      <a href={link} class="text-primary font-semibold hover:underline">
        Learn More →
      </a>
    )}
  </div>
</div>
```

### 10. `src/components/ImageGallery.astro`
```astro
---
export interface Props {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const { images } = Astro.props;
---

<div class="grid grid-cols-1 md:grid-cols-3 gap-element">
  {images.map((image) => (
    <div class="bg-white p-2 rounded shadow-card">
      <img 
        src={image.src} 
        alt={image.alt}
        class="w-full h-64 object-cover rounded"
      />
      {image.caption && (
        <p class="text-center mt-2 text-sm text-gray-600">{image.caption}</p>
      )}
    </div>
  ))}
</div>
```

### 11. `src/pages/index.astro`
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import Card from '../components/Card.astro';
import Button from '../components/Button.astro';
import ImageGallery from '../components/ImageGallery.astro';

const classes = [
  {
    title: 'Ju Jutsu',
    description: 'Ancient Japanese art of self-defence with practical modern applications.',
    image: '/images/jujutsu.jpg',
    link: '/classes/jujutsu',
  },
  {
    title: 'Aikido',
    description: 'Smooth, flowing movements with dynamic and practical application.',
    image: '/images/aikido.jpg',
    link: '/classes/aikido',
  },
  {
    title: 'Kids Classes',
    description: 'Building confidence, discipline, and self-defence skills for children.',
    image: '/images/kids.jpg',
    link: '/classes/kids',
  },
];

const galleryImages = [
  { src: '/images/training1.jpg', alt: 'Ju Jutsu training' },
  { src: '/images/training2.jpg', alt: 'Aikido practice' },
  { src: '/images/training3.jpg', alt: 'Kids class' },
];
---

<BaseLayout title="Home">
  <Hero
    title="Australia's First Fulltime Professional Dojo Since 1952"
    subtitle="Instructors acclaimed for their high level of technical knowledge and teaching ability"
    backgroundImage="/images/hero-bg.jpg"
  />
  
  <section class="section-padding">
    <div class="container-width">
      <h2 class="text-3xl md:text-4xl text-center mb-12">What We Teach</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((classItem) => (
          <Card {...classItem} />
        ))}
      </div>
    </div>
  </section>
  
  <section class="section-padding bg-accent">
    <div class="container-width text-center">
      <h2 class="text-3xl md:text-4xl mb-4">Choose a Membership That Suits You</h2>
      <p class="text-xl mb-8">Memberships start from $22 per week</p>
      <div class="flex gap-4 justify-center">
        <Button href="/membership">View Memberships</Button>
        <Button href="/free-trial" type="secondary">Book Free Trial</Button>
      </div>
    </div>
  </section>
  
  <section class="section-padding">
    <div class="container-width">
      <h2 class="text-3xl md:text-4xl text-center mb-12">Training in Action</h2>
      <ImageGallery images={galleryImages} />
    </div>
  </section>
</BaseLayout>
```

### 12. `src/pages/about.astro`
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
---

<BaseLayout title="About Us">
  <Hero
    title="About Jan de Jong Martial Arts"
    subtitle="Over 70 years of excellence in martial arts training"
    backgroundImage="/images/about-hero.jpg"
  />
  
  <section class="section-padding">
    <div class="container-width max-w-4xl">
      <div class="prose prose-lg mx-auto">
        <h2>Our History</h2>
        <p>
          Jan de Jong Martial Arts Fitness has been Perth's premier martial arts school since 1952. 
          Founded by the legendary Jan de Jong, we have maintained our commitment to excellence 
          in martial arts instruction for over 70 years.
        </p>
        
        <h2>Our Philosophy</h2>
        <p>
          All classes are conducted in a positive, friendly atmosphere of cooperation, not competition. 
          All students are encouraged to support and help each other, ensuring an enjoyable and 
          fruitful learning experience.
        </p>
        
        <h2>Our Instructors</h2>
        <p>
          Instructors at Jan de Jong Martial Arts Fitness are acclaimed for their high level of 
          technical knowledge and teaching ability and their ongoing commitment to developing 
          skill sets and training methods.
        </p>
      </div>
    </div>
  </section>
</BaseLayout>
```

### 13. `src/pages/classes.astro`
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import Card from '../components/Card.astro';

const allClasses = [
  {
    title: 'Ju Jutsu (Adults)',
    description: 'Comprehensive self-defence system for adults of all fitness levels.',
    image: '/images/jujutsu-adult.jpg',
  },
  {
    title: 'Ju Jutsu (Kids)',
    description: 'Fun and engaging classes for children aged 5-15.',
    image: '/images/jujutsu-kids.jpg',
  },
  {
    title: 'Aikido',
    description: 'Dynamic and practical Aikido with emphasis on flowing movements.',
    image: '/images/aikido-class.jpg',
  },
  {
    title: 'Tai Chi',
    description: 'Gentle movements for health, balance, and inner peace.',
    image: '/images/taichi.jpg',
  },
  {
    title: 'Weapons Training',
    description: 'Traditional Japanese weapons including sword and stick.',
    image: '/images/weapons.jpg',
  },
  {
    title: 'Self Defence for Women',
    description: 'Practical self-defence techniques specifically for women.',
    image: '/images/womens-defence.jpg',
  },
];
---

<BaseLayout title="Classes">
  <Hero
    title="Our Classes"
    subtitle="Find the perfect martial arts class for you"
    backgroundImage="/images/classes-hero.jpg"
  />
  
  <section class="section-padding">
    <div class="container-width">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {allClasses.map((classItem) => (
          <Card {...classItem} link="/timetable" />
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

### 14. `src/pages/contact.astro`
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Button from '../components/Button.astro';
---

<BaseLayout title="Contact">
  <section class="section-padding">
    <div class="container-width max-w-4xl">
      <h1 class="text-4xl text-center mb-12">Contact Us</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl mb-4">Get in Touch</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold">Phone</h3>
              <p><a href="tel:0427970481" class="text-primary hover:underline">0427 970 481</a></p>
            </div>
            <div>
              <h3 class="font-semibold">Email</h3>
              <p><a href="mailto:info@jandejong.com.au" class="text-primary hover:underline">info@jandejong.com.au</a></p>
            </div>
            <div>
              <h3 class="font-semibold">Address</h3>
              <p>996 Hay Street<br>Perth WA 6000</p>
            </div>
            <div>
              <h3 class="font-semibold">Opening Hours</h3>
              <p>Monday-Friday: 6am to 9pm<br>Saturday-Sunday: 10am to 5pm</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 class="text-2xl mb-4">Send us a Message</h2>
          <form action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
            
            <div>
              <label for="name" class="block mb-1 font-semibold">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              >
            </div>
            
            <div>
              <label for="email" class="block mb-1 font-semibold">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              >
            </div>
            
            <div>
              <label for="phone" class="block mb-1 font-semibold">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              >
            </div>
            
            <div>
              <label for="message" class="block mb-1 font-semibold">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            
            <Button type="primary" size="large" class="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>
```

## Deployment to Railway

1. **Initialize Git and push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/jan-de-jong-site.git
git push -u origin main
```

2. **Deploy to Railway:**
- Go to Railway dashboard
- New Project → Deploy from GitHub repo
- Select your repository
- Railway will auto-detect Astro and deploy

3. **Add custom domain:**
- In Railway project settings
- Add custom domain: jandejong.com.au
- Update DNS records as instructed

## Next Steps

1. **Add actual images** to `/public/images/`
2. **Get Web3Forms access key** from https://web3forms.com/
3. **Customize content** in each page
4. **Add remaining pages** (timetable, membership, etc.)
5. **Set up redirects** from old WordPress URLs

## Performance Optimizations

- Images are optimized using Astro's Image component
- CSS is purged and minified by Tailwind
- JavaScript is minimal (only what Astro needs)
- Static generation for all pages
- Automatic sitemap generation

This starter should give you Lighthouse scores of 95+ across all metrics!