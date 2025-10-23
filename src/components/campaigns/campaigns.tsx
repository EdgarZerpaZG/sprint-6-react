import Box from './box/box'

export default function Campaigns() {
    return (
    <>
      <Box campaign="SEO" id="seo" description="Programming a complete responsive website" price={300} />
      <Box campaign="Ads" id="ads" description="Programming a complete responsive website" price={400} />
      <Box campaign="Web" id="web" description="Programming a complete responsive website" price={500} />
    </>
  )
}