import { Divider, Flex, Skeleton } from "antd"
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
            <Flex wrap="wrap" justify={"space-between"} align={"flex-start"} gap={'middle'}>
                {sportDt.data?.articles.map((v: dtArticle, i: number) => {
                    return <NewsCard key={i} dt={v} />
                })}
            </Flex>
        </>
    )
}

export default Sport