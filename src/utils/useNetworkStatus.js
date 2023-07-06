import { useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", function () {
      setIsOnline(true);
    });

    window.addEventListener("offline", function () {
      setIsOnline(false);
    });

    // return () => {
    //   window.removeEventListener("online");
    //   window.removeEventListener("offline");
    // };
  }, []);
  return isOnline;
};
