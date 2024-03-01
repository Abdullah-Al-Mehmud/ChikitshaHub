import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const Specialties = () => {
  const axios = useAxiosPublic();
  const { data: specialties = [] } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await axios.get("/specialties");
      return res.data;
    },
  });

  const humanSpecialties = specialties.filter(category => category.type === 'human')

  const veterinarySpecialties = specialties.filter(category => category.type === 'veterinary')


  // console.log(specialties);
  return (
    <div className="py-6 max-w-6xl mx-auto">
      <Tabs className="py-16 lg:py-20">
          <TabList>
            <Tab>Human</Tab>
            <Tab>Veterinary</Tab>
          </TabList>

          <TabPanel>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto py-16 lg:py-20">
        {humanSpecialties?.map((category) => (
          <Link to={`/doctors/1/${category.specialties}`} key={category.id}>
            <div className="px-4 ">
              <div className="border-2 rounded-xl hover:border-[#409bd4] flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="bg-base-300 rounded-full w-32 h-32">
                  <img
                    className="w-24 h-24 p-4 mx-auto my-6"
                    src={category.image}
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h5 className="text-2xl font-semibold my-2">
                    {category.specialties}
                  </h5>
                  <p>{category.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto py-16 lg:py-20">
        {veterinarySpecialties?.map((category) => (
          <Link to={`/doctors/1/${category.specialties}`} key={category.id}>
            <div className="px-4 ">
              <div className="border-2 rounded-xl hover:border-[#409bd4] flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="bg-base-300 rounded-full w-32 h-32">
                  <img
                    className="w-24 h-24 p-4 mx-auto my-6"
                    src={category.image}
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h5 className="text-2xl font-semibold my-2">
                    {category.specialties}
                  </h5>
                  <p>{category.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
          </TabPanel>
        </Tabs>
    </div>
  );
};

export default Specialties;
