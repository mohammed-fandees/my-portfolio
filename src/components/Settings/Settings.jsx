import "./settings.css";
import gear from "../../images/gear.png";
export default function Settings() {
  return (
    <div className='settings position-fixed rounded-2 p-3'>
      <div className="icon">
        <img src={gear} alt="gear" />
      </div>
    </div>
  )
}
