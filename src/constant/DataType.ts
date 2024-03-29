export type articleType = {
    dt : dtArticle
}
export type dtArticle = {
        source: Source;
        author?: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
  }
  
  interface Source {
    id: string | null;
    name: string;
  }