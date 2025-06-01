import Xolat from "./xolat";

function Jarayonlar() {
  return (
    <div className="container mx-auto flex justify-between items-center mt-20">
      <div>
        <h3 className="mb-5 text-xl font-bold capitalize">boshlanmagan:</h3>
        <Xolat xolat={"boshlanmagan"} />
      </div>
      <div>
        <h3 className="mb-5 text-xl font-bold capitalize">jarayonda:</h3>
        <Xolat xolat={"jarayonda"} />
      </div>
      <div>
        <h3 className="mb-5 text-xl font-bold capitalize">tugallangan:</h3>
        <Xolat xolat={"tugallangan"} />
      </div>
    </div>
  );
}

export default Jarayonlar;
