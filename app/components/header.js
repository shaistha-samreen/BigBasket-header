const Header = () => {
  return (
    <main>
      <header>
        <div className="flex bg-lime-700 text-white items-center justify-around px-56 h-28">



          <div className="font-bold items-center flex gap-16">
            <div className="h-9 w-10 rounded-md"><img src='https://asset.brandfetch.io/idIM18oaEt/ido4w7OktD.svg?updated=1700263846558'></img></div>
             <div className="mb-4"><div className="flex gap-3"><img src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg" className="h-7 w-7 rounded-2xl"></img><div className="flex">Delivery Address<p className="font-thin text-xs mt-1">---------------------</p></div></div>
            <p className="text-xs font-thin items-center mt-0.5">Home - 54652 1255 Siddiq Nagar, HITEC City</p></div></div>
          <div className="font-bold">
            <div className="flex gap-2"><img src="https://st3.depositphotos.com/2068621/36089/v/450/depositphotos_360899008-stock-illustration-bike-delivery-icon-editable-line.jpg" className="h-7 w-7 rounded-2xl"></img><div className="flex">Delivery Options<p className="font-thin text-xs mt-1">--------------------</p></div></div>
            <p className="text-xs font-thin mt-0.5">Choose your convenient date and time for <br></br> delivery </p></div>
          <div className="font-bold">
            <div className="flex gap-2"><img src="https://img.freepik.com/premium-vector/payment-gateway-icon-financial-technology_1024563-79.jpg" className="h-7 w-7 rounded-2xl"></img>Payment Options</div>
            <p className="text-xs font-thin mt-0.5">Pay Order amount by selecting any payment <br></br>mode</p></div>

        </div>
      </header>
    </main>
  )
};

export default Header;