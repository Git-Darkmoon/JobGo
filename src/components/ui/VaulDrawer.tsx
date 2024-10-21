"use client"

import { ROUTES } from "@/lib/routes"
import { BarChart3Icon, BriefcaseIcon, MenuIcon, PlusIcon } from "lucide-react"
import Link from "next/link"
import { Drawer } from "vaul"

export default function VaulDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="hover:scale-105 transition-all ">
        <MenuIcon size={30} strokeWidth={2.65} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
            />
            <div className="max-w-md mx-auto">
              {/* <Drawer.Title className="font-medium mb-4 text-gray-900">
                Navigate the dashboard.
              </Drawer.Title> */}
              <ul>
                <li>
                  <Link
                    className="border-b border-slate-300 text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
                    href={ROUTES.ADD_JOB}
                  >
                    <PlusIcon className="text-slate-800" strokeWidth={2.5} />
                    <h3 className="font-semibold text-gradient-green ">
                      Add Job
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    className="border-b border-slate-300 text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
                    href={ROUTES.ALL_JOBS}
                  >
                    <BriefcaseIcon
                      className="text-slate-800"
                      strokeWidth={2.5}
                    />
                    <h3 className="font-semibold text-gradient-green">
                      All Jobs
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
                    href={ROUTES.STATS}
                  >
                    <BarChart3Icon
                      className="text-slate-800"
                      strokeWidth={2.5}
                    />
                    <h3 className="font-semibold text-gradient-green">Stats</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
