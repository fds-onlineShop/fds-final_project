import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default function MainPage() {
  return (
    <React.Fragment>
      <MainLayout>
        <NavBarMainContainer />
        <div className="back">
          <video
            className="bckgd-video"
            src="https://r6---sn-3u-bh2ll.googlevideo.com/videoplayback?ip=223.16.229.241&clen=75855180&source=youtube&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C298%2C299%2C302%2C303&c=WEB&key=cms1&ei=TdU5W4jXLsOoqQHBiaMw&ipbits=0&pl=24&sparams=aitags,clen,dur,ei,expire,gir,id,initcwndbps,ip,ipbits,ipbypass,itag,keepalive,lmt,mime,mip,mm,mn,ms,mv,pcm2cms,pl,requiressl,source&fexp=23709359&id=o-AE9DXfQJPGPK7L0frS5H2j_Dotu0VKTB2ZtjGXytlYA0&dur=127.900&itag=299&requiressl=yes&mime=video%2Fmp4&gir=yes&fvip=6&keepalive=yes&expire=1530538413&lmt=1439899403175234&signature=27886C0205307D739882BF324F9E723DD8A1ED16.505FC6FAE7CD3E8F469B52D75240D7D4755471C2&video_id=77VFH6DBNXo&title=free+website+video+background+FullHD+-+ink+drops+-+1920+x+1080p+50+fps&rm=sn-ibj-i3bk7s,sn-i3b6e7d&req_id=21dfd9f70c4da3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mip=220.117.71.145&mm=29&mn=sn-3u-bh2ll&ms=rdu&mt=1530515841&mv=u&pcm2cms=yes"
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
