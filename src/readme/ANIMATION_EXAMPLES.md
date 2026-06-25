/\*\*

- Animation Examples - Framer Motion & Swiper
-
- Framer Motion: Scroll animations and general motion effects
- Swiper: Advanced carousel/slider with auto-play
  \*/

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// ============================================
// 1. SCROLL FADE-IN ANIMATIONS
// ============================================
export function ScrollFadeExample() {
return (
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }} >
Fades in when scrolled into view
</motion.div>
);
}

// ============================================
// 2. SCROLL WITH STAGGER (Multiple Items)
// ============================================
export function ScrollStaggerExample() {
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

return (
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={{
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }} >
{items.map((item) => (
<motion.div
key={item}
variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }} >
{item}
</motion.div>
))}
</motion.div>
);
}

// ============================================
// 3. PARALLAX SCROLL EFFECT
// ============================================
export function ParallaxExample() {
return (
<div style={{ perspective: '1200px' }}>
<motion.div
style={{ y: 0 }}
initial={{ y: 0 }}
whileInView={{ y: 100 }}
transition={{ duration: 0.8 }} >
Background moves slower (parallax effect)
</motion.div>
</div>
);
}

// ============================================
// 4. ROTATING SCROLL ANIMATION
// ============================================
export function RotatingScrollExample() {
return (
<motion.div
initial={{ rotate: 0, opacity: 0 }}
whileInView={{ rotate: 360, opacity: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
style={{ width: '100px', height: '100px', background: 'blue' }}
/>
);
}

// ============================================
// 5. AUTO-SLIDE CAROUSEL WITH FRAMER MOTION
// ============================================
export function AutoSlideExample() {
const [current, setCurrent] = React.useState(0);
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

React.useEffect(() => {
const timer = setInterval(() => {
setCurrent((prev) => (prev + 1) % images.length);
}, 3000); // Change every 3 seconds
return () => clearInterval(timer);
}, [images.length]);

return (
<div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
{images.map((img, idx) => (
<motion.img
key={idx}
src={img}
animate={{ opacity: idx === current ? 1 : 0 }}
transition={{ duration: 0.5 }}
style={{ position: 'absolute' }}
/>
))}
</div>
);
}

// ============================================
// 6. SWIPER AUTO-PLAY CAROUSEL
// ============================================
export function SwiperAutoPlayExample() {
return (
<Swiper
modules={[Autoplay, Navigation, Pagination]}
autoplay={{ delay: 3000, disableOnInteraction: false }}
navigation
pagination={{ clickable: true }}
loop
slidesPerView={1} >
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
);
}

// ============================================
// 7. BOUNCING SCROLL ANIMATION
// ============================================
export function BouncingScrollExample() {
return (
<motion.div
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
viewport={{ once: true }}
style={{ width: '80px', height: '80px', background: 'red' }}
/>
);
}

// ============================================
// 8. HOVER SCALE ANIMATION
// ============================================
export function HoverScaleExample() {
return (
<motion.button
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
transition={{ type: 'spring', stiffness: 400, damping: 17 }} >
Hover me!
</motion.button>
);
}

// ============================================
// 9. SWIPER WITH CUSTOM EFFECTS
// ============================================
export function SwiperCustomExample() {
return (
<Swiper
modules={[Autoplay, Navigation]}
autoplay={{ delay: 4000 }}
effect="coverflow"
coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
spaceBetween={30}
slidesPerView={1} >
<SwiperSlide>Custom Effect Slide 1</SwiperSlide>
<SwiperSlide>Custom Effect Slide 2</SwiperSlide>
<SwiperSlide>Custom Effect Slide 3</SwiperSlide>
</Swiper>
);
}

// ============================================
// 10. FLOATING ANIMATION
// ============================================
export function FloatingExample() {
return (
<motion.div
animate={{ y: [-10, 10, -10] }}
transition={{ duration: 3, repeat: Infinity }} >
Floating element
</motion.div>
);
}

// ============================================
// 11. LETTER-BY-LETTER ANIMATION
// ============================================
export function TextAnimationExample() {
const text = 'Hello World';

return (
<motion.div>
{text.split('').map((letter, idx) => (
<motion.span
key={idx}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: idx * 0.1 }}
viewport={{ once: true }} >
{letter}
</motion.span>
))}
</motion.div>
);
}

// ============================================
// KEY LIBRARIES
// ============================================
/\*\*

- FRAMER MOTION:
- ✅ Smooth scroll animations (fadeIn, slideIn, etc)
- ✅ Parallax effects
- ✅ Spring physics animations
- ✅ Gesture animations (hover, tap)
- ✅ Auto-play animations with repeat
-
- SWIPER:
- ✅ Advanced carousel/slider
- ✅ Auto-play with configurable delay
- ✅ Navigation buttons
- ✅ Pagination dots
- ✅ Touch gestures
- ✅ Multiple effects (slide, fade, coverflow, etc)
- ✅ Infinite loop
- ✅ Responsive design
  \*/
