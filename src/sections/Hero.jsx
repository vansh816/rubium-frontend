import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

function Hero() {
  const heroRef = useRef(null);
  const mascotRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const mascotEl = mascotRef.current;
    if (!heroEl || !mascotEl) return;

    let animId;
    let time = 0;

    // Helper to calculate home position (upper-right quadrant)
    const getHomePos = () => {
      const w = heroEl.offsetWidth;
      const h = heroEl.offsetHeight;
      const mascotW = mascotEl.offsetWidth || 160;
      return {
        x: Math.max(20, w * 0.78 - mascotW / 2),
        y: Math.max(20, h * 0.22),
      };
    };

    let home = getHomePos();
    let currX = home.x;
    let currY = home.y;
    let targetX = home.x;
    let targetY = home.y;
    let currTilt = 0;
    let isTracking = false;

    // Apply initial position
    mascotEl.style.transform = `translate3d(${currX}px, ${currY}px, 0)`;

    const handlePointerMove = (e) => {
      const rect = heroEl.getBoundingClientRect();

      // Check if cursor is within hero vertical viewport (with 80px buffer)
      const inHeroY = e.clientY >= rect.top - 80 && e.clientY <= rect.bottom + 80;
      const inHeroX = e.clientX >= rect.left - 40 && e.clientX <= rect.right + 40;

      if (!inHeroX || !inHeroY) {
        if (isTracking) {
          isTracking = false;
          targetX = home.x;
          targetY = home.y;
        }
        return;
      }

      isTracking = true;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const mascotW = mascotEl.offsetWidth || 160;
      const mascotH = mascotEl.offsetHeight || 200;

      // Position mascot to hover gracefully alongside the cursor
      // Floats slightly to the right / upper-right of the pointer so it doesn't block clicks
      const offsetX = mouseX > rect.width * 0.5 ? -mascotW * 0.35 : 25;
      const offsetY = -mascotH * 0.4;

      const boundedX = Math.max(20, Math.min(rect.width - mascotW - 20, mouseX + offsetX));
      const boundedY = Math.max(20, Math.min(rect.height - mascotH - 20, mouseY + offsetY));

      targetX = boundedX;
      targetY = boundedY;
    };

    const handlePointerLeave = () => {
      isTracking = false;
      home = getHomePos();
      targetX = home.x;
      targetY = home.y;
    };

    const handleResize = () => {
      home = getHomePos();
      if (!isTracking) {
        targetX = home.x;
        targetY = home.y;
      }
    };

    // 60-120fps GPU render loop
    const animate = () => {
      // Responsive, buoyant floating lerp (0.075 follow speed)
      const ease = isTracking ? 0.075 : 0.045;
      const dx = targetX - currX;
      const dy = targetY - currY;

      currX += dx * ease;
      currY += dy * ease;

      // Natural banking tilt into the turn
      const targetTilt = Math.max(-14, Math.min(14, dx * ease * 1.6));
      currTilt += (targetTilt - currTilt) * 0.12;

      // Organic hover bobbing oscillation
      time += 0.038;
      const bobY = Math.sin(time) * 7;
      const bobTilt = Math.sin(time * 0.8) * 1.2;

      const finalX = currX;
      const finalY = currY + bobY;
      const finalTilt = currTilt + bobTilt;

      mascotEl.style.transform = `translate3d(${finalX.toFixed(2)}px, ${finalY.toFixed(2)}px, 0) rotate(${finalTilt.toFixed(2)}deg)`;

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    heroEl.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      heroEl.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero hero-section"
    >
      {/* ANIMATED BACKGROUND */}
      <div className="hero-background" aria-hidden="true">
        {/* Attractive AI tech wave hero background image */}
        <div className="hero-bg-image-wrapper">
          <img
            src="/images/hero-bg-flow.jpg"
            alt=""
            className="hero-bg-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-bg-image-overlay" />
        </div>

        {/* Base Light Mesh & Gradients */}
        <div className="hero-bg-light-mesh" />
        <div className="hero-bg-grid" />

        {/* Ambient brand color glows */}
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        {/* Flowing curves and subtle left-side network connections */}
        <svg
          className="hero-flowing-svg"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroCurveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b51f52" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#d93672" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#5b0b2b" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="heroCurveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d93672" stopOpacity="0.03" />
              <stop offset="45%" stopColor="#b51f52" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ff7aa2" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Flowing curve 1 */}
          <path
            className="hero-curve-path-1"
            d="M-50,220 C280,140 460,340 780,260 C1100,180 1260,310 1500,240"
            stroke="url(#heroCurveGrad1)"
            strokeWidth="1.6"
            strokeDasharray="6 8"
          />

          {/* Flowing curve 2 */}
          <path
            className="hero-curve-path-2"
            d="M-40,480 C320,540 520,380 860,440 C1180,500 1320,390 1520,430"
            stroke="url(#heroCurveGrad2)"
            strokeWidth="1.4"
          />

          {/* Subtle network connection points on left side */}
          <g className="hero-network-nodes">
            <line x1="260" y1="200" x2="380" y2="280" stroke="rgba(181, 31, 82, 0.1)" strokeWidth="1" strokeDasharray="3 4" />
            <line x1="380" y1="280" x2="490" y2="230" stroke="rgba(181, 31, 82, 0.08)" strokeWidth="1" />
            <circle cx="260" cy="200" r="3" fill="#b51f52" opacity="0.35" className="network-dot nd-1" />
            <circle cx="380" cy="280" r="4" fill="#d93672" opacity="0.4" className="network-dot nd-2" />
            <circle cx="490" cy="230" r="3" fill="#b51f52" opacity="0.3" className="network-dot nd-3" />
          </g>
        </svg>

        {/* Delicate floating particles */}
        <div className="hero-bg-particles">
          <span className="hero-particle hp-1" />
          <span className="hero-particle hp-2" />
          <span className="hero-particle hp-3" />
          <span className="hero-particle hp-4" />
          <span className="hero-particle hp-5" />
          <span className="hero-particle hp-6" />
        </div>
      </div>

      {/* CENTERED HERO CONTENT */}
      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <Sparkles size={15} />
            <span>AI ENGINEERING & DIGITAL INNOVATION</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="hero-title-main">Engineering</span>
            <span className="hero-title-gradient">What's Next.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="hero-description">
            We build AI-powered software, intelligent chatbots, custom websites, enterprise platforms, and business automation solutions that help businesses grow, work smarter, and stay ahead.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="hero-primary-button">
              Start a Project
              <ArrowUpRight size={18} />
            </a>
            <a href="#services" className="hero-secondary-button">
              Explore Services
            </a>
          </div>

          {/* Service Tags */}
          <div className="hero-tags">
            <span className="hero-tag">AI</span>
            <span className="hero-tag">Software</span>
            <span className="hero-tag">Automation</span>
            <span className="hero-tag">Cloud</span>
            <span className="hero-tag">Web Development</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE FLYING MASCOT - PERFECTLY ANIMATED & FLOATING WITH CURSOR */}
      <div
        ref={mascotRef}
        className="hero-mascot-wrapper"
      >
        {/* Mascot Robot Graphic (100% transparent PNG with zero background) */}
        <img
          src="/images/rubium-mascot-transparent.png"
          alt="Rubium AI Robot"
          className="mascot-flight-img"
          draggable="false"
        />

        {/* Soft Pink Propulsion Glow & Energy Capsule */}
        <div className="mascot-propulsion" aria-hidden="true">
          <div className="mascot-propulsion-halo" />
          <div className="mascot-propulsion-capsule" />
          <div className="mascot-propulsion-particles">
            <span className="t-particle tp-1" />
            <span className="t-particle tp-2" />
            <span className="t-particle tp-3" />
            <span className="t-particle tp-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;