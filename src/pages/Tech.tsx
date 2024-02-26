import { Divider, Skeleton } from 'antd'
import CarouselComponent from '../components/Carousel'
import { showTech } from '../api/Queries'
import { dtArticle } from '../constant/DataType'
import NewsCard from '../components/Card'

const divsStyle: React.CSSProperties = {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginTop: '20px', 
    gap: '10px'
};
const Tech = () => {
    const techDt = showTech()

    if (techDt.isPending) {
        return (
            <Skeleton active />
        )
    }
    return (
        <>
            <Divider>Tech News</Divider>
            <CarouselComponent dt={techDt.data?.articles.slice(0, 5)} />
            <div style={divsStyle}>
                {techDt.data?.articles.slice(5).map((v: dtArticle, i: number) => {
                    return <NewsCard dt={v}  key={i}/>
                })}
            </div>
        </>
    )
}

export default Tech