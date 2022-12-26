import { toast } from 'react-toastify';
import Header from './Header';
import { KRNLSocialButtons } from './SocialButtons';

async function onClick() {
  // let res = await Notification.requestPermission();
  // if (res === "granted") {
  //   let s = new Audio(
  //     "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-25674/zapsplat_multimedia_alert_glassy_mallet_001_26395.mp3"
  //   );
  //   s.play();
  //   setTimeout(() => {
  //     // create a new notification with sound
  //     new Notification("Hello");
  //     s.play();
  //   }, 2000);
  // }
  toast('Hello, world!', {
    // theme: 'dark',
  })
}

function Test() {
  return (
    <div>
      {/* create a button with a onclick function */}
      <Header />
      <button onClick={onClick}>Click me</button>
      <KRNLSocialButtons />
    </div>
  );
}

export default Test;
