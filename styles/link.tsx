import { css } from 'stitches.config'

export const externalLink = css({
  color: '$mint12',
  '&:hover': {
    transition: 'all 0.2s ease',
    textShadow: '0 0 16px $mint12',
  }
})