import {
  DesktopNav,
  HeaderActions,
} from "@/components/layout/desktop-nav";
import { HeaderOffsetTracker } from "@/components/layout/header-offset-tracker";
import { HeaderPillLogo, HeaderPillWordmark } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavActiveProvider } from "@/components/layout/nav-active-provider";
import { navSectionIds } from "@/content/navigation";

export function SiteHeader() {
  return (
    <HeaderOffsetTracker>
      <header className="site-header-shell">
        <NavActiveProvider sectionIds={navSectionIds}>
          <div className="mx-auto w-full max-w-[var(--container-max)] px-[max(var(--container-px),env(safe-area-inset-left))] pr-[max(var(--container-px),env(safe-area-inset-right))] py-3 sm:py-3.5 lg:py-4">
            <div className="site-header-pill flex min-h-12 min-w-0 w-full items-center gap-2 rounded-full border border-primary py-0.5 pl-1.5 pr-2 sm:min-h-[3.25rem] sm:gap-2.5 sm:pl-2 sm:pr-2.5 md:gap-3 lg:min-h-14 lg:gap-4 lg:py-1 lg:pl-2.5 lg:pr-3">
              <div className="flex min-w-0 items-center gap-0.5 sm:gap-1 md:mr-2 lg:mr-3">
                <HeaderPillLogo />
                <HeaderPillWordmark className="min-w-0" />
              </div>
              <DesktopNav />
              <HeaderActions mobileNav={<MobileNav />} />
            </div>
          </div>
        </NavActiveProvider>
      </header>
    </HeaderOffsetTracker>
  );
}
