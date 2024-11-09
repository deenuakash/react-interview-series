type TPage = {
  title: string;
  children: React.ReactNode;
};

const Page = ({ title, children }: TPage) => {
  return (
    <div>
      <h3 className="text-3xl text-center font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default Page;
