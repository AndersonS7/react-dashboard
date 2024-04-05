import { Menu } from "./components/menu"

function App() {
  return (
    <div className='flex mx-auto p-8 bg-gray-100'>
      <Menu />
      <div className="bg-blue-400 flex-auto w-4/5">
        Coluna-2
      </div>
    </div>
  )
}

export default App
