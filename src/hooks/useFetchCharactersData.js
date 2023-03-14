import { useQuery } from "react-query";
import axios from "axios";

export const useFetchCharactersData = (onSuccess, onError)  => {
  return useQuery(
    "query-get-characters", // for dynamic query use array of strings
    () => {
      return axios.get(
        "https://random-data-api.com/api/v2/users?size=4%E2%82%AAresponse_type=json"
      );
    },
    {
      enabled: true, // false for fetching on button click, !!varible - for fetching on variable change from undefined (falsy) to a value (truthy - data fetched)
      cacheTime: 50000, // default is 5 minutes - dont show loading when data is cached but still network fetch data
      staleTime: 30000, // default is 0 - dont make network fetch data requests
      refetchOnMount: true, // component mount like useEffect - true/false/'always',
      refetchOnWindowFocus: true, // tab/window focus - true/false/'always',
      refetchInterval: false, // interval in ms - true/false/number - fetch and mount/render, paused on window focus out
      refetchIntervalInBackground: false, // polling in background
      onSuccess, // method to call on success
      onError, // method to call on error
      select: (data) => {
        // method to call on data - transform data
        const modifiedData = data?.data.map((character) => {
          return {
            id: character.id,
            first_name: character.first_name,
            last_name: character.last_name,
            avatar: character.avatar,
          };
        });

        return modifiedData;
      },
    }
  );
};
