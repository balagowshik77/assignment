const Loading = () => {
    let circleCommonClasses = 'h-2.5 w-2.5  rounded-full';
  
    return (
      <div className="flex items-center justify-center min-w-full min-h-full gap-2">
        <div className="text-xl font-semibold text-black">Loading</div>
        <div className='flex mt-1'>
            <div className={`${circleCommonClasses} mr-1 bg-[#020027] animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 bg-[#020027] animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} bg-[#020027] animate-bounce400`}></div>
        </div>
        </div>
    );
  };
  
  export default Loading;