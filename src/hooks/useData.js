import { useQuery } from "@tanstack/react-query";
import { getPostsData, getTrendingData, getPopularData } from "../index";

export function usePostData(){
    return useQuery({ queryKey: ['posts'], queryFn: getPostsData })
}

export function usePopularData(){
    return useQuery({ queryKey: ['popularPosts'], queryFn: getPopularData })
}   

export function useTrendingData(){
    return useQuery({ queryKey: ['trendingPosts'], queryFn: getTrendingData })
}