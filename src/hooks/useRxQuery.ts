import { Subject } from "rxjs";
import { switchMap, debounceTime } from "rxjs/operators";
import { useQuery } from "@apollo/client";
import { useEffect, useState, useCallback } from "react";
import { DocumentNode } from "graphql/language";
import { GQL } from "../@types";
import { transformDataToFitUI } from "../utils/data.ts";

export default function (gql: DocumentNode): GQL.UseQueryReturnType {
  const [searchSubject] = useState(() => new Subject<string>());
  const [loader, setLoader] = useState<boolean>(false);
  const { loading, error, data, refetch } = useQuery(gql);

  useEffect(() => {
    // creating Rx subject that just listen for update
    const sub = searchSubject
      .pipe(
        debounceTime(300),
        switchMap(async (keywords) => {
          // call the dispatch here
          setLoader(true);
          return await refetch({ keywords });
        })
      )
      .subscribe(() => {
        setLoader(false);
      });
    return () => sub.unsubscribe();
    // eslint-disable-next-line
  }, []);

  const updateSearch: GQL.SearchUpdateFunc = useCallback(
    (searchVal: string) => {
      searchSubject.next(searchVal);
    },
    [searchSubject]
  );

  return {
    loading: loader || loading,
    data: transformDataToFitUI(data),
    error,
    updateSearch,
  };
}
