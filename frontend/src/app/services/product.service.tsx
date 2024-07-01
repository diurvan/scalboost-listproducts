
const fetchProducts = async (query_string:any) => {
     try {
          const { page=1, size=10, name='', order='name' } = query_string

          const queryParams = new URLSearchParams({ page:page+1, size:size, name:name, order:order });

          const data_fetch = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/v1/product?${queryParams}`, {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json'
               },
          })

          const data_products = await data_fetch.json()
          return data_products
     } catch (error) {
       console.log(error);
       throw error;
     }
   };

   
   export {
     fetchProducts
   };
   