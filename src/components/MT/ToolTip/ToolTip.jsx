import React from "react";
import { InformationCircleIcon } from '@heroicons/react/24/solid';

class ToolTip extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="w-6 h-6 relative inline-block">
        <div className="group inline-block">
          <InformationCircleIcon
            className="w-6 h-6 text-black ml-2 cursor-pointer"
          />
          <div className="w-max max-w-56 md:max-w-80 px-2 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
            <div className="relative bg-black text-white text-sm md:text-base font-normal leading-tight p-2 rounded shadow-lg">
              {text}
              <div className="w-3 h-3 absolute left-1/2 -bottom-1 transform -translate-x-1/2 bg-black rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolTip;