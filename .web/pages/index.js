/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "1em", ["background"] : "gray.100", ["borderBottom"] : "1px solid #ccc" })} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "2xl", ["fontWeight"] : "bold" })}>

{"\ud83c\udfe1 AirReflex"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

{"Home"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/listings"} passHref={true}>

{"Listings"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesContainer css={({ ["padding"] : "16px", ["maxWidth"] : "800px", ["marginTop"] : "2em", ["marginBottom"] : "2em" })} size={"3"}>

<RadixThemesHeading>

{"Welcome to AirReflex!"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{"Browse unique places to stay, hosted by real people."}
</RadixThemesText>
</RadixThemesContainer>
</RadixThemesFlex>
<NextHead>

<title>

{"Home"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
