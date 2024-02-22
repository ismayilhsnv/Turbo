import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContext from './context/Context';
import Home from './pages/Client/Home/Home';
import ROUTER from './routes/Products.routes';
import { useEffect, useState } from 'react';
import axios from "axios"
import toast from "react-hot-toast"

const router = createBrowserRouter(ROUTER)

function App() {
  const [data, setData] = useState([])
  const [wishlist, setWishlist] = useState(localStorage.getItem("secilmis") ? JSON.parse(localStorage.getItem("secilmis")) : [])
  const [orginal, setOrginal] = useState([])
  const [marka,setMarka]=useState([])
  const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])
  const [homeCounter, setHomeCounter] = useState(localStorage.getItem("counter") ? Math.max(0, parseInt(localStorage.getItem("counter"))) : 0)
  useEffect(() => {
    axios.get("http://localhost:9090/turbo/").then(res => {
      setData(res.data);
      setOrginal(res.data)
      setMarka(res.data)
    })
  }, [])

  const addTOWishlist = (id) => {
    const target = data.find(item => item._id === id)
    if (!wishlist.find(prod => prod._id === id)) {
      setWishlist([...wishlist, target])
      localStorage.setItem("secilmis", JSON.stringify([...wishlist, target]))
      toast.success("Seçilmişlərə əlavə olundu")
    }
    else {
      toast.error("item mövcuddur")
    }
  }



  const HAndlerFilterBYtpye = (e) => {
    const sorting = e.target.value
    if (sorting == "df") {
      setData([...orginal])
    }
    else if (sorting == "sedan") {
      const target = orginal.filter((item) => item.type == "sedan")
      setData([...target])
    }
    else if (sorting == "Minivan") {
      const target = orginal.filter((item) => item.type == "Minivan")
      setData([...target])
    }
    else if (sorting == "Dartqı") {
      const target = orginal.filter((item) => item.type == "Dartqı")
      setData([...target])
    }
    else if(sorting=="Offroader / SUV"){
      const target=orginal.filter((item)=>item.type=="Offroader / SUV")
      setData([...target])
    }
  }

  const handleFilterByMarka=(e)=>{
    const sorting=e.target.value
    if (sorting == "df") {
      setData([...marka])
    }
    else if(sorting=="Mercedes"){
      const target=marka.filter((item)=>item.marka=="Mercedes")
      setData([...target])
    }
    else if(sorting=="BMW"){
      const target=marka.filter((item)=>item.marka=="BMW")
      setData([...target])
    }
    else if(sorting=="Hyundai"){
      const target=marka.filter((item)=>item.marka=="Hyundai")
      setData([...target])
    }
    else if(sorting=="Volvo"){
      const target=marka.filter((item)=>item.marka=="Volvo")
      setData([...target])
    }
    else if(sorting=="Jeep"){
      const target=marka.filter((item)=>item.marka=="Jeep")
      setData([...target])
    }
  }

  const handleFilterByMarket=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Avropa"){
      const target=orginal.filter((item)=>item.market=="Avropa")
      setData([...target])
    }
    else if(sorting=="Amerika"){
      const target=orginal.filter((item)=>item.market=="Amerika")
      setData([...target])
    }
    else if(sorting=="Rəsmi Diler"){
      const target=orginal.filter((item)=>item.market=="Rəsmi Diler")
      setData([...target])
    }
  }

  const handleFilterByFuel=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Dizel"){
      const target=orginal.filter((item)=>item.fuel=="Dizel")
      setData([...target])
    }
    else if(sorting=="Benzin"){
      const target=orginal.filter((item)=>item.fuel=="Benzin")
      setData([...target])
    }
  }

  const handleFilterBySpeedBox=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Avtomat"){
      const target=orginal.filter((item)=>item.speedBox=="avtomat")
      setData([...target])
    }
    else if(sorting=="Mexanika"){
      const target=orginal.filter((item)=>item.speedBox=="mexaniki")
      setData([...target])
    }
  }


  const handleFilterByPayment=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Kredit"){
      const target=orginal.filter((item)=>item.payment=="Kredit")
      setData([...target])
    }
    else if(sorting=="Barter"){
      const target=orginal.filter((item)=>item.payment=="Barter")
      setData([...target])
    }
  }

  const handleFilterByTransmitter=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Ön"){
      const target=orginal.filter((item)=>item.transmitter=="ön")
      setData([...target])
    }
    else if(sorting=="Arxa"){
      const target=orginal.filter((item)=>item.transmitter=="arxa")
      setData([...target])
    }
    else if(sorting=="Tam"){
      const target=orginal.filter((item)=>item.transmitter=="tam")
      setData([...target])
    }
  }

  const handleFilterBySituation=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...orginal])
    }
    else if(sorting=="Yeni"){
      const target=orginal.filter((item)=>item.situation=="yeni")
      setData([...target])
    }
    else if(sorting=="Surulmus"){
      const target=orginal.filter((item)=>item.situation=="sürülmüş")
      setData([...target])
    }
  }


  const addBasket = (item) => {
    const target = basket.find(product => product.id == item.id)
    if (!target) {
      let newItem = { ...item, count: 1, totalPrice: item.price }
      setBasket([...basket, newItem])
      setHomeCounter(homeCounter + 1)
      localStorage.setItem('basket', JSON.stringify([...basket, newItem]))

      localStorage.setItem("counter", homeCounter + 1)
      toast.success('Basketə əlavə olundu');
    }
    else {
      setHomeCounter(homeCounter + 1)
      localStorage.setItem("counter", homeCounter + 1)
      const newData = { ...item, count: target.count + 1, totalPrice: item.price * (target.count + 1) }
      setBasket([...basket.filter(element => element.id != item.id), newData])
      localStorage.setItem('basket', JSON.stringify([...basket.filter(element => element.id != item.id), newData]))
      toast.success('Basketə əlavə olundu');
    }
  }

  const handleIncrease = (item) => {
    let updatedata = [...basket]
    let target = updatedata.find(prod => prod.id == item.id)
    setHomeCounter(homeCounter + 1)
    localStorage.setItem("counter", homeCounter + 1)
    target.count += 1
    target.totalPrice = item.price * target.count

    setBasket(updatedata)
    localStorage.setItem("basket", JSON.stringify(updatedata))

  }


  const handleDecrease = (item) => {
    let updatedata = [...basket];
    let target = updatedata.find((prod) => prod.id === item.id);

    if (target.count > 1) {
      setHomeCounter(homeCounter - 1);
      localStorage.setItem("counter", homeCounter - 1);
      target.count -= 1;
      target.totalPrice = item.price * target.count;
      setBasket(updatedata);
      localStorage.setItem("basket", JSON.stringify(updatedata));
    }
    else {
      setHomeCounter(homeCounter - 1);
      localStorage.setItem("counter", homeCounter - 1);
      updatedata = updatedata.filter((prod) => prod.id !== item.id);
      setBasket(updatedata);
      localStorage.setItem("basket", JSON.stringify(updatedata));
    }
  };


  const datas = {
    data, setData,
    wishlist, setWishlist,
    addTOWishlist,
    HAndlerFilterBYtpye,handleFilterByMarka,handleFilterByMarket,handleFilterByFuel,handleFilterBySpeedBox,
    handleFilterByPayment,handleFilterByTransmitter,handleFilterBySituation,
    addBasket, basket, setBasket, homeCounter, handleIncrease, setHomeCounter, handleDecrease 
  }



  return (
    <MainContext.Provider value={datas}>
      <RouterProvider router={router} className="App">
        <Home />
      </RouterProvider>
    </MainContext.Provider>
  );
}

export default App;
