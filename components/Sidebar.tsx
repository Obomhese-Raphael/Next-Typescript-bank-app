"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link
                    href={"/"}
                    className='mb-12 flex cursor-pointer items-center gap-2'
                >
                    <Image
                        src={"/icons/logo.svg"}
                        width={30}
                        height={30}
                        alt='Horizon Logo'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h2 className='sidebar-logo'>Horizon</h2>
                </Link>
                {
                    sidebarLinks.map((item, index) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                        return (
                            <Link
                                className={cn("sidebar-link", {
                                    "bg-bank-gradient": isActive
                                })}
                                key={index}
                                href={item.route}
                            >
                                <div className="relative size-6">
                                    <Image
                                        src={item.imgURL}
                                        alt={item.label}
                                        fill
                                        className={cn({
                                            "brightness-[3] invert-0": isActive
                                        })}
                                    />
                                </div>
                                <p className={cn(
                                    "sidebar-label", {
                                    "!text-white": isActive
                                }
                                )}>{item.label}</p>
                            </Link>
                        )
                    })
                }
                USER
            </nav>
            FOOTER
        </section>
    )
}

export default Sidebar