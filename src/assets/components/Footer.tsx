const Footer = () => {
  return (
    <footer className="p-4 bg-[#FF8E7] sm:p-6 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="./" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                AI-Oportunități
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Social Media
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/ECOU.Cahul"
                    className="hover:underline "
                  >
                    Facebook Ecou
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/+WSkXdqMMxEg3ZDky"
                    className="hover:underline"
                  >
                    Grup Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/data-policy" className="hover:underline">
                    Preluarea Datelor
                  </a>
                </li>
                <li>
                  <a href="/termeni" className="hover:underline">
                    Termeni &amp; Conditii
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
