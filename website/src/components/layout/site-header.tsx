import {
  DesktopNav,
  HeaderActions,
} from "@/components/layout/desktop-nav";
import { HeaderOffsetTracker } from "@/components/layout/header-offset-tracker";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavActiveProvider } from "@/components/layout/nav-active-provider";
import { navSectionIds } from "@/content/navigation";

export function SiteHeader() {
  return (
    <HeaderOffsetTracker>
      <header>
        <div className="mx-auto flex w-full max-w-7xl items-center gap-5 rounded-full px-5 py-3 sm:gap-6 sm:px-7 lg:gap-8 lg:px-8 header-pill">
          <Logo className="shrink-0" />

          <NavActiveProvider sectionIds={navSectionIds}>
            <div className="flex min-w-0 flex-1 items-center justify-end gap-4 lg:gap-6">
              <DesktopNav />
              <HeaderActions mobileNav={<MobileNav />} />
            </div>
          </NavActiveProvider>
        </div>
      </header>
    </HeaderOffsetTracker>
  );
}
