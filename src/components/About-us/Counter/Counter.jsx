
const Counter = () => {

  const counterData = [
    {
      id: 1,
      title: "Happy Clients",
      total: "1800+",
      icon: "/assets/thumb-icon.svg"
    },
    {
      id: 2,
      title: "Finished Projects",
      total: "600+",
      icon: "/assets/bag-icon.svg"
    },
    {
      id: 3,
      title: "Skilled Experts",
      total: "200+",
      icon: "/assets/expert-icon.svg"
    },
    {
      id: 4,
      title: "Clients Satisfaction",
      total: "26%",
      icon: "/assets/trophy-icon.svg"
    },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto px-[1%] lg-[100px]">
        <div className="py-24">
          <div className="flex flex-wrap justify-center items-center">
            {
              counterData?.map((counter) => (
                <div key={counter?.id} className="py-3 lg:w-1/4 sm:w-1/2 w-full xl:px-8 flex justify-center gap-3 items-center">
                  <div className="p-4 bg-blue-200/50 rounded-lg">
                    <img src={counter?.icon} className="w-10 xl:w-10 h-auto" alt="icon" />
                  </div>
                  <div className="w-[150px]">
                    <h1 className="text-blue-900 text-xl xl:text-5xl font-semibold">{counter?.total}</h1>
                    <p className="pt-1 text-md text-blue-900/95 tracking-wide capitalize">{counter?.title}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;