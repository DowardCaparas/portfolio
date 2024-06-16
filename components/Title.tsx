interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  return (
    <div className="w-full bg-zinc-300 dark:bg-darked_gray h-full mb-12 py-3 -mt-2">
      <h2
        className="text-2xl md:text-4xl text-primary_black dark:text-primary_gray 
          font-bold container__padding"
      >
        {label}
      </h2>
    </div>
  );
};

export default Title;
