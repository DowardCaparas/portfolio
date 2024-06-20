

interface TitleProps {
  label: string;
}

const Title = ({label}: TitleProps) => {
 
  return (
    <div className="w-full bg-primary_gray dark:bg-darked_gray py-4 md:-mt-32 
    -mt-36 fixed">
      <h2
        className="text-2xl md:text-3xl text-primary_black dark:text-primary_gray 
          font-bold mt-2 container__padding"
      >
        {label}
      </h2>
    </div>
  );
}

export default Title;
