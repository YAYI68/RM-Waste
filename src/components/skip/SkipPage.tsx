import { useState } from 'react'
import { useSkip } from '../../api/skip/use-skip'
import Loader from '../ui/Loader'
import SkipHero from './SkipHero'
import SkipSection from './SkipSection'
import SkipSelector from './SkipSelector'
import type { SkipItem } from '../../types/skip-item'

function SkipPage() {

    const { skips, isLoading, isSuccess } = useSkip()
    const [ selectedItem, setSelectedItem ] = useState<SkipItem>()
    const handleSelectedItem =(item:SkipItem | undefined)=>{
        setSelectedItem(item)
    }
  return (
    <div className='w-full'>
        <SkipHero />
        {isLoading && 
         <Loader />
        }
        {isSuccess && 
       <>
         <SkipSection handleSelectedItem={handleSelectedItem}  skips={skips} />
         {selectedItem && 
          <SkipSelector skip={selectedItem}/>
         }
        </> 
        }
    </div>
  )
}

export default SkipPage