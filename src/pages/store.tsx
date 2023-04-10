import LeftModal from '@/components/leftModal/LeftModal'

import Navbar from '@/components/navbar/Navbar'
import { Input, Select } from 'antd'

import Search from 'antd/es/transfer/search'
import { useEffect, useState } from 'react'
import data from '@/db/Database'
import { sortedByCosts, sortedProducts } from '@/hooks/useProducts'
import { AudioOutlined } from '@ant-design/icons'
import CardProduct from '@/components/card/CardProduct'

export default function StorePage() {
  //поисковик
  const [searchData ,setSearhData] = useState(data);
  const [query,setQuery] = useState('');
  useEffect(()=>{
    setSearhData(sortedProducts(data,query))
  },[query])
  
  //фильтр стоимости
  const [cost,setCost] = useState([0,10000000]);
  const [sortByCost,setSortByCost] = useState(searchData);//этот список сейчас и передаётся в cardProduct

  const getCostRange = (event:[number,number]) =>
  {
    setCost(event);//получение ограничения по стоимости
  }
  useEffect(()=>{
    setSortByCost(sortedByCosts(searchData,cost[0],cost[1]))
  },[cost,searchData])
  
    const { Search } = Input;
    const onSearch = (e: any) => setQuery(e.target.value);
   
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );
    const [productsToBuy,setProductsToBuy]  = useState([]);
    const add = (e) =>  {
      setProductsToBuy(productsToBuy.concat(e)); //добавление в корзину,функция передаваемая в карточку товара 
      setVisible(true);
    }
    const [visiable,setVisible] = useState('false');
    const changeVisiable=()=>{
     setVisible(!visiable) ;
    }
  return <> 
  <Navbar visiable={visiable} changeVisiable={changeVisiable} productsToBuy={productsToBuy}/>
 
  <div className='store' style={{backgroundColor:'#a1a5a8'}}>
  <LeftModal getCostRange={getCostRange}/>
  < >
      <div style={{display: 'block'}}>
          <div style={{  marginTop: '80px', display: 'flex', marginLeft: '5vw'}}>
              <Search  style={{ marginRight: '3vw',width: '38vw',justifyItems: 'center'}} placeholder="input search text" onChange={onSearch} enterButton />
              <Select
  placeholder='Сортироывать по'
  
  style={{ width: 200 }}
  
      options={ [
      { label: 'Популярности', value: 'rateProduct' },
      { label: 'Рейтингу автора', value: 'rateAutor' },
      ]}
  
/>

          </div >
          <CardProduct List={sortByCost} add = {add} />
          </div>
        </>
  </div>
  
 
  </>
}




      
  
