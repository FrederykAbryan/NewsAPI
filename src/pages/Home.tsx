import { Divider, Flex, Skeleton } from "antd"
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
            <Flex wrap="wrap" justify={"space-between"} align={"flex-start"} gap={'middle'}>
                {headlineDt.data?.articles.map((v: dtArticle) => {
                    console.log(v);
                    return <NewsCard dt={v} />
                })}
            </Flex>
        </>
    )
}

export default Home