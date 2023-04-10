import LeftModal from '@/components/leftModal/LeftModal'
import Magazine from '@/components/magazin/Magazin'
import Navbar from '@/components/navbar/Navbar'
import data from '@/db/Database'
import { useRouter } from 'next/router'
import styles from './[id].module.css'
import { Rate } from 'antd';
import { Card, Space } from 'antd';
import Image from 'next/image'
export default function ProductPage() {
    const router = useRouter();
    let num :number;
    if(router.query.id !== undefined)
    num = (parseInt(router.query.id));
      else
      return <></>
     let {  file, rate, id, autor, discript, name} =  data[num-1];
     console.log(num);
     let pathToImg = `/images/${num}.jpg`;
  return <> 
 
  <Navbar />
 
  <div style={{backgroundColor:'#a1a5a8'}}>
   <div className={styles.top}> 
   
   <h1 className={styles.text}>{name}</h1> 
   <Rate className={styles.stars} allowHalf defaultValue={rate} />
   </div> 
   <div className={styles.paintConteiner}>
    <Image  className={styles.picture} placeholder='blur' blurDataURL='6' src={pathToImg} quality={100} alt='Не судьба' fill />
    </div>
    <h1 style={{paddingLeft:'1vw'}}>{`Autor: ${autor}`}</h1>
    <Space style={{marginLeft:'30vw',width: '40vw',marginRight:'30vw',marginTop:'10vw' }}  direction="vertical" size={16}>
    <Card   >
      <p>{discript}</p>
    </Card>
    </Space>
    </div>
 
  </>
}
