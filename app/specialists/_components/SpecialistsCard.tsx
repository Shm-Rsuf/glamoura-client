import { specialistType } from '@/types/specialist'

interface SpecialistsCardProps {
  specialist: specialistType
}

const SpecialistsCard: React.FC<SpecialistsCardProps> = ({ specialist }) => {
  return <div className='bg-rose-400'>SpecialistsCard</div>
}

export default SpecialistsCard
