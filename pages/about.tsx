import React from "react"
import { GetStaticProps, NextPage } from "next"
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import { NextSeo } from 'next-seo'
import { useLanguage } from 'lib/i18n/LanguageContext'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import ExpTile from "@components/Tiles/ExpTile"

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const Title = styled('h2', {
  fontSize: '$4',
  fontWeight: '$4',
  color: '$title',
  marginBottom: '$2',
})

const Text = styled('p', {
  fontSize: '$3',
  lineHeight: '$2',
  color: '$content',
})

const ResumeButton = styled('a', {
  display: 'inline-block',
  padding: '$2 $4',
  marginTop: '$3',
  backgroundColor: '$mint3',
  color: '$mint12',
  borderRadius: '$2',
  textDecoration: 'none',
  fontSize: '$2',
  fontWeight: '$3',
  border: '1px solid $mint6',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '$mint4',
    borderColor: '$mint7',
    transform: 'translateY(-1px)',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
})

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('about-title')} description={t('about-description')} />
        <PageTile>{t('about-title')}</PageTile>
        <div className={util.inset()}>
          <p className={util.description()}>
            {t('about-intro')}
          </p>
          
          <ResumeButton 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('btn-see-resume')}
          </ResumeButton>
          
          <div className={util.divider()}></div>
          <div>
            <h2>{t('about-experience')}</h2>
            <ExpTile
              date="2020.10-Now"
              title="Senior Product Designer at XAG"
              url={"https://www.xa.com"}
              content={
                "Focused on agricultural drone operation scenarios, responsible for the workflow and related modules (autonomous/manual operation, transport operations, perception systems, and operation reports)."
              }
            />
            <ExpTile
              date="2016.7-2020.03"
              title="UX Designer at iFLYTEK"
              url={"https://www.iflyos.cn"}
              content={
                "As one of the founding team members, I spearheaded the interaction and UI design for multiple products within the AI voice platform ecosystem from scratch, covering various multi-terminal products including the Xiaofei smart display speaker system, Xiaofei Voice Assistant App, smart car mount App, and the iFLYOS official website backend."
              }
            />
          </div>
          <div className={util.divider()}></div>
          <div className={util.read()}>
            <h2>{t('about-website')}</h2>
            <p>
              {t('about-tech')}{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              {t('about-deployed')}{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              . {t('about-content')}{" "}
              <a
                href="http://notion.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}