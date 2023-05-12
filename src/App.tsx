import { useState, useEffect,FormEvent } from 'react'
import './App.css'
import * as C from './App.styles'
import * as Photos from './services/photos'
import { Photo } from './types/photo'
import { PhotoItem } from './components/photoItem'

function App() {
  const [upLoading, setUpLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if(file && file.size > 0) {
      setUpLoading(true)
      // envio de arquivo
      let result = await Photos.insert(file)
      setUpLoading(false)

      if (result instanceof Error) {
        alert(`${result.name} -- ${result.message}`)
      } else {
        let newPhotolist = [...photos]
        newPhotolist.push(result)
        setPhotos(newPhotolist)
      }
    }
  }

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header> Galeria de Fotos </C.Header>

          {/* area upload */}
          
          <C.UpLoadForm method="POST" onSubmit={handleFormSubmit} >
            <input type='file' name='image'/>
            <input type='submit' value='Enviar'/>
            {upLoading && "Enviando..."}
          </C.UpLoadForm >


          {loading &&
            <C.ScreenWarning>
              <div className='emoji'>  🕗 </div>
              <div> Carregando ...</div>
            </C.ScreenWarning>
          }

          {!loading && photos.length > 0 &&
            <C.PhotoList>
              {photos.map((item, index) => (
                <PhotoItem key={index} url={item.url} name={item.name}/>
              ))}
            </C.PhotoList>
          }

          {!loading && photos.length === 0 &&
            <C.ScreenWarning>
              <div className='emoji'> 😤 </div>
              <div> Não ha Fotos Cadastradas </div>
            </C.ScreenWarning>
          }
        </C.Area>
      </C.Container>
    </>
  )
}

export default App
