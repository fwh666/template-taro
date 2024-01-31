import React, { useEffect, useState } from 'react';

const PrivacyPolicy: React.FC = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  // 创建cookie
  const setCookie = (cname: string, cvalue: string, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // 设置cookie同意
  const acceptCookieConsent = () => {
    setCookie('user_cookie_consent', '1', 30);
    setCookieConsent(true);
  }

  // 检查cookie同意状态
  useEffect(() => {
    let cookieConsent = document.cookie.replace(/(?:(?:^|.*;\s*)user_cookie_consent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieConsent === "1") {
      setCookieConsent(true);
    }
  }, []);

  return (
    <div>
      {!cookieConsent && (
        <div id="cookieNotice" className="fixed bottom-0 left-0 w-full py-2 md:py-4 bg-gray-200">
          <div className="flex items-center justify-between px-5 py-3">
            <p className="text-sm font-medium">
              This site uses cookies to deliver better experience and analyze traffic. You can learn more about our <a href="/privacy-policy" className="underline hover:text-lightAccent">privacy policy</a>.
            </p>
            <button className="p-3 text-sm font-bold text-white uppercase bg-gray-700 whitespace-nowrap" onClick={acceptCookieConsent}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrivacyPolicy;