import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="مسار التصفح" className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md flex-wrap py-2">
      <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <span className="material-symbols-outlined text-[16px]">home</span>
        <span className="text-xs sm:text-sm">الرئيسية</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <span className="material-symbols-outlined text-[14px] text-outline-variant">
              chevron_left
            </span>
            {isLast || !item.to ? (
              <span className="text-primary font-bold text-xs sm:text-sm truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-primary transition-colors text-xs sm:text-sm">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
