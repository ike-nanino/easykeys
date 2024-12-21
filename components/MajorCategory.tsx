import { faPerson, faBed, faShower } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MajorCategory() {
  return (
    <div className='flex gap-4'>

        <div className="flex gap-1 text-sm">
        <FontAwesomeIcon icon={faPerson} className="w-4 h-4" />
            <h3> 2 Guests </h3>
        </div>
        <div className="flex gap-1 text-sm ">
        <FontAwesomeIcon icon={faBed} className="w-4 h-4" />
            <h3> 1 Queen bed </h3>
        </div>
        <div className="flex gap-1 text-sm">
        <FontAwesomeIcon icon={faShower} className="w-4 h-4" />
            <h3> 1 Bathroom</h3>
        </div>
      
    </div>
  )
}

export default MajorCategory
