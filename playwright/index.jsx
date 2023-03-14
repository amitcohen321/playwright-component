// Import styles, initialize component theme here.
// import '../src/common.css';

// playwright/index.jsx
import { beforeMount, afterMount } from "@playwright/experimental-ct-react/hooks";
import { QueryClientProvider, QueryClient } from "react-query";
import React from "react";

const AppContext = React.createContext(null);

beforeMount(async ({ App, hooksConfig }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppContext.Provider value={hooksConfig.overrides}>
        <App />
      </AppContext.Provider>
    </QueryClientProvider>
  );
});

// beforeMount(async ({ hooksConfig }) => {
//   if (hooksConfig?.overrides) {
//     return (
//       <QueryClientProvider client={new QueryClient()}>
//         <AppContext.Provider value={hooksConfig.overrides}>
//           <App />
//         </AppContext.Provider>
//       </QueryClientProvider>
//     );
//   }
// });
