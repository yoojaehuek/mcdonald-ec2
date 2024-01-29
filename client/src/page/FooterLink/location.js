import React from 'react';
import { NavLink } from 'react-router-dom';
import "./private.scss";

const location = () => {
  return(
    <div id="container">
        <div className='content'>
          <div className='titletop'>
            <div className='inner'>
              <h1 className='dep11'>위치기반서비스이용약관</h1>
              <ul className='navlink'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/#indexA"><li>위치기반서비스이용약관</li></NavLink>
              </ul>
            </div>
          </div>
          <div className='contara'>
            <div className='inner2'>
              <div className='termscs'>
                <h2>제 1 조 (목적)</h2>
                <p>이 약관은 한국맥도날드(유)(이하 '회사')가 제공하는 위치정보사업 또는 위치기반서비스사업과 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                <h3>제 2 조 (약관 외 준칙)</h3>
                <p>이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과 회사의 이용약관 및 개인정보취급방침, 회사가 별도로 정한 지침 등에 의합니다.</p>
                <h3>제 3 조 (개인위치정보 수집방법)</h3>
                <p>1.'회사'는 브라우저 제조사와 GPS칩이 내장된 전용단말기로 수집되는 정보로 개인위치정보를 수집합니다.
                <br></br>2. 전항의 개인위치정보의 수집방법이 변경되는 경우 회사는 인터넷 등에 공지하거나 고객에게 통지합니다. 다만, 회사가 통제할 수 없는 사유가 발생하여 사전 통지가 불가능한 경우에는 사후에 통지합니다.</p>
                <h3>제 4 조 (위치정보의 보유기간 및 이용기간)</h3>
                <p>회사는 개인위치정보주체의 개인위치정보 수집, 이용 또는 제공 목적을 달성하거나, 본 약관에 따라 개인위치정보주체가 개인위치정보의 수집, 이용 또는 제공에 대한 동의의 전부 또는 일부에 대하여 철회한 때에는, 위치정보법 제16조 제2항의 규정에 의하여 기록·보존하여야 하는 위치정보 이용ㆍ제공 사실 확인자료 외의 당해 개인위치정보주체의 개인위치정보를 지체 없이 파기합니다.</p>
                <h3>부칙</h3>
                <p>제 1 조 시행일<br></br>
                본 약관은 2019년 7월 25일부터 적용됩니다.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default location;