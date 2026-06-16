import { useEffect, useState } from 'react'
import './App.css'
import Camera from './componentes/camera'
import RespostaRapida from './componentes/respostaRapida'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {

  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    getDispositivos();
  }, []);

  async function getDispositivos() {
    let { data, error } = await supabase.from('dispositivos').select('nome');  
    if (error) {
      console.error(error);
      return;
    }
    setDispositivos(data);
  }

  return (
    <>
      <main class="min-w-0 flex-1">
        <div class="flex h-[calc(100svh-3rem)] flex-col gap-4 p-4 lg:flex-row">
          <div class="flex min-w-0 flex-1 flex-col gap-4">
            <div class="min-h-0 flex-1">
              <RespostaRapida />
            </div>
            <div class="min-h-0 flex-1">
              <div class="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <Camera nome="Estacionamento" numero="01"/>
                <Camera nome="Corredor" numero="02" />
                <Camera nome="Entrada" numero="03" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
