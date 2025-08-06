import React from "react"
import { useRouter } from "next/router"
import { useTheme } from 'next-themes'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import NavLink from "@components/NavLink"
import SiteTitle from "@components/SiteTitle"
import { useLanguage } from 'lib/i18n/LanguageContext'
import Home from "@ui/Icons/home"
import About from "@ui/Icons/about"
import Projects from "@ui/Icons/projects"
import Posts from "@ui/Icons/posts"
import Stack from "@ui/Icons/stack"
import Gear from "@ui/Icons/gear"
import Twitter from "@ui/Icons/twitter"
import Instagram from "@ui/Icons/instagram"
import Github from "@ui/Icons/github"
import Figma from "@ui/Icons/figma"
import { CMDK } from '@styles/CommandMenu'

const Container = styled('div', {
  padding: '0.5rem',
  margin: '0.5rem',
  borderRadius: '$4',
  backgroundColor: '$mint1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexShrink: 0,
  position: 'sticky',
  top: 0,
  height: '3rem',
  overflow: 'scroll hidden',
  zIndex: '$max',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@xs': {
    height: 'calc(100vh - 1rem)',
    width: '15rem',
    margin: '0.5rem',
    borderRadius: '0',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    position: 'fixed',
    top: 0,
    zIndex: 'auto',
  }
})

const Header = styled('div', {
  display: 'none',
  '@xs': {
    display: 'block',
    padding: '1rem 0.75rem 1.5rem 0.75rem',
    // 移除分割线
    // borderBottom: '1px solid $mint6',
    marginBottom: '$3',
  },
})

const Main = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  '@xs': {
    flexDirection: 'column',
    flex: 1,
  },
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$1',
  '@xs': {
    flexDirection: 'column',
    gap: 2,
  },
})

const Divider = styled('p', {
  display: 'none',
  '@xs': {
    display: 'block',
    padding: '1rem 0 0.5rem 0.75rem',
    fontSize: '$0',
    fontWeight: '$2',
    color: 'var(--colors-whiteA11)',
    marginBottom: 0,
    textTransform: 'uppercase',
  },
})

export default function Menu() {
  CMDK()

  const router = useRouter()
  const { setTheme } = useTheme()
  const { t } = useLanguage()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
    <Container>
      <Header>
        <SiteTitle />
      </Header>
      <Main>
        <Nav>
          <NavLink
            svg={<Home />}
            href="/"
            label={t('nav-home')}
            shortcut="0"
          />
          <NavLink
            svg={<About />}
            href="/about"
            label={t('nav-about')}
            shortcut="1"
          />
          <NavLink
            svg={<Projects />}
            href="/projects"
            label={t('nav-projects')}
            shortcut="2"
          />
          <NavLink
            svg={<Posts />}
            href="/posts"
            label={t('nav-posts')}
            shortcut="3"
          />
          <Divider>Resources</Divider>
          <NavLink
            svg={<Stack />}
            href="/stack"
            label={t('nav-stack')}
            shortcut="4"
          />
          <NavLink
            svg={<Gear />}
            href="/gear"
            label={t('nav-gear')}
            shortcut="5"
          />

          <Divider>Social</Divider>
          <NavLink
            svg={<Twitter />}
            href="https://twitter.com/yinchiuyu"
            label="Twitter"
            external
          />
          <NavLink
            svg={<Instagram />}
            href="https://instagram.com/yinchiuyu"
            label="Instagram"
            external
          />
          <NavLink
            svg={<Github />}
            href="https://github.com/gityu2016"
            label="Github"
            external
          />
          <NavLink
            svg={<Figma />}
            href="https://figma.com/@yinchiuyu"
            label="Figma"
            external
          />
        </Nav>
      </Main>
    </Container>
  )
}