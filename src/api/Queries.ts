/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query"
import { topHeadline, getSport, getTech } from "./MasterAPI"

export function showTopHeadline() {
    return useQuery({
        queryKey: ["headline"],
        queryFn: topHeadline,
        refetchOnWindowFocus: false
        // enabled: true
    })
}
export function showSport() {
    return useQuery({
        queryKey: ["sport"],
        queryFn: getSport,
        refetchOnWindowFocus: false
        // enabled: true
    })
}
export function showTech() {
    return useQuery({
        queryKey: ["tech"],
        queryFn: getTech,
        refetchOnWindowFocus: false
        // enabled: true
    })
}