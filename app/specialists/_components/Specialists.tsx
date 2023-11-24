'use client'
import Error from '@/components/ui/Error'
import Loading from '@/components/ui/Loading'
import SectionTitle from '@/components/ui/SectionTitle'
import useFetch from '@/hooks/useFetch'
import { specialistType } from '@/types/specialist'
import SpecialistsCard from './SpecialistsCard'

const Specialists = () => {
  const { data: specialists, isLoading, error } = useFetch('/api/specialists')
  return (
    <section className='sp container'>
      <SectionTitle title='Specialists' />
      {!error && isLoading && <Loading isLoading={isLoading} />}
      {!isLoading && error && <Error error={error.message} />}
      {specialists && (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {specialists.map((specialist: specialistType) => (
            <SpecialistsCard key={specialist._id} specialist={specialist} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Specialists
