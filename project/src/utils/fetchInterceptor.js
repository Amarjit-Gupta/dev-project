// import { base_url } from "../URL";

import { nURL } from "../URL";

const originalFetch = window.fetch;

let isRefreshing = false;
let refreshPromise = null;

window.fetch = async (input, init = {}) => {
  const response = await originalFetch(input, {
    credentials: "include",
    ...init,
  });

  if (response.status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;

      refreshPromise = originalFetch(`${nURL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
      }).then((res) => {
        isRefreshing = false;
        if (!res.ok) throw new Error("Refresh failed");
        return res;
      });
    }

    try {
      await refreshPromise;
      // retry original request
      return originalFetch(input, {
        credentials: "include",
        ...init,
      });
    } catch (err) {
      window.location.href = "/login";
      throw err;
    }
  }

  return response;
};