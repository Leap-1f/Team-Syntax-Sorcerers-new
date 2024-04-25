export const Container4 = () => {
  const companies = [
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
  ];

  return (
    <div className="w-[100vw] h-[404px] flex justify-center items-center bg-[#DFAA0A] flex-col gap-[50px]">
      <h1 className="text-[35px]">Companies Worked With</h1>
      <div className="w-[1150px] h-[62px]   flex justify-between">
        {companies.map((company, index) => (
          <div key={index} className="w-[120px] h-[65px] border border-black">
            {company}
          </div>
        ))}
      </div>
    </div>
  );
};
