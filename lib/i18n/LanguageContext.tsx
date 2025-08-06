import React, { createContext, useContext, useState, ReactNode } from 'react'
import { en } from './en'
import { cn } from './cn'

type Language = 'en' | 'cn'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'cn' : 'en')
  }

  const t = (key: string): string => {
    const translations = language === 'en' ? en : cn
    return translations[key as keyof typeof translations] || key
  }

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 