import React from 'react'
// import Compo from './ComponentsProps/Compo'
// import UseStateHook from './4_useStateHook/useStateHook'
import ConditionalRendering from './5_ConditionalRendering/ConditionalRendering'
import ListRenderingmapanKeys from './6_List RenderingmapandKeys/ListRenderingmapanKeys'
import FormsControlledComponents from './7_FormsControlledComponents/FormsControlledComponents'
import UsseEffect from './8_useEffect/UsseEffect'
import WindowWitdth from './8_useEffect/WindowWitdth'
import LiftingStateUp from './10_LiftingStateUp/LiftingStateUp'
import ComponentReusability from './11_ComponentReusability/ComponentReusability'
import Todo from './phase1_mini_1/Todo'
import ExpenseTracker from './phase1_mini_2/ExpenseTracker'
import ShoppingCart from './phase1_mini_3/ShoppingCart'
// import CustomHooks from './P2_11_CustomHooks/CustomHooks'
import StateEvents from './StateEvents/StateEvents'
import CustomHook from './12_CustomHook/CustomHook'
import UseReef from './13_UseRef/UseReef'
import { UseCallbackExample } from './14_UseMemoAndUseCallback/UseCallbackExample'
import UseMemoAndCallback from './14_UseMemoAndUseCallback/UseMemoAndCallback'
import Home from './15_ContextApi/Home'
import UserProvider from './15_ContextApi/UserProvider'
import Navvbar from './15_ContextApi/Navvbar'
import Head from './15_ContextApi/learncontext/Head'
import Main from './16_ReactRouter/Main'
import { BrowserRouter } from 'react-router-dom'
import ReactLazy from './17_ReactLazyAndSuspense/ReactLazy'
import Aap from './Phase2_mini_1/Aap'
import { ThemeProvider } from './Phase2_mini_1/context/ThemeContext'
import { AuthProvider } from './Phase2_mini_1/context/Authcontext'

const App = () => {

  return (
    <div>
      {/* components and props */}
      {/* <Compo /> */}

      {/* State & Events */}
      {/* <StateEvents /> */}


      {/* 4. useState Hook */}
      {/* <UseStateHook /> */}


      {/* 5. Conditional Rendering */}
      {/* <ConditionalRendering /> */}


      {/* 6. List Rendering (.map) & Keys */}
      {/* <ListRenderingmapanKeys /> */}


      {/* Topic 7: Forms & Controlled Components */}
      {/* <FormsControlledComponents /> */}


      {/* Topic 8: UseEffect */}
      {/* <UsseEffect /> */}
      {/* <WindowWitdth /> */}


      {/*  9. useRef */}
      {/* <UseReff /> */}


      {/* 10. Lifting State Up */}
      {/* <LiftingStateUp /> */}


      {/* 11. Component Reusability */}
      {/* <ComponentReusability /> */}


      {/* Phase 1. Todo-project */}
      {/* <Todo /> */}


      {/* Phase 1. ExpenseTracker */}
      {/* <ExpenseTracker /> */}


      {/* Phase 1. Shopping cart */}
      {/* <ShoppingCart /> */}






      {/* Phase 2 */}

      {/* 12. Custom Hooks */}
      {/* <CustomHook />   */}


      {/* 13. useRef */}
      {/* <UseReef /> */}


      {/* 14. useCallback & useMemo */}
      {/* <UseMemoAndCallback /> */}


      {/* 15. Context Api */}
      {/* <UserProvider>
        <Home />
      </UserProvider> */}

      {/* <ThemeProvider>
        <div className="min-h-screen flex items-center justify-center">
          <Navvbar />
        </div>
      </ThemeProvider> */}

      {/* <Head /> */}



      {/* 16. React Router */}
      {/* <BrowserRouter>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </BrowserRouter> */}



      {/* 17. React Lazy & Suspense */}
      {/* <ReactLazy /> */}


      {/* Phase 2, mini 1 */}
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <Aap />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>

      









    </div>
  )
}

export default App