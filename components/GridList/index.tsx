import React from "react"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import GridLink from "@components/GridLink"
import CellGrid from "@components/CellGrid"
import Twitter from "@components/Twitter"
import Github from "@components/Github"
import Map from "@components/Map"
import Location from "@components/Location"
import Logo from "@ui/Icons/logo"
import Mail from "@ui/Icons/mail"
import { useLanguage } from 'lib/i18n/LanguageContext'

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$3',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
  gridAutoRows: '1fr',
  '@sm': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
})

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

const Item = styled('div', {
  borderRadius: '$6',
  padding: '$4 $3 $3 $3',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: 'rgb(1 24 22 / 80%)',
  boxShadow: 'inset 0 1px 0 var(--shadows-mint4), 0.5px 0.7px 1px hsl(0deg 0% 0% / 12%), 1.5px 2.3px 3.3px -0.7px hsl(166deg 100% 2% / 12%), 3.5px 5.3px 7.6px -1.3px hsl(173deg 100% 2% / 12%), 8.2px 12.4px 17.8px -2px hsl(154deg 100% 2% / 10%)',
  maxWidth: '100%',
  letterSpacing: '-0.025em',
  cursor: 'pointer',
  userSelect: 'none',
  transform: 'translate3d(0, 0, 0)',
  overflow: 'hidden',
  transition: 'all 0.2s ease 0s',
  '&:hover': {
    transform: 'translate3D(0,-1px,0) scale(1.02)',
    boxShadow: 'inset 0 1px 0 $mint4, 0 10px 30px rgba(0 0 0 / 60%)',
    zIndex: '$10',
  },
  variants: {
    type: {
      me: {
        '@xxs': {
          gridArea: '1 / 1 / 2 / 3',
        },
        '@xs': {
          gridArea: '1 / 1 / 2 / 3',
        },
      },
      location: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(40 80 226 / 32%) 0%, rgb(163 0 255 / 0%) 100%)',
        }
      },
      twitter: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(0 110 255 / 32%) 0%, rgb(0 174 255 / 0%) 100%)',
        }
      },
      github: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(200 200 200 / 32%) 0%, rgb(87 87 87 / 0%) 100%)',
        }
      },
      gmail: {
        '& i': {
          background: 'radial-gradient(45% 45% at 50% 50%, rgb(255 0 0 / 32%) 0%, rgb(255 0 120 / 0%) 100%)',
        }
      }
    },
  },
})

const Bio = styled('div', {
  padding: '0 $3',
})

const Greeting = styled('h2', {
  fontSize: '$4',
  fontWeight: '$4',
  color: '$title',
  textAlign: 'center',
})

export default function GridList() {
  const { t } = useLanguage()

  return (
    <Grid className="home-grid">
      <Item type="me" className="profile-card">
        <Top className="profile-avatar">
          <div className={util.roundIcon()}>
            <Logo />
          </div>
        </Top>
        <Bio className="profile-bio">
          <Greeting>Hi, I'm yinchiuyu</Greeting>
          <p>
            {t('home-bio')}
          </p>
        </Bio>
      </Item>
      
      <Item type="twitter" className="twitter-card">
        <CellGrid />
        <Top className="twitter-icon">
          <Twitter />
        </Top>
        <div className="twitter-link">
          <GridLink
            href="https://twitter.com/yinchiuyu"
            label={t('buttons-follow')}
            external
          />
        </div>
      </Item>
      
      <Item type="github" className="github-card">
        <CellGrid />
        <Top className="github-icon">
          <Github />
        </Top>
        <div className="github-link">
          <GridLink
            href="https://github.com/gityu2016"
            label={t('buttons-follow')}
            external
          />
        </div>
      </Item>
      
      <Item type="location" className="location-card">
        <Map />
        <CellGrid />
        <Top className="location-icon">
          <Location />
        </Top>
        <GridLink
          href="https://maps.app.goo.gl/Yp3CqEH4YVyjQS4aA"
          label={t('buttons-location')}
          external
        />
      </Item>
      
      <Item type="gmail" className="email-card">
        <CellGrid />
        <Top className="email-icon">
          <div className={util.roundIcon({
            css: {
              background: 'rgb(255 0 0 / 8%)',
              border: '1px solid rgb(255 86 86 / 8%)',
            }
          })}>
            <Mail />
          </div>
        </Top>
        <div className="email-link">
          <GridLink
            href="mailto:yinchiuyu@gmail.com"
            label={t('buttons-mail')}
            external
          />
        </div>
      </Item>
    </Grid>
  )
}