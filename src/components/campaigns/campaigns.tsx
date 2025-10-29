import Box from './box/box'
import ConfigCampaign from '../../config/configCampaign'

export default function Campaigns() {
  
    const config = ConfigCampaign();

    return (
      <>
        {config.map(item => (
          <Box key={item.id} campaign={item.campaign} id={item.id} description={item.description} price={item.price} discount={item.discount} />
        ))}
      </>
    )
}