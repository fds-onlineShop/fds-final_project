import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <div className="back">
          <video
            className="bckgd-video"
            src="https://r6---sn-a5meknl6.googlevideo.com/videoplayback?dur=127.920&requiressl=yes&id=o-ADqcTWV7t0mrplylEY20ItShHfdElaFQtkh0OiP-tU6j&pl=24&fexp=23709359&ip=45.115.39.139&lmt=1439899269186422&expire=1530211145&ipbits=0&sparams=aitags,clen,dur,ei,expire,gir,id,initcwndbps,ip,ipbits,itag,keepalive,lmt,mime,mip,mm,mn,ms,mv,pl,requiressl,source&source=youtube&keepalive=yes&clen=47342316&gir=yes&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C298%2C299%2C302%2C303&key=cms1&itag=137&mime=video%2Fmp4&ei=6dY0W9_MCrHsqAHw2pmoDQ&c=WEB&fvip=3&signature=6F497A9B73AA9817CC49EDB936383CE3CAA49F78.4821A0F63DF7C0474CBDE8AF0ED5F79CC98C93C3&video_id=77VFH6DBNXo&title=free+website+video+background+FullHD+-+ink+drops+-+1920+x+1080p+50+fps&redirect_counter=1&cm2rm=sn-i3b6e7d&req_id=7780db0599d4a3ee&cms_redirect=yes&mip=210.102.142.230&mm=34&mn=sn-a5meknl6&ms=ltu&mt=1530189504&mv=m"
            autoplay="autoplay"
            loop="loop"
            preload="auto"
            muted="true"
          />
        </div>
      </MainLayout>
    </React.Fragment>
  );
}
