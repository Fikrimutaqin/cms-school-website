'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LogOut,
  GraduationCap
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { MOCK_MENU_ITEMS } from '@/types/mockData';
import { cn } from '@/lib/utils';

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = MOCK_MENU_ITEMS;

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <Sidebar collapsible="icon" className={cn(
      // Border
      'border-sidebar-border',
      // Background
      'bg-sidebar',
      // Foreground
      'text-sidebar-foreground'
    )}>
      <SidebarHeader className={cn(
        // Border
        'border-sidebar-border',
        // Background
        'bg-white',
        // Foreground
        'text-sidebar-foreground',
        // Padding
        'p-4'
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            // Flex
            'flex',
            // Size
            'h-9',
            'w-9',
            // Alignment
            'items-center',
            'justify-center',
            // Rounded
            'rounded-lg',
            // Background
            'bg-primary',
            // Foreground
            'text-white',
            // Shadow
            'shadow-md',
            'shadow-primary/10',
            // Shrink
            'shrink-0'
          )}>
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className={cn(
            // Flex
            'flex',
            // Direction
            'flex-col',
            // Hide when collapsible
            'group-data-[collapsible=icon]:hidden'
          )}>
            <h1 className={cn(
              // Font
              'font-bold',
              // Size
              'text-lg',
              // Foreground
              'text-foreground'
            )}>EduCMS</h1>
            <span className={cn(
              // Font
              'text-xs',
              // Foreground
              'text-muted-foreground'
            )}>School Admin</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          {/* <SidebarGroupLabel className={cn(
            // Font
            'text-sm',
            // Hide when collapsible
            'group-data-[collapsible=icon]:hidden',
            // Padding
            'px-3'
          )}></SidebarGroupLabel> */}
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.name}
                      render={<Link href={item.href} />}
                      className={cn(
                        isActive
                          ? "text-primary bg-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className={cn(
          // Border
          'border-t',
          'border-sidebar-border',
          // Background
          'bg-sidebar/50',
          // Padding
          'p-2',
          // Margin
          'mt-auto'
        )}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleLogout}
                tooltip="Logout"
                className={cn(
                  // Foreground
                  'text-muted-foreground',
                  // Display
                  'w-full',
                  'justify-start',
                  // Transition
                  'transition-all',
                  // Cursor
                  'cursor-pointer'
                )}
              >
                <LogOut className="h-4 w-4 shrink-0" />
                <span className="group-data-[collapsible=icon]:hidden">Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
