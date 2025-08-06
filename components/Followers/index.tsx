import React from 'react'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import { useLanguage } from 'lib/i18n/LanguageContext'
import { internationalNumberFormat } from 'lib/formatNumbers'

const Meta = styled('p', {
  fontSize: '$0',
  color: '$secondary',
  margin: '0.25rem 0 0 0',
})

interface FollowersProps {
  followers: {
    count: number
  }
}

export default function Followers({ followers }: FollowersProps) {
  const { t } = useLanguage()

  return (
    <>
      <div>
        <h4>
          {followers.count > 0
            ? internationalNumberFormat.format(followers.count)
            : '—'
          }
        </h4>
        <Meta>{t('home-followers')}</Meta>
      </div>
    </>
  )
}