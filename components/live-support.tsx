'use client';

import React, { useEffect, useState } from 'react';
import { Send, Bot, Headphones, Zap, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLocale } from 'next-intl';

type SupportType = 'ai' | 'human' | null;

export function LiveSupport() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [supportType, setSupportType] = useState<SupportType>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{
    id: number;
    text: string;
    sender: 'user' | 'ai' | 'human';
    timestamp: Date;
  }>>([]);
  const [showPulse, setShowPulse] = useState(true);

  // Reduce motion/pulse for accessibility, auto-hide after a few seconds
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setShowPulse(false);
      return;
    }
    const t = window.setTimeout(() => setShowPulse(false), 5000);
    return () => window.clearTimeout(t);
  }, []);

  // Persist scroll lock when dialog is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Listen for external trigger to open assistant modal
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { type?: SupportType } | undefined;
      const type = detail?.type || 'ai';
      setIsOpen(true);
      setSupportType(type);
      if (messages.length === 0) {
        setMessages([{
          id: 1,
          text: type === 'ai'
            ? 'Merhaba! Ben Bravioo AI Asistanınızım. Ürün özelliklerimiz, fiyatlandırma ve entegrasyonlar hakkında sorularınızı yanıtlayabilirim. Size nasıl yardımcı olabilirim?'
            : 'Merhaba! Ben canlı destek temsilcinizim. Teknik sorunlar, hesap yönetimi ve özel talepleriniz için buradayım. Size nasıl yardımcı olabilirim?',
          sender: type === 'ai' ? 'ai' : 'human',
          timestamp: new Date(),
        }]);
      }
    };
    window.addEventListener('open-support', handler as EventListener);

    // Also auto-open if query param present on load
    try {
      const params = new URLSearchParams(window.location.search);
      const support = params.get('support');
      if (support === 'ai' || support === 'human') {
        window.dispatchEvent(new CustomEvent('open-support', { detail: { type: support as SupportType } }));
      }
    } catch {}

    return () => window.removeEventListener('open-support', handler as EventListener);
  }, [messages.length]);

  const handleSendMessage = async () => {
    if (!message.trim() || !supportType) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    const prompt = message;
    setMessage('');

    if (supportType === 'ai') {
      try {
        const res = await fetch('/api/assistant', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, locale })
        });
        const data = await res.json();
        const reply = (data && data.reply) || (locale === 'tr' ? 'Size yardımcı olmaktan mutluyum. Daha fazla detay verebilir misiniz?' : 'Happy to help. Could you share more details?');
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: reply,
          sender: 'ai',
          timestamp: new Date(),
        }]);
      } catch {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: locale === 'tr' ? 'Şu anda yanıt veremiyorum. Lütfen tekrar deneyin.' : 'Unable to respond right now. Please try again.',
          sender: 'ai',
          timestamp: new Date(),
        }]);
      }
    } else {
      // Simulate human response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: locale === 'tr' ? 'Canlı destek temsilciniz olarak yardımcı olacağım. Detayları paylaşır mısınız?' : 'Your live agent will help you. Please share more details.',
          sender: 'human',
          timestamp: new Date(),
        }]);
      }, 800);
    }
  };

  const resetChat = () => {
    setSupportType(null);
    setMessages([]);
    setMessage('');
  };

  return (
    <>
      {/* Floating Buttons - Responsive positioning */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-6 md:left-6 z-50 flex flex-col gap-3">
        {/* AI Assistant Button */}
        <motion.button
          onClick={() => {
            setIsOpen(true);
            setSupportType('ai');
            if (messages.length === 0) {
              setMessages([{
                id: 1,
                text: 'Merhaba! Ben Bravioo AI Asistanınızım. Ürün özelliklerimiz, fiyatlandırma ve entegrasyonlar hakkında sorularınızı yanıtlayabilirim. Size nasıl yardımcı olabilirim?',
                sender: 'ai',
                timestamp: new Date(),
              }]);
            }
          }}
          className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-gold-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bot className="h-6 w-6 text-white" />
        

          {/* Pulse animation (reduced/limited) */}
          {showPulse && (
            <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></div>
          )}
        </motion.button>

        {/* Live Support Button */}
        <motion.button
          onClick={() => {
            setIsOpen(true);
            setSupportType('human');
            if (messages.length === 0) {
              setMessages([{
                id: 1,
                text: 'Merhaba! Ben canlı destek temsilcinizim. Teknik sorunlar, hesap yönetimi ve özel talepleriniz için buradayım. Size nasıl yardımcı olabilirim?',
                sender: 'human',
                timestamp: new Date(),
              }]);
            }
          }}
          className="group relative w-14 h-14 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Headphones className="h-6 w-6 text-white" />
          
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
          </div>

        
        </motion.button>
      </div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setTimeout(() => resetChat(), 300);
        }
      }}>
        <DialogContent className="max-w-md w-[95vw] h-[600px] max-h-[85vh] p-0 overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          {/* Header */}
          <DialogHeader className={`p-4 ${
            supportType === 'ai' 
              ? 'bg-gradient-to-r from-green-500 to-gold-600' 
              : 'bg-gradient-to-r from-brand-500 to-emerald-600'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {supportType === 'ai' ? (
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Headphones className="h-5 w-5 text-white" />
                  </div>
                )}
                <div>
                  <DialogTitle className="text-white font-semibold">
                    {supportType === 'ai' ? 'AI Asistan' : 'Canlı Destek'}
                  </DialogTitle>
                  <div className="text-white/80 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    {supportType === 'ai' ? 'Her zaman aktif' : 'Çevrimiçi'}
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Support Type Info */}
          {supportType && (
            <div className="p-4 bg-sand-50 dark:bg-gray-800 border-b border-sand-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                {supportType === 'ai' ? (
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-purple-600" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-brand-600" />
                  </div>
                )}
                <div className="text-sm">
                  {supportType === 'ai' ? (
                    <div>
                      <div className="font-medium text-ink-900 dark:text-gray-100">AI Asistan</div>
                      <div className="text-ink-600 dark:text-gray-300">Ürün bilgileri, fiyatlar, özellikler</div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-medium text-ink-900 dark:text-gray-100">İnsan Destek</div>
                      <div className="text-ink-600 dark:text-gray-300">Teknik sorunlar, hesap yönetimi</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-brand-500 text-white'
                      : msg.sender === 'ai'
                      ? 'bg-purple-100 text-purple-900'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="text-sm">{msg.text}</div>
                    <div className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString('tr-TR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-sand-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 border border-sand-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                size="sm"
                className={`px-3 ${
                  supportType === 'ai'
                    ? 'bg-gradient-to-r from-green-500 to-gold-600'
                    : 'bg-gradient-to-r from-brand-500 to-emerald-600'
                }`}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Switch support type */}
            <div className="mt-2 text-center">
              <button
                onClick={() => {
                  setSupportType(supportType === 'ai' ? 'human' : 'ai');
                  resetChat();
                }}
                className="text-xs text-ink-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {supportType === 'ai' ? 'Canlı desteğe geç →' : '← AI asistana geç'}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}