import { useStore } from "../lib/zustand";

const xolatArr = ["boshlanmagan", "jarayonda", "tugallangan"];

function Xolat({ xolat }) {
  const { data, updateData } = useStore();
  const filterData = data.filter((item) => item.xolat === xolat);
  const selectedXolat = xolatArr.filter((item) => item !== filterData[0].xolat);

  function handleSelect(e, id) {
    updateData(id, e.target.value);
  }

  return (
    <div className="flex flex-col gap-6">
      {filterData.map(({ title, id }) => {
        return (
          <div key={id} className="border py-3 px-5">
            <h3 className="text-3xl text-center font-bold tracking-wider py-2">
              {title}
            </h3>
            <select onChange={(e) => handleSelect(e, id)}>
              {selectedXolat.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}

export default Xolat;
