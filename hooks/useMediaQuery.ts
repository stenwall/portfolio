import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const handleResize = (event: { matches: boolean }) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener('change', handleResize);
    return (): void =>
      mediaQueryList.removeEventListener('change', handleResize);
  }, [query]);

  return matches;
};

export default useMediaQuery;

// function useMediaQuery(query) {
//   const [matches, setMatches] = React.useState(false);
//   React.useEffect(() => {
//     const matchQueryList = window.matchMedia(query);
//     function handleChange(e) {
//       setMatches(e.matches);
//     }
//     matchQueryList.addEventListener("change", handleChange);
//     return () => {
//       matchQueryList.removeEventListener("change", handleChange);
//     };
//   }, [query]);
//   return matches;
// }
