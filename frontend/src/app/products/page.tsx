"use client"
import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/product.service'
import { Product, columns } from './columns'
import { DataTable } from '@/components/data-table'

export default function Page() {
  const [ data, setData ] = useState<any>([])
  const [ pagenumber, setPageNumber] = useState<number>(0)

  const getData = async(pagenumber=0)=>{
    console.log('pagenumber ',pagenumber)
    const data_get = await fetchProducts({ page:pagenumber, size:5, name:'Ivan', sort:'price' })
    // const data_get = await fetchProducts({ page:1, size:20, sort:'price' })
    
    let data_final = []
    for(let i=0; i<data_get.product.length; i++){
      data_final.push( { id:i+1, sku:data_get.product[i].sku, name:data_get.product[i].name, description:data_get.product[i].description, price:data_get.product[i].price } )
    }
    setData( data_final )
  }
  const getUsers = async()=>{
    const res = await fetch(
      'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    )
    const data = await res.json()
    console.log('fetc', data)
    setData( data );
  }

  useEffect( ()=>{ getData(); window.scrollTo({ top: 0, behavior: 'smooth' });  }, [] )
  // useEffect( ()=>{ getUsers(); window.scrollTo({ top: 0, behavior: 'smooth' });  }, [] )

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 text-3xl font-bold'>All Products</h1>
        {
          (!data) ? <h3>Loading...</h3>:
          <DataTable columns={columns} data={data} page={0} size={6} getData={getData} pageNumber={pagenumber} setPageNumber={setPageNumber} />
        }
      </div>
    </section>
  )
}