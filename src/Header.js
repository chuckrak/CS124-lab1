import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <div className="row">
        <div className="col-8">
            <div className="Header">
                <p id="time">{time.getHours()}:{time.getMinutes().toString().length > 1 ? time.getMinutes() : "0" + time.getMinutes()}</p>
                <p id="day">{time.toLocaleString('default', { month: 'long' })} {time.getDate()}</p>
            </div> 
        </div>
        {props.signedIn &&
        <div className="button-group col-4 headerButtons">
          <button className={"topRightButtons"} onClick={() => props.toggleShowShare()}>
            <FontAwesomeIcon icon={faUserGroup} size="2x"/>
          </button>
          <button className={"topRightButtons"} onClick={() => props.toggleShowTaskListInfo()}>
            <FontAwesomeIcon icon={faEllipsisVertical} size="2x"/>
          </button>
        </div>}
    </div>
} 
export default Header;