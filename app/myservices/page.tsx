import { Title } from "@/components";
import { myServices } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section className="flex flex-col gap-y-14">
      <Title label="Offers __" />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4 md:gap-8">
        {myServices.map((item) => (
          <div
            key={item.title}
            className="dark:bg-transparent bg-primary_gray rounded px-5 py-10 flex 
                    flex-col justify-center items-center gap-4 shadow-sm shadow-light_gray"
          >
            <div className="bg-gray-300 p-2 rounded-full">
              <Image src={item.icon} alt={item.title} height={35} width={35} />
            </div>

            <h3 className="text-md font-bold">{item.title}</h3>
            <p className="text-center">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
