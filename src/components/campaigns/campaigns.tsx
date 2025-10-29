import Box from './box/box'
import DataCampaign from '../../data/dataCampaign'

export default function Campaigns() {
  
    const data = DataCampaign();

    return (
      <>
        {data.map(item => (
          <Box key={item.id} campaign={item.campaign} id={item.id} description={item.description} price={item.price} discount={item.discount} />
        ))}
      </>
    )
}