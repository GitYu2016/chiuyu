import Layout from "@components/Layouts/Global"
import { NextSeo } from 'next-seo'
import { useLanguage } from 'lib/i18n/LanguageContext'
import * as util from '@styles/util'
import { styled } from 'stitches.config'
import Image from 'next/image'

const Container = styled('div', {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '$4 $3',
})

const Hero = styled('div', {
  textAlign: 'center',
  marginBottom: '$8',
})

const Name = styled('h1', {
  fontSize: '$7',
  fontWeight: '700',
  marginBottom: '$2',
  color: '$primary',
})

const ChineseName = styled('p', {
  fontSize: '$4',
  color: '$secondary',
  marginBottom: '$4',
})

const Intro = styled('div', {
  fontSize: '$3',
  lineHeight: '$4',
  color: '$primary',
  marginBottom: '$6',
  textAlign: 'left',
})

const Tags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  justifyContent: 'center',
  marginBottom: '$6',
})

const Tag = styled('span', {
  background: '$mint3',
  color: '$mint11',
  padding: '$1 $3',
  borderRadius: '$3',
  fontSize: '$1',
  fontWeight: '500',
})

const Section = styled('div', {
  marginBottom: '$8',
})

const SectionTitle = styled('h2', {
  fontSize: '$5',
  fontWeight: '600',
  marginBottom: '$4',
  color: '$primary',
})

const ExperienceCard = styled('div', {
  background: '$mint2',
  border: '1px solid $mint6',
  borderRadius: '$4',
  padding: '$5',
  marginBottom: '$4',
})

const JobTitle = styled('h3', {
  fontSize: '$4',
  fontWeight: '600',
  color: '$primary',
  marginBottom: '$1',
})

const Company = styled('h4', {
  fontSize: '$3',
  fontWeight: '500',
  color: '$mint11',
  marginBottom: '$1',
})

const Duration = styled('p', {
  fontSize: '$2',
  color: '$secondary',
  marginBottom: '$3',
})

const Description = styled('p', {
  fontSize: '$2',
  lineHeight: '$3',
  color: '$primary',
  marginBottom: '$3',
})

const JobDetails = styled('ul', {
  fontSize: '$2',
  lineHeight: '$3',
  color: '$primary',
  paddingLeft: '$4',
  '& li': {
    marginBottom: '$1',
  },
})

const ContactInfo = styled('div', {
  textAlign: 'center',
  background: '$mint2',
  border: '1px solid $mint6',
  borderRadius: '$4',
  padding: '$4',
  marginTop: '$6',
})

export default function Resume() {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('resume-title')} description={t('resume-description')} />
        <Container>
          <Hero>
            <Name>Chiuyu</Name>
            <ChineseName>陈修宇</ChineseName>
            <Intro>
              <p>
                {t('resume-intro')}
              </p>
            </Intro>
            <Tags>
              <Tag>{t('resume-tag-designer')}</Tag>
              <Tag>{t('resume-tag-developer')}</Tag>
              <Tag>{t('resume-tag-creative')}</Tag>
              <Tag>{t('resume-tag-explorer')}</Tag>
            </Tags>
          </Hero>

          <Section>
            <SectionTitle>{t('resume-values-title')}</SectionTitle>
            <Description>
              {t('resume-values-content')}
            </Description>
          </Section>

          <Section>
            <SectionTitle>{t('resume-workflow-title')}</SectionTitle>
            <Description>
              {t('resume-workflow-content')}
            </Description>
          </Section>

          <Section>
            <SectionTitle>{t('resume-specialty-title')}</SectionTitle>
            <JobDetails>
              <li>{t('resume-specialty-1')}</li>
              <li>{t('resume-specialty-2')}</li>
              <li>{t('resume-specialty-3')}</li>
              <li>{t('resume-specialty-4')}</li>
            </JobDetails>
          </Section>

          <Section>
            <SectionTitle>{t('resume-language-title')}</SectionTitle>
            <Description>
              {t('resume-language-content')}
            </Description>
          </Section>

          <Section>
            <SectionTitle>{t('resume-experience-title')}</SectionTitle>
            
            <ExperienceCard>
              <JobTitle>{t('resume-job1-title')}</JobTitle>
              <Company>{t('resume-job1-company')}</Company>
              <Duration>{t('resume-job1-duration')}</Duration>
              <Description>
                {t('resume-job1-description')}
              </Description>
              <SectionTitle style={{ fontSize: '$3', marginBottom: '$2' }}>
                {t('resume-job-responsibilities')}
              </SectionTitle>
              <JobDetails>
                <li>{t('resume-job1-task1')}</li>
                <li>{t('resume-job1-task2')}</li>
              </JobDetails>
            </ExperienceCard>

            <ExperienceCard>
              <JobTitle>{t('resume-job2-title')}</JobTitle>
              <Company>{t('resume-job2-company')}</Company>
              <Duration>{t('resume-job2-duration')}</Duration>
              <Description>
                {t('resume-job2-description')}
              </Description>
              <SectionTitle style={{ fontSize: '$3', marginBottom: '$2' }}>
                {t('resume-job-responsibilities')}
              </SectionTitle>
              <JobDetails>
                <li>{t('resume-job2-task1')}</li>
                <li>{t('resume-job2-task2')}</li>
              </JobDetails>
            </ExperienceCard>
          </Section>

          <Section>
            <SectionTitle>{t('resume-education-title')}</SectionTitle>
            <ExperienceCard>
              <JobTitle>{t('resume-education-degree')}</JobTitle>
              <Company>{t('resume-education-school')}</Company>
              <Duration>{t('resume-education-duration')}</Duration>
              <Description>
                {t('resume-education-description')}
              </Description>
            </ExperienceCard>
          </Section>

          <ContactInfo>
            <SectionTitle>{t('resume-contact-title')}</SectionTitle>
            <Description>
              hi@chiuyu.com
            </Description>
          </ContactInfo>
        </Container>
      </Layout>
    </>
  )
}