import { LayoutGrid } from 'lucide-react'
import EstadoPagina from '../componentes/EstadoPagina'

function Dashboard() {
  return (
    <EstadoPagina
      icon={LayoutGrid}
      titulo="Dashboard Principal"
      descricao="add depois."
    />
  )
}

export default Dashboard
