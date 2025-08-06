import React from 'react'
import { useLanguage } from 'lib/i18n/LanguageContext'
import { styled } from 'stitches.config'

const ToggleButton = styled('button', {
  position: 'fixed',
  top: '16px',
  right: '16px',
  zIndex: 2000,
  background: '$mint3',
  border: '1px solid $mint6',
  borderRadius: '8px',
  width:'32px',
  height:'32px',
  color: '$mint12',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    background: '$mint4',
    borderColor: '$mint7',
  },
  
  '@mo': {
    top: '8px',
    right: '8px',
    padding: '3px 6px',
    fontSize: '11px',
  },
})

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <ToggleButton onClick={toggleLanguage}>
      {language === 'en' ? t('btn-toggle-language') : t('btn-toggle-language-cn')}
    </ToggleButton>
  )
} 