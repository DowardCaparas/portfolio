

interface TitleProps {
  label: string;
}

const Title = ({label}: TitleProps) => {
 
  return (
    <div className="w-full bg-primary_gray dark:bg-secondary_black py-1 -mt-36 fixed">
      <h2
        className="text-xl md:text-2xl text-primary_black dark:text-primary_gray 
          font-bold mt-1 container__padding"
      >
        {label}
      </h2>
    </div>
  );
}

export default Title;
