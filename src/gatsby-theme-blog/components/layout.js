import React from 'react'
import { css, Styled, useThemeUI } from 'theme-ui'
import Header from 'gatsby-theme-blog/src/components/header'
import { Helmet } from 'react-helmet'

export default ({ children, ...props }) => {
  const { theme } = useThemeUI()
  return (
    <Styled.root>
      <Helmet>
        <meta name="theme-color" content={theme.colors.background} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
}
