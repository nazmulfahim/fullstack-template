import { ModalContextProvider } from "./Modal/context";

const index = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export default index;
