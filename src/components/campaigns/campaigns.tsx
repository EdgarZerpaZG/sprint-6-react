import Box from './box/box'

export default function Campaigns() {
    return (
    <>
      <Box campaign="SEO" description="Programming a complete responsive website" price={300} />
      <Box campaign="Ads" description="Programming a complete responsive website" price={400} />
      <Box campaign="Web" description="Programming a complete responsive website" price={500} />
    </>
  )
}