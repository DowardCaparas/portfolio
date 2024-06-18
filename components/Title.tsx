

interface TitleProps {
  label: string;
}

const Title = ({label}: TitleProps) => {
 
  return (
    <div className="w-full title__background py-4 md:-mt-32 -mt-28 fixed">
      <h2
        className="text-2xl md:text-3xl text-primary_black dark:text-primary_gray 
          font-bold container__padding mt-2"
      >
        {label}
      </h2>
    </div>
  );
}

export default Title;
