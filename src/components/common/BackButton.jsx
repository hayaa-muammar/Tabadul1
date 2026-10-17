import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ 
  label = "الرجوع", 
  fallbackRoute = "/", 
  className = "",
  showIcon = true 
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if there is valid internal navigation history
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackRoute);
    }
  };

  return (
    <button
      onClick={handleBack}
      type="button"
      className={`inline-flex items-center gap-2 text-label-lg font-label-lg text-primary hover:text-gaza-teal transition-all group active:scale-95 py-1.5 px-2.5 rounded-xl hover:bg-surface-container-low cursor-pointer ${className}`}
    >
      {showIcon && (
        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" data-icon="arrow_forward">
          arrow_forward
        </span>
      )}
      <span className="font-bold text-sm sm:text-base">{label}</span>
    </button>
  );
}
