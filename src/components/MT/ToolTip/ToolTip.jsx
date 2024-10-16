import React from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from '@heroicons/react/24/solid';

class ToolTip extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <Tooltip
        placement="top"  
        interactive={true} 
        offset={5} 
        className="relative"
        content={
          <div className="w-56 md:w-80">
            <Typography
              variant="small"
              color="white"
              className="font-normal leading-tight opacity-100"
            >
              {text}
            </Typography>
          </div>
        }
      >
        <InformationCircleIcon
          className="relative size-6 font-bold text-black ml-2"
        />
      </Tooltip>
    );
  }
}

export default ToolTip;