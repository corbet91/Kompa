"use client";


import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import React, { type PropsWithChildren, useMemo } from "react";
import { getQueryClient } from "./get-query-client";

const AppQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient();

  const localStoragePersister = useMemo(
    () =>
      createSyncStoragePersister({
        storage:
          typeof window !== "undefined" ? window.localStorage : undefined,
      }),
    []
  );

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: localStoragePersister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};

export default React.memo(AppQueryProvider);
