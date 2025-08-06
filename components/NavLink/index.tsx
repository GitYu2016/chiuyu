import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import External from "@ui/Icons/external"
import * as Tooltip from "@radix-ui/react-tooltip"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

const Item = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  width: '2rem',
  color: '$menu',
  cursor: 'pointer',
  borderRadius: 6,
  border: '0.5px solid transparent',
  transition: 'all 0.1s ease',
  '&:hover': {
    background: '$whiteA3',
  },
  '&:active': {
    background: '$whiteA4',
    transform: 'scaleX(0.985) scaleY(0.985) translateY(0.5px)',
  },
  '&[aria-current="page"]': {
    background: '$whiteA4',
    border: '0.5px solid $highlightActiveBorder',
  },
  '@xs': {
    padding: '0.5rem 0.5rem 0.5rem 0.875rem',
    width: '100%',
    height: '2.25rem',
    justifyContent: 'space-between',
  },
})

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const Right = styled('div', {
  display: 'none',
  '@xs': {
    display: 'block',
  },
})

const Label = styled('p', {
  fontWeight: '$3',
  fontSize: '$2',
  margin: '0 0 0 12px',
  color: '$menu',
  letterSpacing: '-0.2px',
  transition: 'color 0.2s ease',
  display: 'none',
  '@xs': {
    display: 'block',
  },
})

const Shortcut = styled('div', {
  background: '$numberBackground',
  borderRadius: '$2',
  width: '16px',
  height: '16px',
  justifyContent: 'center',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  '@xs': {
    display: 'flex',
  },
})

interface NavLinkProps {
  svg: React.ReactNode
  label: string
  href: string
  shortcut?: string
  external?: boolean
}

export default function NavLink({ svg, label, href, shortcut, external }: NavLinkProps) {
  const router = useRouter()

  const ariaCurrent = router.asPath.includes(href) && href !== "/"
    ? "page"
    : router.pathname === href
    ? "page"
    : undefined

  useEffect(() => {
    if (!shortcut) return

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === shortcut) {
        router.push(href)
      }
    }

    document.addEventListener("keypress", handleKeyPress)
    return () => document.removeEventListener("keypress", handleKeyPress)
  }, [shortcut, href, router])

  const handleClick = () => {
    // 可以在这里添加点击事件处理
  }

  if (external) {
    return (
      <Item
        target="_blank"
        href={href}
        rel="noopener noreferrer"
        aria-label={label}
        onClick={handleClick}
      >
        <Left>
          <div className={util.icon()}>
            {svg}
          </div>
          <Label>{label}</Label>
        </Left>
        <Right>
          <div
            className={util.externalIcon({
              css: {
                display: 'flex',
                alignItems: 'center',
                '& svg': {
                  fill: '$highlightText',
                },
              }
            })}
          >
            <External />
          </div>
        </Right>
      </Item>
    )
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <Item aria-current={ariaCurrent} aria-label={label}>
        <Left>
          <div className={util.icon()}>
            {svg}
          </div>
          <Label>{label}</Label>
        </Left>
      </Item>
    </Link>
  )
}
