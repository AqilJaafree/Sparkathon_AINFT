import Chatbox from '../../components/Chatbox';
import { FC } from 'react';


export const TalkView: FC = ({}) => {
    // ...
  
    return (
      <div className="talk-page">
        <h1 className="text-6xl">Hi there, I'm Yuka</h1>
        {/* Other content on your talk page */}
        <Chatbox />
      </div>
    );
  };
  
  export default TalkView;
  


