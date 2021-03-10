import { createContext, useState } from 'react';
import Sidebar from '../components/Sidebar';

interface SidebarContextData {
  isOpenCart: boolean;
  openCart(): void;
  closeCart(): void;
}

export const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData);

export const SidebarProvider = ({ children }) => {

  const [isOpenCart, setIsOpenCart] = useState(false);

  const openCart = () => {
    setIsOpenCart(true);
  }

  const closeCart = () => {
    setIsOpenCart(false);
  }
  return(
    <SidebarContext.Provider value={{ openCart, closeCart, isOpenCart }}>
      <Sidebar/>
      {children}
    </SidebarContext.Provider>
  );
}
