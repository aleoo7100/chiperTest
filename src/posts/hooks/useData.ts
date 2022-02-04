import axios from "axios";
import { useEffect, useState } from "react";

export interface NEW{
  id: string,
  title: string,
  author: string,
  score: number,
  num_comments: number,
  thumbnail?: string,
  permalink?: string,
  created: number
}

interface NEWRESPONSE{
  data:NEW
}

export default function useData({url}:{url:string}) {
  const [news, setNews] = useState<NEW[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      const newsList:NEW[] = data.data?.children?.map( (newItem:NEWRESPONSE) => ({
        id: newItem.data.id,
        title: newItem.data.title,
        author:newItem.data.author,
        score:newItem.data.score,
        num_comments:newItem.data.num_comments,
        thumbnail:newItem.data.thumbnail,
        permalink:newItem.data.permalink,
        created:newItem.data.created,
      }));
      newsList.sort((a,b)=>{
        if(a.created>b.created)return -1;
        if(a.created<b.created)return 1;
        return 0;
      })
      setNews(newsList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return { news, loading, getNews };
}