/// <reference types="vite/client" />

declare module "*.css" {
  const content: string;
  export default content;
}

// Allow CSS imports as side effects from node_modules
declare module "react-toastify/dist/ReactToastify.css" {
  const content: string;
  export default content;
}
