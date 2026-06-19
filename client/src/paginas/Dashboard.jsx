import Camera from '../componentes/camera'
import CardsStatus from '../componentes/dashboard/CardsStatus'
import RespostaRapida from '../componentes/dashboard/RespostaRapida'
import PainelAlertas from '../componentes/dashboard/PainelAlertas'
import { useState, useEffect } from 'react'
import { createClient } from "@supabase/supabase-js"


const supabase = createClient("https://yeghuvshfbkwreeeuxjx.supabase.co", "sb_publishable_tJT3SJst4LsEa_5vWkODRQ_2OZbXhRD");

// Mapeamento das 6 câmeras do protótipo. O componente Camera é o original
// (não foi alterado) — só passamos as props que ele já aceita: nome e numero.
const CAMERAS = [
  { numero: '01', nome: 'Entrada Principal', url: "https://media.gettyimages.com/id/1382583677/pt/v%C3%ADdeo/people-walking-with-dog-in-the-early-morning-image-captured-by-cctv-surveillance-camera.mp4?s=mp4-640x640-gi&k=20&c=PQCFI10egKXVA-dewbmO-G63qBS9b4MH9SPhWq3biJ0="},
  { numero: '02', nome: 'Visão Rua', url: "https://media.gettyimages.com/id/1224074054/pt/v%C3%ADdeo/home-security-camera-point-of-view-of-couple-taking-a-walk-at-evening-during-the-2020-global.mp4?s=mp4-640x640-gi&k=20&c=1FcOMfRGFi__Bm1UehwmMFyEh3Q0rghnA0bc5Ig9Qzs="},
  { numero: '03', nome: 'Copa', url: "https://media.gettyimages.com/id/1297770174/pt/v%C3%ADdeo/view-form-surveillance-camera.mp4?s=mp4-640x640-gi&k=20&c=nQiMq45BZVg7bL3eU8AS8K5OOWvMKdInyMAzTktfi1o="},
  { numero: '04', nome: 'Corredor Leste', url: "https://media.gettyimages.com/id/1359004679/pt/v%C3%ADdeo/int-security-camera-angle-empty-hallway-in-large-brick-and-stone-hospital-or-college-building.mp4?s=mp4-640x640-gi&k=20&c=kOys483rV0J9QMsOp9wTwwvkqzRTuaWbIstVlUr_ctw=" },
  { numero: '05', nome: 'Saída por Trás', url: "https://media.gettyimages.com/id/1341485306/pt/v%C3%ADdeo/cctv-surveillance-camera-point-of-view-of-cat-walking-at-night.mp4?s=mp4-640x640-gi&k=20&c=ULzxi6fzRoEf6o88Q-1oGO1lu39yG7KbaOUll5QCVqI=" },
  { numero: '06', nome: 'Perímetro Sul' }
]

// Dados mockados — entram aqui até a conexão com o Supabase ser ajustada.
const ALERTAS_MOCK = [
  {
    id: 1,
    titulo: 'Sensor de movimento ativado',
    descricao: 'Estacionamento • Câmera 02',
    tempo: 'há 12s',
    nivel: 'critico',
  },
  {
    id: 2,
    titulo: 'Cerca elétrica — vibração detectada',
    descricao: 'Perímetro Sul • Câmera 06',
    tempo: 'há 1m',
    nivel: 'medio',
  },
  {
    id: 3,
    titulo: 'Porta aberta fora do horário',
    descricao: 'Entrada Principal • Câmera 01',
    tempo: 'há 3m',
    nivel: 'medio',
  },
  {
    id: 4,
    titulo: 'Temperatura acima do limite',
    descricao: 'Depósito • Câmera 05',
    tempo: 'há 7m',
    nivel: 'baixo',
  },
]

function Dashboard() {
  const [imagens, setImagens] = useState([]);
  useEffect(() => {
    getImagens();
  }, []);
  async function getImagens() {
    const { data, error } = await supabase.from("camera").select();
    if (error) {
      console.error(error);
      return;
    }
    setImagens(data);
  }

  return (
    <div className="flex h-full flex-col gap-4 p-4 lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <CardsStatus totalAlertas={ALERTAS_MOCK.length} />

        <RespostaRapida />

        <div className="grid min-h-0 flex-1 content-start gap-3 overflow-y-auto sm:grid-cols-2 xl:grid-cols-3">
          {imagens.map((camera) => (
            <Camera key={camera.id} numero={camera.id} nome={camera.nome} url={camera.imagem} />
          ))}
        </div>
      </div>

      <PainelAlertas alertas={ALERTAS_MOCK} />
    </div>
  )
}

export default Dashboard
