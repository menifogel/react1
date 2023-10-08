import moment from 'moment';
export default function Footer() {
  const now = moment();
  const date = now.format('MMMM D, YYYY');
  const time = now.format('h:mm:ss');
  return (
     <div id="footer">
        <h2>my name is menachem</h2>
        <p>Date: {date}</p>
        <p>Time: {time}</p>  
     </div>
  )
}
