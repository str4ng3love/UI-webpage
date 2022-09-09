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
  title: `Useless Idea - Korporacja Eve Online`,
  desc: 'Strona domowa korporacji EVE ONLINE Useless Idea',
  keywords: 'eve online, Useless Idea, Polska, polska korporacja, Discord, Pochven, PvP, początkujący'
}
export default Meta

