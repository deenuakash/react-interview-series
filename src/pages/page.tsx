type TPage = {
  title: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: TPage) => {
  return (
    <div className="container mx-auto my-0 w-[70%]">
      <h3 className="text-3xl text-center font-semibold mb-5">{title}</h3>
      {children}
    </div>
  );
};

export default Page;
