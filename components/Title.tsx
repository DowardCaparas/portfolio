

interface TitleProps {
  label: string;
}

const Title = ({label}: TitleProps) => {
 
  return (
      <h2 className="text-lg md:text-2xl"
      >
        {label}
      </h2>
  );
}

export default Title;
