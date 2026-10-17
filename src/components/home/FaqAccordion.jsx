import React, { useState } from 'react';
import { faqData } from '../../data/faqData';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState("q1");

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#12302b]/10 text-right" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs sm:text-sm font-bold text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12302b]">
            الأسئلة الشائعة حول منصة تبادل
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-lg mx-auto">
            كل ما تود معرفته عن جمع النقاط، استبدال الكاش باك، والأمان الرقمي لطلباتك في قطاع غزة.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'border-[#1f7a6e] bg-[#f6f3ec]/60 shadow-xs' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-right cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm sm:text-base ${isOpen ? 'text-[#1f7a6e]' : 'text-[#12302b]'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#1f7a6e] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-gray-100 pt-3 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
