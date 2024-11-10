import { useEffect, useState } from "react";
import Page from "./page";

const InfiniteScrollPage = () => {
  type TData = {
    _id: string;
    name: string;
    trips: number;
  };

  type TApiResponse = {
    totalPages: number;
    totalPassengers?: number;
    data: TData[];
  };

  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const json: TApiResponse = await res.json();
      console.log(json);

      if (json.data.length > 0) {
        const filteredData = json.data.map((item) => ({
          _id: item._id,
          name: item.name,
          trips: item.trips,
        }));

        setData((prevData) => [...prevData, ...filteredData]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    //innerHeight = height of viewport
    //scrollTop = height from top of screen and scroll bar
    // scrollHeight = total height of scroll area (total content height)
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <Page title="Infinite Scroll">
      <div>
        {data.map((item, i) => (
          <div key={i} className="border p-10">
            <h3>{item.name}</h3>
            <p>Trips: {item.trips}</p>
          </div>
        ))}
        {loading && <p>Loading more items...</p>}
      </div>
    </Page>
  );
};

export default InfiniteScrollPage;
