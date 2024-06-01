import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1059px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-black font-clash-display lg:flex-wrap ${className}`}
    >
      <div className="w-[141px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-8xs-2 text-gray-300">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-14">
            <div className="relative font-medium inline-block min-w-[9px] z-[8]">
              TM
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-black">
            <div className="self-stretch relative leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
              help@frybix.com
            </div>
            <div className="self-stretch relative leading-[26px] capitalize font-medium whitespace-nowrap z-[8]">
              +1 234 456 678 89
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82px] flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit text-center inline-block min-w-[82px] z-[8] mq1050:text-7xl mq1050:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
          links
        </h2>
        <div className="w-[53px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
          <div className="flex-1 relative leading-[26px] capitalize font-medium z-[8]">
            home
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
            about us
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
            bookings
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[34px] z-[8]">
            blog
          </div>
        </div>
      </div>
      <div className="w-[108px] flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[83px] z-[8] mq1050:text-7xl mq1050:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
          legal
        </h2>
        <div className="self-stretch relative leading-[26px] capitalize font-medium z-[8]">
          terms of use
        </div>
        <div className="self-stretch relative leading-[26px] capitalize font-medium z-[8]">
          privacy policy
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[102px] z-[8]">
          cookie policy
        </div>
      </div>
      <div className="w-32 flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit z-[8] mq1050:text-7xl mq1050:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
          product
        </h2>
        <div className="w-20 relative leading-[26px] capitalize font-medium inline-block z-[8]">
          take tour
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[72px] z-[8]">
          live chat
        </div>
        <div className="relative leading-[26px] capitalize font-medium inline-block min-w-[66px] z-[8]">
          reveiws
        </div>
      </div>
      <div className="w-[340px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <h2 className="m-0 w-[173px] relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block z-[8] mq1050:text-7xl mq1050:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
          Newsletter
        </h2>
        <div className="w-[122px] relative leading-[26px] capitalize font-medium inline-block z-[8]">
          Stay up to date
        </div>
        <div className="self-stretch shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white flex flex-row items-start justify-between py-2.5 pr-2.5 pl-6 box-border max-w-full gap-[20px] z-[8] text-gray-200 mq450:flex-wrap">
          <div className="h-[81px] w-[340px] relative shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <div className="relative leading-[26px] font-medium inline-block min-w-[83px] z-[1]">{`Your email `}</div>
          </div>
          <button className="cursor-pointer [border:none] pt-[18px] px-10 pb-[17px] bg-black w-40 rounded flex flex-row items-start justify-start box-border z-[1] hover:bg-darkslategray">
            <div className="h-[61px] w-40 relative rounded bg-black hidden" />
            <div className="flex-1 relative text-base leading-[26px] capitalize font-medium font-clash-display text-white text-left z-[1]">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
