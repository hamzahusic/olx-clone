const FirstStepCars = ({setManufacturer,manufacture,model,setModel}) => {
    const carManufacturers = [
        "Alfa Romeo",
        "Audi",
        "BMW",
        "Citroen",
        "Cupra",
        "Fiat",
        "Ford",
        "Hyundai",
        "Jeep",
        "Kia",
        "Mazda",
        "Mercedes-Benz",
        "Mitsubishi",
        "Nissan",
        "Opel",
        "Peugeot",
        "Renault",
        "Seat",
        "Škoda",
        "Suzuki",
        "Toyota",
        "Volkswagen",
        "Volvo",
        "Acura",
        "Aixam",
        "Alpina",
        "Asia Motors",
        "Aston Martin",
        "Austin",
        "Austin Healey",
        "Bentley",
        "Borgward",
        "Brilliance",
        "Bugatti",
        "Buick",
        "Cadillac",
        "Caterham",
        "Chery",
        "Chevrolet",
        "Chrysler",
        "Cobra",
        "Corvette",
        "Dacia",
        "Daewoo",
        "Daihatsu",
        "DeTomaso",
        "Dodge",
        "Drugi",
        "DS automobiles",
        "Ferrari",
        "Geely",
        "GMC",
        "Gonow",
        "Great Wall",
        "Holden",
        "Honda",
        "Hummer",
        "Infiniti",
        "Isuzu",
        "Jaguar",
        "Königsegg",
        "Lada",
        "Lamborghini",
        "Lancia",
        "Land Rover",
        "Landwind",
        "Lexus",
        "Ligier",
        "Lincoln",
        "Lotus",
        "Mahindra",
        "Maserati",
        "Maybach",
        "MG",
        "MINI",
        "Morgan",
        "NSU",
        "Oldsmobile",
        "Piaggio",
        "Plymouth",
        "Pontiac",
        "Porsche",
        "Proton",
        "Rolls Royce",
        "Rover",
        "Saab",
        "Samand",
        "Santana",
        "Smart",
        "Spyker",
        "Ssangyong",
        "Subaru",
        "Talbot",
        "Tata",
        "Tesla",
        "Trabant",
        "Triumph",
        "TVR",
        "Wartburg",
        "Wiesmann",
        "XEV",
        "Zastava"
    ];
    
    return ( 
        <div>
            <h1 className="text-2xl block text-center">Proizvođač i model</h1>
            <div className="flex flex-col py-2 gap-3">
                <div className="flex flex-col gap-1">
                    <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>PROIZVOĐAČ</p>
                    <select  className='bg-gray-100 outline-none p-3 rounded-md' value={manufacture} onChange={(e) => setManufacturer(e.target.value)}>
                        <option value="">Odaberite proizvođača</option>
                        {carManufacturers.map((manufacture) => (
                            <option value={manufacture} key={manufacture}>{manufacture}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                        <p className=' text-[12px] font-semibold tracking-wide mt-5 mb-2'>MODEL</p>
                        <input type="text" onChange={(e) => setModel(e.target.value)} value={model} className='bg-gray-100 outline-none p-3 rounded-md placeholder:text-gray-600 text-base' placeholder="Unesite model"/>
                </div>
            </div>
        </div>
     );
}
 
export default FirstStepCars;