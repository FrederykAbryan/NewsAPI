import { Col, Divider, Row, Skeleton } from 'antd'
import CarouselComponent from '../components/Carousel'
import { showTech } from '../api/Queries'
import { dtArticle } from '../constant/DataType'
import NewsCard from '../components/Card'

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
            <Row style={{ marginTop: 24 }} gutter={[24, 24]}>
                {techDt.data?.articles.slice(5).map((v: dtArticle, i: number) => {
                    return <Col key={i} xs={24} sm={8} md={8} lg={12} xl={12} xxl={8}>
                        <NewsCard dt={v} />
                        </Col>
                })}
            </Row>
        </>
    )
}

export default Tech