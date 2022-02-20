const fetchApi = async (method, url, data, headers = { 'Content-Type': 'application/json' }) => {

   const settings = {
      method: method.toUpperCase(),
      body: JSON.stringify(data),  // send it as stringified json
      credentials: 'include', // to keep the session on the request,
      headers: Object.assign({}, headers)
   };

   try {
      const res = await fetch(url, settings);
      const data = await res.json();
      return data;
   } catch (error) {

      return error;
   }

};

export default fetchApi;