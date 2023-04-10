import React from 'react';
import { Card } from 'antd';
import Image from 'next/image'
import styles from './CardProduct.module.css'
import {PlusOutlined,HeartOutlined} from '@ant-design/icons'
import Link from 'next/link';


const { Meta } = Card;
const CardProduct =({List,add})=>{
    return(
        <>
        <div className={styles.products}>
    {List.map((elem)=>{
        let pathToImg = `/images/${elem.id}.jpg`;
        return <Card
        hoverable
        className={styles.product}
        style={{ width: 240 }}
        cover={<Image width={240} height={150} alt="example" src={pathToImg}/> }
        id={elem.id}
        >
            <Link href={`/store/${elem.id}`}>
             <Meta  style={{marginBottom:'10px'}} title={elem.name} description={elem.discript} />
             
             <Meta style={{  textAlign: 'right',fontWeight:'bold',marginBottom:'15px'}} description={elem.autor} />
             </Link>
             <div style={{ display:'flex'}}>    
             <PlusOutlined className={styles.icon1} onClick={()=>{add(elem)}}/>
             <HeartOutlined className={styles.icon2} />
             </div>
            </Card>
          
    })}
    </div>
        </>
    )
}
export default CardProduct;