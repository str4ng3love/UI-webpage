import Head from "next/head"

const Meta = ({title, keywords, desc}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='viewport' content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={desc} />
            <meta name="keywords" content={keywords}/>
            <meta charSet="utf-8" />
            <link rel="icon" href="favicon.ico" />
        </Head>
    </>
  )
}

Meta.defaultProps = {
  title: `Useless Idea - Eve Online Corporation`,
  keywords: ``,
  desc: ``,
}
export default Meta

