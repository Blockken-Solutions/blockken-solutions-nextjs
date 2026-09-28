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
      <header className="site-header-bar">
        <NavActiveProvider sectionIds={navSectionIds}>
          <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between gap-3 py-3.5 pl-[max(var(--container-px),env(safe-area-inset-left))] pr-[max(var(--container-px),env(safe-area-inset-right))] sm:gap-4 sm:py-4 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:justify-normal lg:py-[1.125rem]">
            <Logo size="header" className="min-w-0 shrink-0" />
            <DesktopNav />
            <HeaderActions mobileNav={<MobileNav />} />
          </div>
        </NavActiveProvider>
      </header>
    </HeaderOffsetTracker>
  );
}
