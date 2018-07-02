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
            src="https://r5---sn-oguelnle.googlevideo.com/videoplayback?ipbits=0&itag=299&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C298%2C299%2C302%2C303&c=WEB&gir=yes&pl=24&expire=1530516550&dur=127.900&ip=168.194.152.78&fexp=23709359&sparams=aitags,clen,dur,ei,expire,gir,id,initcwndbps,ip,ipbits,itag,keepalive,lmt,mime,mip,mm,mn,ms,mv,pl,requiressl,source&key=cms1&id=o-AL12sDdkRN-4b73ynlSR9Rd1XcCATC0lOHAtoc3nT_2t&ei=5n85W_ifFsW_wQS-uYAg&lmt=1439899403175234&fvip=6&mime=video%2Fmp4&requiressl=yes&clen=75855180&source=youtube&keepalive=yes&signature=0F28B29150906F12E573F607BC61D4BEBA36E646.39E984F946447FD7A4AA44A2E930B141DE295051&video_id=77VFH6DBNXo&title=free+website+video+background+FullHD+-+ink+drops+-+1920+x+1080p+50+fps&redirect_counter=1&cm2rm=sn-bg06l76&req_id=2f93884997c2a3ee&cms_redirect=yes&mip=220.117.71.145&mm=34&mn=sn-oguelnle&ms=ltu&mt=1530494492&mv=u"
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
