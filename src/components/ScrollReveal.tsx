import { useRef, ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal = ({ 
  children, 
  className,
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(24px)';
      case 'down': return 'translateY(-24px)';
      case 'left': return 'translateX(24px)';
      case 'right': return 'translateX(-24px)';
      default: return 'translateY(24px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn('transition-all duration-500 ease-out', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
