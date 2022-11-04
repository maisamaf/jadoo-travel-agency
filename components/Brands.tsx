import React from 'react'
import Alitalia from './brands/Alitalia'
import Axon from './brands/Axon'
import Expedia from './brands/Expedia'
import JetStar from './brands/JetStar'
import Qantas from './brands/Qantas'

type Props = {}

export default function Brands({}: Props) {
  return (
    <section className="w-8/12 pb-10 mx-auto my-10">
    <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row md:justify-between shrink-0">
      <Axon />
      <JetStar />
      <Expedia />
      <Qantas />
      <Alitalia />
    </div>
  </section>
  )
}