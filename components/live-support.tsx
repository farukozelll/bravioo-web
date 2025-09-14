'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, Mail, Clock, Headphones, Zap, Users } from 'lucide-react';
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

  const handleSendMessage = () => {
    if (!message.trim() || !supportType) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate response
    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        text: supportType === 'ai' 
          ? 'AI Asistanınız olarak size yardımcı olmaktan mutluyum! Bu konuda size şu önerileri sunabilirim...'
          : 'Canlı destek temsilciniz olarak size yardımcı olacağım. Lütfen sorununuzu detaylı anlatın.',
        sender: supportType,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const resetChat = () => {
    setSupportType(null);
    setMessages([]);
    setMessage('');
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
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
          className="group relative w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bot className="h-6 w-6 text-white" />
          
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-ink-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            AI Asistan
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink-900"></div>
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20"></div>
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

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-ink-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Canlı Destek
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink-900"></div>
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
        <DialogContent className="max-w-md h-[600px] p-0 overflow-hidden">
          {/* Header */}
          <DialogHeader className={`p-4 ${
            supportType === 'ai' 
              ? 'bg-gradient-to-r from-purple-500 to-indigo-600' 
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
            <div className="p-4 bg-sand-50 border-b border-sand-200">
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
                      <div className="font-medium text-ink-900">AI Asistan</div>
                      <div className="text-ink-600">Ürün bilgileri, fiyatlar, özellikler</div>
                    </div>
                  ) : (
                    <div>
                      <div className="font-medium text-ink-900">İnsan Destek</div>
                      <div className="text-ink-600">Teknik sorunlar, hesap yönetimi</div>
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
          <div className="p-4 border-t border-sand-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 border border-sand-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                size="sm"
                className={`px-3 ${
                  supportType === 'ai'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
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
                className="text-xs text-ink-500 hover:text-brand-600 transition-colors"
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