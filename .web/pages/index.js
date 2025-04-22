/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading>

{"My Custom App"}
</RadixThemesHeading>
<RadixThemesText as={"p"}>

{"This is rendered from app.py inside the frontend folder."}
</RadixThemesText>
</RadixThemesFlex>
<NextHead>

<title>

{"Frontend | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
