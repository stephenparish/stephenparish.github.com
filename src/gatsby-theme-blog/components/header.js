import React from 'react'
import { Link } from 'gatsby'
import { css, useColorMode, Styled } from 'theme-ui'
import Bio from 'gatsby-theme-blog/src/components/bio'
import { Button } from '@theme-ui/components'

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

const modes = ['default', 'dark', 'trueBlack', 'sepia']

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}

          <Button
            aria-label="Toggle dark mode"
            onClick={e => {
              const index = modes.indexOf(colorMode)
              const next = modes[(index + 1) % modes.length]
              setColorMode(next)
            }}
          >
            {colorMode}
          </Button>
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
