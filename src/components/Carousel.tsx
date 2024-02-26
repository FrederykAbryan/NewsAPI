import React from 'react';
import { Carousel } from 'antd';
import NewsCard from './Card';
import { dtArticle } from '../constant/DataType';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

type Props = {
  dt: []
}

const CarouselComponent = ({dt}: Props) => {
  return (
    <Carousel autoplay dotPosition='bottom'>
      {dt.map((v: dtArticle, i: number) => {
        return (
          <div style={contentStyle} key={i}>
          <NewsCard dt={v} type={'carousel'}/>
          </div>
        )
      })}
    </Carousel>
  )
};

export default CarouselComponent;