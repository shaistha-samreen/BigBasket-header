const Header = () => {
  return (
    <main>
      <header>

        <div className="flex bg-lime-700 h-[6rem] justify-around">
          <div className="h-[5%] w-[2.5%] rounded-md mt-[2.5%] ml-[17%]"><img src='https://asset.brandfetch.io/idIM18oaEt/ido4w7OktD.svg?updated=1700263846558'></img>
          </div>
          <div className="flex h-[100%] w-[80%] ml-[2%]">
            <div className="text-white w-[30%]">
              <div className="flex items-center mt-[5%]"><img className="h-[30%] w-[10%] rounded-2xl" src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg"></img><div className="ml-[2%]"><b>Delivery Address</b></div><p className="font-thin text-xs mt-[1.5%]">--------------------------</p>  </div>
              <div><p className="text-xs font-thin items-center mt-[2%]">Home - 54652 1255 Siddiq Nagar, HITEC City</p></div>
            </div>
            <div className=" text-white w-[30%]">
              <div className="flex items-center mt-[5%]"><img className='h-[30%] w-[10%] rounded-2xl' src="https://st3.depositphotos.com/2068621/36089/v/450/depositphotos_360899008-stock-illustration-bike-delivery-icon-editable-line.jpg"></img><div className="ml-[2.5%]"><b>Delivery Options</b></div><p className="font-thin text-xs mt-[1.5%]">--------------------------</p></div>
              <p className="text-xs font-thin mt-[2%]">Choose your convenient date and time for <br></br> delivery </p></div>
            <div className=" text-white w-[30%]">
              <div className="flex items-center mt-[5%]"><img className='h-[30%] w-[10%] rounded-2xl' src="https://img.freepik.com/premium-vector/payment-gateway-icon-financial-technology_1024563-79.jpg"></img><div className="ml-[2.5%]"><b>Payment Options</b></div>
              </div>
              <p className="text-xs font-thin mt-[2%]">Pay Order amount by selecting any payment <br></br>mode</p>
            </div>
          </div>
        </div>

      </header>
    </main >
  )
};

export default Header;