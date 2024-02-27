import { Col, Divider, Row, Skeleton } from "antd"
import { dtArticle } from "../constant/DataType"
import { showSport } from "../api/Queries"
import NewsCard from "../components/Card"

const Sport = () => {
    const sportDt = showSport()
    if (sportDt.isPending) {
        return (
            <Skeleton active />
        )
    }

    return (
        <>
            <Divider>Sport News</Divider>
            <Row gutter={[24, 24]}>
                {sportDt.data?.articles.map((v: dtArticle, i: number) => {
                    return <Col key={i} xs={24} sm={8} md={8} lg={12} xl={12} xxl={8}>
                        <NewsCard dt={v} />
                    </Col>
                })}
            </Row>
        </>
    )
}

export default Sport