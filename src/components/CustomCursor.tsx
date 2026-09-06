import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface CustomCursorProps {
  cursorText?: string;
  cursorVariant?: 'default' | 'view' | 'explore' | 'hover';
}

export const CustomCursor: React.FC<CustomCursorProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'view' | 'explore' | 'hover'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (typeof window !== 'undefined') {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(isTouchDevice);
      if (isTouchDevice) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target element or parent for data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorVariant('view');
          setCursorText('VIEW');
        } else if (type === 'explore') {
          setCursorVariant('explore');
          setCursorText('EXPLORE');
        } else if (type === 'drag') {
          setCursorVariant('hover');
          setCursorText('DRAG');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isExpanded = cursorVariant === 'view' || cursorVariant === 'explore' || cursorVariant === 'hover';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: cursorVariant === 'view' || cursorVariant === 'explore' ? 1 : cursorVariant === 'hover' ? 1.4 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 400,
        mass: 0.2,
      }}
    >
      {/* Outer Circle Ring */}
      <motion.div
        className={`rounded-full border transition-colors duration-200 flex items-center justify-center ${
          cursorVariant === 'view' || cursorVariant === 'explore'
            ? 'w-20 h-20 bg-[#080808]/85 border-[#D9A514] text-[#FAF9F6] shadow-xl backdrop-blur-sm'
            : cursorVariant === 'hover'
            ? 'w-10 h-10 bg-[#D9A514]/20 border-[#D9A514]'
            : 'w-4 h-4 bg-[#D9A514] border-[#C58A00] opacity-80'
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#F4CA46] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
