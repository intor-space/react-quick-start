import type { ReactNode } from "react";
import { getClientLocale, IntorProvider } from "intor/react";
import { intorConfig } from "./intor-config";

export function IntorClientProvider({ children }: { children: ReactNode }) {
  const locale = getClientLocale(intorConfig);

  return (
    <IntorProvider value={{ config: intorConfig, locale }}>
      {children}
    </IntorProvider>
  );
}
