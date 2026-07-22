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
        <div className="mx-auto flex max-w-[56rem] items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6 glass-pill">
          <Logo />

          <NavActiveProvider sectionIds={navSectionIds}>
            <DesktopNav />
            <HeaderActions mobileNav={<MobileNav />} />
          </NavActiveProvider>
        </div>
      </header>
    </HeaderOffsetTracker>
  );
}
