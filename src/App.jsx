import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<Nav />}>
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<BrowseItem />} />
          <Route path="/log" element={<Log />} />
          <Route path="/displaylog" element={<DisplayLog />} />
          <Route path="/displaylog/:id" element={<LogItem />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
