import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [section, setSection] = useState('home')
  return (
    <section>
      <div
        className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
        style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Navbar setSection = {setSection} />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <Content section={section}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

