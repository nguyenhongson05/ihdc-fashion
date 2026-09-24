import { useEffect, useRef, useState } from 'react'
import collectiveHero from '../assets/ihdc-collective-hero.png'

const HERO_SLIDES = [
  {
    image: collectiveHero,
    alt: 'Tập thể trong trang phục đen trắng của IHDC Fashion',
    label: 'Collective',
    position: 'center center',
  },
  {
    image: '/images/hero/collective.jpg',
    alt: 'Tập thể trong trang phục polo IHDC',
    label: 'Uniform identity',
    position: 'center 76%',
  },
  {
    image: '/images/projects/golf.jpg',
    alt: 'Tập thể trong đồng phục golf của IHDC',
    label: 'On the move',
    position: 'center 38%',
  },
]

const AUTOPLAY_DELAY = 5000
const SWIPE_THRESHOLD = 48

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const touchStartX = useRef(null)

  const showNext = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length)
  }

  const showPrevious = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (isPaused || reduceMotion) return undefined

    const autoplay = window.setInterval(showNext, AUTOPLAY_DELAY)
    return () => window.clearInterval(autoplay)
  }, [activeSlide, isPaused, reduceMotion])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < SWIPE_THRESHOLD) return
    if (distance > 0) showPrevious()
    else showNext()
  }

  return (
    <section
      className="hero-section"
      id="trang-chu"
      aria-roledescription="carousel"
      aria-label="Điểm nhấn IHDC Fashion"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slides">
        {HERO_SLIDES.map((slide, index) => (
          <div
            className={`hero-slide${index === activeSlide ? ' is-active' : ''}`}
            key={slide.image}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide.image}
              alt={index === activeSlide ? slide.alt : ''}
              style={{ objectPosition: slide.position }}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          </div>
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content page-shell">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span>IHDC Fashion</span>
            <span aria-hidden="true">/</span>
            <span>{HERO_SLIDES[activeSlide].label}</span>
          </p>
          <h1><span>Mỗi tập thể</span><span>một bản sắc.</span></h1>
          <a className="hero-cta" href="#giai-phap">Khám phá IHDC <span aria-hidden="true">↘</span></a>
        </div>
      </div>

      <div className="hero-side-controls" aria-label="Điều hướng banner">
        <button className="hero-arrow hero-arrow-previous" type="button" onClick={showPrevious} aria-label="Slide trước">
          <span aria-hidden="true">←</span><span>Previous</span>
        </button>
        <button className="hero-arrow hero-arrow-next" type="button" onClick={showNext} aria-label="Slide tiếp theo">
          <span>Next</span><span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="hero-carousel-nav page-shell">
        <div className="hero-indicators" role="tablist" aria-label="Chọn banner">
          {HERO_SLIDES.map((slide, index) => (
            <button
              className={`hero-indicator${index === activeSlide ? ' is-active' : ''}`}
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Hiển thị banner ${index + 1}: ${slide.label}`}
              onClick={() => setActiveSlide(index)}
            >
              <span className="sr-only">{index + 1}</span>
            </button>
          ))}
        </div>
        <p className="hero-count" aria-hidden="true">{String(activeSlide + 1).padStart(2, '0')} <span>/</span> {String(HERO_SLIDES.length).padStart(2, '0')}</p>
      </div>
      <p className="sr-only" aria-live="polite">Banner {activeSlide + 1} trên {HERO_SLIDES.length}: {HERO_SLIDES[activeSlide].label}</p>
    </section>
  )
}
