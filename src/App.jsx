import { useState } from 'react';
import SearchLocation from './components/SearchLocation/SearchLocation';
import Dashboard from './components/Dashboard/Dashboard';
import Logo from './components/Logo/Logo';
import Back from './components/Back/Back'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [isGeolocation, setIsGeolocation] = useState(true)
  const status = ( data === null || 'success' in data ) ? false : true;
  

  function createLink(value){
    return `http://api.weatherstack.com/current?access_key=4657cd4dcf46b034d2eea71e4837d4b2&query=${value}`
  }


  async function getData(value){
      setIsLoading(true)
      const link = createLink(value);
      const response = await fetch(link)
      const data = await response.json()
      console.log(data)
      setData({...data})
      setIsLoading(false)
  }

  async function getLocalData(){
    setIsLoading(true)

    navigator.geolocation.getCurrentPosition(success, error)
    async function success(position){
      const { latitude, longitude } = await position.coords
      const value = `${latitude},${longitude}`
      await getData(value)
    }

    function error(){
      setIsGeolocation(false)
    }

    setIsLoading(false)
}

  return (
    <>
      <Logo onClick={()=>setData(null)}/>
      {
         status 
         ? 
         <Dashboard data={data}/>
         : 
         <SearchLocation isLoading={isLoading}  getData={getData} data={data} onClick={getLocalData} isGeolocation={isGeolocation}/>
      }
      {status && <Back onClick={()=>setData(null)}/>}
      </>
  );
}

export default App;