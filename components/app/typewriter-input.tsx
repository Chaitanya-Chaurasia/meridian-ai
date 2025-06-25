'use client';

import { useEffect, useState } from 'react';

interface TypewriterInputProps {
  prompts: string[];
  className?: string;
}

export function TypewriterInput({ prompts, className = '' }: TypewriterInputProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPrompt = prompts[currentPromptIndex];
    if (!currentPrompt) return;

    const typingSpeed = isTyping ? 100 : isDeleting ? 30 : 1500;
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentPrompt.length) {
          setDisplayText(currentPrompt.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentPrompt.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPromptIndex((currentPromptIndex + 1) % prompts.length);
          setIsTyping(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, currentPromptIndex, isTyping, isDeleting, prompts]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full">
        <div className="relative w-full">
          <div
            className="w-full bg-transparent text-white py-2 px-1 placeholder-gray-400 focus:outline-none focus:border-black transition-colors sm:text-xs text-md tracking-tighter text-wrap  pr-6"
          >
            {displayText}
          </div>
          <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-white transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            |
          </span>
        </div>
      </div>
    </div>
  );
}
