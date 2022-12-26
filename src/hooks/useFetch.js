// import { useLayoutEffect, useState } from "react";

// function useFetch (url) {
//   debugger
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   debugger
//   useLayoutEffect(
//     (url) => {
//       const fetchData = async () => {
//         setLoading(true);

//         try {
//           debugger;
//           const res = await fetch(url);
//           const json = await res.json();

//           setData(json);
//           setLoading(false);
//         } catch (error) {
//           setError(error);
//           setLoading(false);
//         }
//       };
//       fetchData();

//       // fetch(url)
//       //   .then((res) => {
//       //     return res.json();
//       //   })
//       //   .then((data) => {
//       //     setLoading(false);
//       //     setData(data);
//       //   })
//       //   .catch((err) => {
//       //     setError(error);
//       //     setLoading(false);
//       //     return err;
//       //   });
//     },
//     [url]
//   );

//   return { loading, error, data };
// };

// export default useFetch;
