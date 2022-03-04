import { useEffect, useState } from 'react';

const Header = (props) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <div className="row">
        <div className="col-12">
            <div className="Header">
                <p id="time">{time.getHours()}:{time.getMinutes()}</p>
                <p id="day">Today is {time.toLocaleString('default', { month: 'long' })} {time.getDate()}</p>
            </div>
        </div>
    </div>
} 
export default Header;