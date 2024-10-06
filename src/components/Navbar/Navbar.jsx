import React from "react";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4 flex justify-between items-center ">
        <div>
          <img src="/src/assets/images/Logo.png" alt="" />
        </div>
        <div className="font-Vazirmatn-Medium">
          <ul className="flex gap-8 ">
            <li>بلیط</li>
            <li>اقامت</li>
            <li>تور</li>
            <li>مجله گردشگری</li>
            <li>راهنما</li>
          </ul>
        </div>
        <div className="bg-primary-600 py-4 px-6 text-white rounded-lg font-Vazirmatn-Light text-sm hover:bg-primary-700 active:bg-primary-800">
          <button>وارد شوید</button>
        </div>
      </div>
    );
  }
}
