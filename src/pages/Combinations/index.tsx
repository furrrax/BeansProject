import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { combinationsSelector } from "../../Redux/combinations/combinationsSelector";
import { useAppDispatch } from "../../Redux/store";
import { Error } from "../../components/Error";
import { getCombinations } from "../../api/combinations";
import style from "./style.module.css";

export const CombinationsPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, totalPages, isError } =
    useSelector(combinationsSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCombinations(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className={style.combinations_container}>
      <h1>Explore Combinations ...</h1>
      {isLoading && data.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          className={style.infinite_scroll_comb}
          next={load}
          dataLength={data.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          {data.map((item) => (
            <div
              key={`combination_item_${item.combinationId}`}
              className={style.item}
            >
              <h3>{item.name}</h3>
              <p>{item.tag.map((item) => item + " ")}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
