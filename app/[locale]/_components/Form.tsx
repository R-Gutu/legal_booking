
const Form = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 z-50 backdrop-blur-md flex items-center justify-center">
        <div className="bg-white w-[90%] md:w-[50%] lg:w-[30%] h-[80%] rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="">
                <div className="flex flex-col gap-4 items-center justify-center p-8 rounded-xl drop-shadow-xl">
                    <p>Nume complet</p>
                    <input type="text" className="border-b-2 border-black" placeholder="(Introduceti numele Dvs.)"/>
                </div>
                <div className=""></div>
            </div>
        </div>
    </div>
  )
}

export default Form