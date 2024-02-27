import { Col, Divider, Row, Skeleton } from "antd"
import { showTopHeadline } from "../api/Queries"
import { dtArticle } from "../constant/DataType"
import NewsCard from "../components/Card"

const Home = () => {
    const headlineDt = showTopHeadline()
    if (headlineDt.isPending) {
        return (
            <Skeleton active />
        )
    }

    return (
        <>
            <Divider>Top Headlines</Divider>
            <Row gutter={[24, 24]}>
                {headlineDt.data?.articles.map((v: dtArticle, i: number) => {
                    return <Col key={i} xs={24} sm={8} md={8} lg={12} xl={12} xxl={8}>
                        <NewsCard dt={v} />
                        </Col>
                })}
            </Row>
        </>
    )
}

export default Home