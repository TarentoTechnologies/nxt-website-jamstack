import React from 'react';
import { retailBtn, cxButton } from './PrimaryCTA.module.css';

interface PrimaryCTAProps {
  label: string
  variant?: string
  clickHandler?: (event: any) => void
  customClasses?: any
}

export const PrimaryCTA = ({ label, variant, clickHandler, customClasses }: PrimaryCTAProps) => {
  return (
    <div className={`btn btn-primary ${variant === 'white' ? `${retailBtn}` : `${cxButton}`} ${customClasses}`} onClick={clickHandler}>
      {label}
    </div>
  )
};
