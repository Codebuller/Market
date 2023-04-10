import Navbar from '@/components/navbar/Navbar'
import { Col, InputNumber, Layout, Menu, Row } from 'antd';
import styles from './LeftModal.module.css'
import { useEffect, useState } from 'react'
import { Slider } from 'antd';
const { Header, Content, Sider } = Layout;
const LeftModal = ({getCostRange}) => {
  const [inputValue1, setInputValue1] = useState(1);
  const onChange1 = (newValue: number) => {
    setInputValue1(newValue);
  };
  const [inputValue2, setInputValue2] = useState(1000000);
  const onChange2 = (newValue: number) => {
    setInputValue2(newValue);
  };
  const [interval,setInterval] = useState([100,1000000]);
  
  useEffect(()=>{
    getCostRange(interval);
  },[interval])
    const [visible,setVisible] = useState(false);
  return <> 

  <Sider  
  className={styles.sidr}  
  width='10vw' 
  onClick={(e)=>{setVisible(!visible)}} 
    collapsedWidth='25vw' collapsed={visible}  >
    <div onClick={(e)=>{e.stopPropagation();}} className={styles.dopSorting}>

      <Slider 
        onChange={(value)=>{setInterval(value);                 
        }}
         className={styles.slider} 
         step={50}
         range={{ draggableTrack: true }} 
         min={100}
         value={interval}
         max={1000000} defaultValue={[500, 1000]} 
         />
        <InputNumber
          min={100}
          step={50}
          max={1000000}
          defaultValue={100}
          style={{ margin: '0 16px' }}
          value={interval[0]}
          onChange={(event)=>setInterval([event,interval[1]])}
        />
        <InputNumber
          min={100}
          step={50}
          defaultValue={1000000}
          max={1000000}
          style={{ margin: '0 16px' }}
          value={interval[1]}
          onChange={(event)=>setInterval([interval[0],event])}
        />

      
   </div>     
    </Sider>
       
  
       
  </>
}
    
export default LeftModal ;